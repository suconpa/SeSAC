import React from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Product1 from "./components2/Product1";
import Home from "./components2/Home";
import NotFound from "./components2/NotFound";
import Root from "./components2/Root";
import ProductInfo from "./components2/ProductInfo";

const App2 = () => {
  //createBrowserRouter함수를 생성해준다.
  const router = createBrowserRouter([
    {
      path: "/",
      //컴포넌트 파일은 하나 생성하여 Menu와 Outlet의 영역을 담아준다.
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        //index는 local3000으로 접속했을때 defaultLayout을 기준으로 접속하게된다. 이때 / 가 겹치지않게 하기위해서 첫 페이지는 path가 아닌 index: true값을 지정해줘야한다.
        { index: true, element: <Home /> },
        { path: "/product1", element: <Product1 /> },
        { path: "/product1/:productId", element: <ProductInfo /> },

        // path를 사용하여 원하는 주소값을 써주고 element value에는 해당 컴포넌트를 써준다.
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
