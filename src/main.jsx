
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
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
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
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)