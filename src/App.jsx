import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",    // each end point put in object
    element: <div>Hello world!</div>,
  },
  {
    path:'/home',
    element:<h2>Home Page</h2>
  
  }
]);


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
