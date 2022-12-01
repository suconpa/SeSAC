import React from 'react';

function Prac01() {
    const names = ['HTML', 'CSS', 'Javascript', 'React'];

    // 데이터에 key 값으로 사용할 값이 없는 경우
    // map 함수에 전달되는 콜백함수의 인수인 index 값을 사용하면 됨
    // 단, 유일한 값이 없는 경우에만 사용하는 것이 좋음
    // 이유 : index를 key 값으로 사용하면 배열이 변경될 때 효율적으로 리렌더링 안됨
    const nameList = names.map(function(name, index){
        return <li key={index}>{name}</li>
    });

    // const nameList = names.map(name=><li>{name}</li>);

    return (
        <div>
            <ul>{nameList}</ul>
        </div>
    );
};

export default Prac01;

// App.js
/*
function App() {
  return (
   <Prac01/>

  );
}
export default App;
*/