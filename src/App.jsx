import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './Layouts/Layout.jsx';
import Home from './component/web/Home/Home.jsx';
import Categories from './component/web/Categories/Categories.jsx';
import DashboardLayouts from './Layouts/DashboardLayouts.jsx';
import Homedashboard from './component/dashboard/Home/Homedashboard.jsx';
import CategoriesDashboard from './component/dashboard/Categories/CategoriesDashboard';
import Register from './component/web/Register/Register.jsx';
import Login from './component/web/Login/Login.jsx';

const router = createBrowserRouter([
  {      // Path User
    path:'/',
    element:<Layout/>,

    children:[    // any children see parent
    {
      path:'register',
      element:<Register/>,
     },
     {
      path:'login',
      element:<Login/>,
     },
     {
      path:'home',
      element:<Home/>,
     },
     {
      path:'categories',
      element:<Categories/>
     },
     {
      path:'*',
      element:<h2>Page not Found</h2>,
     },
    ]
  },
  {      // Path Admin
    path:'/dashboard',
    element:<DashboardLayouts/>,

    children:[    // any children see parent
     {
      path:'home',
      element:<Homedashboard/>,
     },
     {
      path:'categories',
      element:<CategoriesDashboard/>
     },
    ]
  }
]);


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
