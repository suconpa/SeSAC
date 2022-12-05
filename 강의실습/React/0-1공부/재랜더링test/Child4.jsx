import React from "react";

const Child4 = () => {
  const style = {
    height: "200px",
    backgroundColor: "wheat",
    padding: "8px",
  };

  console.log("Child4 랜더링");
  return (
    <div>
      <div style={style}>
        <p>Child4</p>
      </div>
    </div>
  );
};

export default Child4;
