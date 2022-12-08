import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import Root from "./components/Root";

const App2 = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/product", element: <Product /> },
        { path: "/product/:productId", element: <ProductInfo /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App2;
