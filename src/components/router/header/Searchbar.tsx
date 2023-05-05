import styled from "styled-components"
import { usePostsContext } from "../PostsProvider"
import { ChangeEventHandler, FormEventHandler, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LinksEnum } from "../links"

const InputStyled = styled.input`
    height: 35px;
    border-right: 0;
`

export const Searchbar = () => {
    const [search, setSearch] = useState("")
    const { getPosts, getPostByName } = usePostsContext()
    const navigate = useNavigate()

    const searchOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearch(e.currentTarget.value)
    }

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        const post = getPostByName(search)
        if (post) {
            setSearch("")
            navigate(LinksEnum.BLOG + "/" + post.id)
        }
    }

    return <>
        <form onSubmit={onSubmit}>
            <InputStyled type="search" list="postsNames" autoComplete="on" onChange={searchOnChange} />
            <button type="submit">Search</button>
        </form>

        <datalist id="postsNames">
            {getPosts().map(post => <option key={post.id} value={post.name} />)}
        </datalist>

    </>
}