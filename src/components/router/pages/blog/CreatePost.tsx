import { ChangeEventHandler, FormEventHandler, useState, FC } from 'react'
import styled from 'styled-components'
import { Post, usePostsContext } from '../../PostsProvider'
import { useNavigate } from 'react-router-dom'
import { LinksEnum } from '../../links'

const FormStyled = styled.form`
    margin-top: 28px;
    & input, & textarea {
        width: 100%;
        font-size: 24px;
        margin-bottom: 28px;
    }

    & label {
        font-size: 24px;
        font-weight: bolder;
    }
`

const InputContent = styled.textarea`
`

export const CreatePost: FC<Partial<Post>> = ({ id, name: nameToUpdate, content: contentToUpdate }) => {
    const [name, setName] = useState(id ? nameToUpdate || "" : "")
    const [content, setContent] = useState(id ? contentToUpdate || "" : "")
    const { createPost, updatePost } = usePostsContext()
    const navigate = useNavigate()

    const nameOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.currentTarget.value)
    }
    const contentOnChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setContent(e.currentTarget.value)
    }

    const handleCreate: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        if (id) {
            updatePost(id, { name, content })
        } else {
            createPost({ name, content })
        }

        navigate(LinksEnum.BLOG)

    }
    return <>
        <h2>{id ? 'Update' : 'Create'} Post</h2>
        <FormStyled onSubmit={handleCreate}>
            <label htmlFor="name">Name: </label>
            <input name="name" type="text" value={name} autoFocus onChange={nameOnChange} />

            <label htmlFor="content">Content: </label>
            <InputContent name="content" rows={25} value={content} onChange={contentOnChange} />

            <button type='submit'><h2>{id ? 'update' : 'Create'}</h2></button>
        </FormStyled>
    </>
}