import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Investors from "../Pages/Investors";
import Teams from "../Pages/Teams";
import Product from "../Pages/Product";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import Awards from "../Pages/Awards";

export const ROOT = "/";
export const HOME = "/home";
export const ABOUT = "/about";
export const PRODUCT = "/product";
export const TEAM = "/team";
export const INVESTORS = "/investors";
export const CONTACT = "/contact";
export const LOGIN = "/login"
export const SIGNUP = "/signup"
export const AWARDS = "/awards"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROOT,
        element: <Home />,
      },
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: ABOUT,
        element: <AboutUs />,
      },
      {
        path: PRODUCT,
        element: <Product />,
      },
      {
        path: TEAM,
        element: <Teams />,
      },
      {
        path: INVESTORS,
        element: <Investors />,
      },
      {
        path: AWARDS,
        element: <Awards />,
      },
      {
        path: CONTACT,
        element: <ContactUs />,
      },
      {
        path: LOGIN,
        element: <LoginPage />,
      },
      {
        path: SIGNUP,
        element: <SignupPage />,
      },
    ],
  },
]);
