import styled from "styled-components"
import { useNavigate, Link } from "react-router-dom"
import { LinksEnum } from "../../links"
import { usePostsContext } from "../../PostsProvider"

const BlogHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
`

const LinkStyled = styled(Link)`
    display: block;
`

export const Blog = () => {
    const { getPosts } = usePostsContext()
    const navigate = useNavigate()

    const createPostOnClick = () => {
        navigate(LinksEnum.CREATE_POST)
    }

    return <>
        <BlogHeaderWrapper>
            <h2>Posts</h2>
            <button onClick={createPostOnClick}>Create post</button>
        </BlogHeaderWrapper>

        {getPosts().map(post => <LinkStyled key={post.id} to={post.id}>{post.name}</LinkStyled>)}
    </>
}