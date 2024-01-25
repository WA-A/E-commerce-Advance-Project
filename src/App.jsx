import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './Layouts/Layout.jsx';
import Home from './component/web/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,

    children:[
     {
      path:'/home',
      element:<Home/>,
     }
    ]
  }
]);


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
