import { FC, ReactNode, createContext, useContext } from "react"
import { v4 as uuid } from 'uuid'

const POSTS_LOCAL_STORAGE_KEY = 'posts'

export interface Post {
    id: string
    name: string
    content: string
}

interface CreatePostDto {
    name: Post['name']
    content: Post['content']
}

interface PostContextProps {
    getPosts: () => Post[],
    getPostByName: (postName: Post['name']) => Post | null
    getPostById: (id: Post['id']) => Post | null
    createPost: (post: CreatePostDto) => Post
    updatePost: (id: Post['id'], data: CreatePostDto) => Post
}

const PostsContext = createContext<PostContextProps>({
    getPosts: () => [],
    getPostByName: () => null,
    getPostById: () => null,
    createPost: () => ({} as Post),
    updatePost: () => ({} as Post)
})

const getPostsFromDB = (): Post[] | null => {
    const posts = localStorage.getItem(POSTS_LOCAL_STORAGE_KEY)

    if (!posts) {
        return null
    }

    return (JSON.parse(posts))
}

const savePostsToDB = (posts: Post[]) => {
    localStorage.setItem(POSTS_LOCAL_STORAGE_KEY, JSON.stringify(posts))
}

export const usePostsContext = () => useContext(PostsContext)

export const PostsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const getPosts = () => {
        return getPostsFromDB() || []
    }

    const getPostByName: PostContextProps['getPostByName'] = (name) => {
        const posts = getPostsFromDB() || []

        return posts.find(post => post.name === name) || null
    }

    const getPostById: PostContextProps['getPostByName'] = (id) => {
        const posts = getPostsFromDB() || []
        return posts.find(post => post.id === id) || null
    }

    const createPost: PostContextProps['createPost'] = (post) => {
        const nameTrimmed = post.name.trim()

        if (nameTrimmed.length === 0) {
            throw new Error("Please provide name")
        }

        const posts = getPostsFromDB() || []

        const newPost = {
            id: uuid(),
            name: nameTrimmed,
            content: post.content
        }
        posts.push(newPost)

        savePostsToDB(posts)

        return newPost
    }

    const updatePost: PostContextProps['updatePost'] = (id, postData) => {
        const posts = getPostsFromDB() || []
        const postIndex = posts.findIndex(post => post.id === id)

        posts[postIndex] = { id, ...postData }

        savePostsToDB(posts)

        return posts[postIndex]
    }

    return <PostsContext.Provider value={{ getPosts, getPostByName, createPost, getPostById, updatePost }}>{children}</PostsContext.Provider>
}