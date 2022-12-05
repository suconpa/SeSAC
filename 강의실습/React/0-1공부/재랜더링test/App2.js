import React, { useState } from "react";
import Child1 from "./style/Child1";
import Child4 from "./style/Child4";

const App2 = () => {
  console.log("App 렌더링");

  const [num, SetNum] = useState(0);
  const onClickButton = () => {
    SetNum(num + 1);
  };
  return (
    <div>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      <Child1 />
      <Child4 />
    </div>
  );
};

export default App2;
