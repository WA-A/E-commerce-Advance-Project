import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './Layouts/Layout.jsx';
import Home from './component/web/Home/Home.jsx';
import Categories from './component/web/Categories/Categories.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,

    children:[    // any children see parent
     {
      path:'/home',
      element:<Home/>,
     },
     {
      path:'/categories',
      element:<Categories/>,
     },
    ]
  }
]);


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
