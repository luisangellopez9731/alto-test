import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Post, usePostsContext } from '../../PostsProvider'
import styled from 'styled-components'
import { CreatePost } from '.'

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PostTitle = styled.h2`
    margin-bottom: 20px;
`

export const PostDetail = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [post, setPost] = useState<Post | null>(null)
    const { id } = useParams()
    const { getPostById } = usePostsContext()

    useEffect(() => {
        setPost(getPostById(id!))
    }, [id])

    const editOnClick = () => {
        setIsEditing(!isEditing)
    }
    return <>
        <TitleWrapper>
            <PostTitle>{post?.name}</PostTitle>
            <button onClick={editOnClick}>{isEditing ? 'Cancel' : 'Edit'}</button>
        </TitleWrapper>
        {isEditing ? <CreatePost {...post} /> : <div dangerouslySetInnerHTML={{ __html: post?.content || '' }} />}
    </>
}