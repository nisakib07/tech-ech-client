import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import AddProducts from "./pages/AddProducts/AddProducts";
import Products from "./pages/Products/Products";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import Details from "./pages/Details/Details";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Cart from "./pages/Cart/Cart";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProducts",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:brand",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
      },
      {
        path: "/products1/updateProduct/:_id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products1/${params._id}`),
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products1/${params._id}`),
      },
      // {
      //   path: "/cart",
      //   element: (
      //     <PrivateRoute>
      //       <Cart></Cart>
      //     </PrivateRoute>
      //   ),
      //   loader: () => fetch("http://localhost:5000/cart"),
      // },
      {
        path: "/cart/:username",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.username}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>{" "}
  </React.StrictMode>
);
