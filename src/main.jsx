
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './Pages/Blog.jsx';
import Login from './Login&SignUp/Login/Login.jsx';
import SignUp from './Login&SignUp/SignUp/SignUp.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Home from './Pages/Home.jsx';
import ChefRecipes from './Pages/ChefRecipes.jsx';
import PrivetRoute from './PrivetRoute/PrivetRoute.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/recipes/:id',
        element: <PrivetRoute><ChefRecipes></ChefRecipes></PrivetRoute>,
        loader: ({params})=>fetch(`https://bangla-recipes-server.vercel.app/chef/${params.id}`)
      },
      {
        path:'/recipe/:id',
        element: <PrivetRoute><ChefRecipes></ChefRecipes></PrivetRoute>,
        loader: ({params})=>fetch(`https://bangla-recipes-server.vercel.app/recipe/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },

      {
        path: '/sign-up',
        element: <SignUp></SignUp>
      },

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)