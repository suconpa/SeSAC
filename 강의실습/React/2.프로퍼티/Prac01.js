import React from "react";

const Prac01 = (props) => {
  const { name, age, address } = props;

  return (
    <div>
      <h1>
        안녕하세요. 제 이름은 {name}입니다.
        <br />
        저는 {age}살이고, {address}에 살고 있습니다.
      </h1>
    </div>
  );
};

Prac01.defaultProps = {
  name: "정수아",
};

export default Prac01;

// App.js

/*
function App() {
    return (
        <div>
            <Prac01 age={20} address="서울" ncolor="blue" acolor="red" adcolor="orange"/>
        </div>
    );
}
*/
