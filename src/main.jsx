
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch('https://bangla-recipes-server.vercel.app/')
      },
      {
        path:'/recipes/:id',
        element: <ChefRecipes></ChefRecipes>,
        loader: ({params})=>fetch(`https://bangla-recipes-server.vercel.app/chef/${params.id}`)
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