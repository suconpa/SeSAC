import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    // Menu안에 들어갈 item들을 넣어준다. 이때 App에 createBrowserRouter()함수안에 item자리를 만들어줘야한다. 리액트에선 <a>태그대신 link를 사용한다.
    <div>
      <Link to="/">Home</Link>
      <Link to="/product1">Product1</Link>

    </div>
  );
};

export default Menu;
