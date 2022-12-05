import React from "react";

const Child3 = () => {
  const style = {
    height: "50px",
    backgroundColor: "lightgray",
  };

  console.log("Child3 렌더링");
  return (
    <div>
      <div style={style}>
        <p>Child3</p>
      </div>
    </div>
  );
};

export default Child3;
