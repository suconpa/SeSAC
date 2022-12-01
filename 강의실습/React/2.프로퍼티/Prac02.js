import React from "react";

const Prac02 = ({ ncolor, acolor, adcolor, name, age, address }) => {
  return (
    <div>
      <h1>
        안녕하세요. 제 이름은 <span style={{ color: ncolor }}>{name}</span>
        입니다.
        <br />
        저는 <span style={{ color: acolor }}>{age}</span>살이고,
        <span style={{ color: adcolor }}>{address}</span>에 살고 있습니다.
      </h1>
    </div>
  );
};

Prac02.defaultProps = {
  name: "정수아",
};

export default Prac02;

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
