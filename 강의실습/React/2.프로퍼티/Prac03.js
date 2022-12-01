import React from "react";

function Prac03(props) {
  const { name, age, address, ncolor, acolor, adcolor } = props;

  const nstyle = {
    backgroundColor: "yellow",
    color: ncolor,
    fontSize: "50px",
    fontWeight: "bold",
  };

  const astyle = {
    backgroundColor: "green",
    color: acolor,
    fontSize: "50px",
    fontWeight: "bold",
  };

  const adstyle = {
    backgroundColor: "blue",
    color: adcolor,
    fontSize: "50px",
    fontWeight: "bold",
  };

  return (
    <div>
      <h1>
        안녕하세요. 제 이름은 <span style={nstyle}>{name}</span>입니다.
        <br />
        저는 <span style={astyle}>{age}</span>살이고,{" "}
        <span style={adstyle}>{address}</span>에 살고 있습니다.
      </h1>
    </div>
  );
}

Prac03.defaultProps = {
  name: "정수아",
};

export default Prac03;

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
