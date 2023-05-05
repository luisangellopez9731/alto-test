import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import { Header } from "./header"
import { About, Blog, Contact, CreatePost, Home, PostDetail } from "./pages"
import { LinksEnum } from "./links"
import styled from "styled-components"
import { PostsProvider } from "./PostsProvider"

const LayoutChildWrapper = styled.div`
    margin: 20px 20px 0 20px;
`

const Layout = () => {
    return <>
        <Header />
        <LayoutChildWrapper>
            <Outlet />
        </LayoutChildWrapper>
    </>
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: LinksEnum.ABOUT,
                element: <About />
            },
            {
                path: LinksEnum.BLOG,
                element: <Blog />
            },
            {
                path: LinksEnum.CREATE_POST,
                element: <CreatePost />
            },
            {
                path: LinksEnum.POST_DETAIL,
                element: <PostDetail />
            },
            {
                path: LinksEnum.CONTACT,
                element: <Contact />
            }
        ]
    }
])

export const Router = () => <PostsProvider><RouterProvider router={router} /></PostsProvider>