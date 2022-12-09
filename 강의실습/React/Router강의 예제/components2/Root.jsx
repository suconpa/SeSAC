import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
const Root = () => {
  return (
    <div>
      {/* App에서 지정한 Root의 자식으로 Menu, Outlet을 넣어줌 */}
      <Menu />
      <Outlet />
    </div>
  );
};

export default Root;
