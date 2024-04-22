import PrivateRoute from "./components/PrivateRoute.jsx";
import Home from "./pages/Home.jsx"
import MainLayout from "./pages/layout.jsx"
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx"
import AuthLayout from './pages/auth'
import ProfileLayout from "./pages/profile/index.jsx";
import ProfilePosts from "./pages/profile/posts.jsx";
import ProfileTagged from "./pages/profile/tagged.jsx";
import Logout from "./pages/logout.jsx";
import InboxLayout from "./pages/inbox/index.jsx";
import { child } from "firebase/database";
import Inbox from "./pages/inbox/inbox.jsx";
import Chat from "./pages/inbox/chat/index.jsx";

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        auth: true,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'logout',
                element: <Logout />
            },
            {
                path: ':username',
                element: <ProfileLayout />,
                children: [
                    {
                        index: true,
                        element: <ProfilePosts />
                    },
                    {
                        path: 'tagged',
                        element: <ProfileTagged />
                    },
                ]
            },
            {
                path: 'inbox',
                element: <InboxLayout />,
                children: [
                    {
                        index: true,
                        element: <Inbox />
                    },
                    {
                        path: ':conversationId',
                        element: <Chat />
                    }
                ]
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
]

const authCheck = routes => routes.map(route => {
    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = authCheck(route.children)
    }
    return route
})

export default authCheck(routes);