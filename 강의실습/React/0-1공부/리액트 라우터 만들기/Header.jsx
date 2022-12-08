import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return <div className="header">헤더</div>;
};

export default Header;
