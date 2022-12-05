import React from "react";
import Child2 from "./Child2";
import Child3 from "./Child3";

const Child1 = () => {
  const style = {
    height: "200px",
    backgroundColor: "lightblue",
    padding: "8px",
  };
  console.log("child1 렌더링");
  return (
    <div style={style}>
      <p>Child1</p>
      <Child2 />
      <Child3 />
    </div>
  );
};

export default Child1;
