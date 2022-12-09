import React, { useReducer } from "react";
import countReducer from "../reducer/countReducer";

//Counter컴포넌트를 생성한 이유는 Reducer 함수를 불러오기 위해서다 Reducer는 복잡한 함수를 저장시켜 "재사용" 하기위해 사용하는 훅이다.

const Counter = () => {
  //useState와 동일하게 선언을 해준다. 첫번째 인수자리엔 reducer함수이름(reducer파일이 import되었는지 확인할것) 두번째 인수자리엔 초기값 선언
  const [state1, dispatch이름변경가능] = useReducer(countReducer, 0);
  //state는 상태값 두번쨰 값은 dispatch

  function numUp() {
    dispatch이름변경가능({ type: "INCREMENT" });
  }

  function numDown() {
    dispatch이름변경가능({ type: "DECREMENT" });
  }


  return (
    <div>
      <p>현재 카운터 값은 {state1} 입니다</p>
      <button onClick={numUp}> +1</button>
      <button onClick={numDown}> -1</button>
    </div>
  );
};

export default Counter;
