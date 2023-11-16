import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,Outlet,RouterProvider,} from "react-router-dom";
import Layout from './Layout/Layout';
import AboutUs from "./Pages/AboutUs"
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Investors from './Pages/Investors';
import Teams from './Pages/Teams';
import Product from './Pages/Product';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children : [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/team",
        element: <Teams />
      },
      {
        path: "/investors",
        element: <Investors />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

