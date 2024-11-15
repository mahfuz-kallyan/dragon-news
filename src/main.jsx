import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Error from './Pages/Error.jsx';
import CategoryNews from './Pages/CategoryNews.jsx';
import Authlayout from './AuthLayout/Authlayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ]
  },
  {
    path: "/auth",
    element: <Authlayout></Authlayout>,
    children:[
      {
        path: "/auth/login",
        element: <h2>Login</h2>,
      },
      {
        path: "/auth/register",
        element: <h2>Register</h2>,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
