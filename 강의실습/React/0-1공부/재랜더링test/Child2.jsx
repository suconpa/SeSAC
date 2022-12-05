import React from 'react';

const Child2 = () => {
  const style = {

    height: "50px",
backgroundColor: "lightgray",


  

  }

  console.log("Child2 렌더링")
  return (
    <div style={style}>
      <p>Child2</p>
    </div>
  );
};

export default Child2;