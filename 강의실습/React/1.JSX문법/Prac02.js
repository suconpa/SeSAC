// App.js

// 실습1-2-1
// var와 let의 차이
// var는 scope(해당 값을 사용할 수 있는 코드 영역)가 함수 단위
// 결과 : a = bye
/*
function App() {
  var a = "hello";

  if(true){
    var a = "bye";
  }

  return(
    <div>
      <h1>{a}</h1>
    </div>
  );
}
*/

// 실습1-2-2
// var와 let의 차이
// let은 scope가 블록 단위이기 때문에 if문 내부에서 선언한 a 값은 if문 밖의 a값을 변경하지 않음
// 결과 : a = hello
function App() {
  let a = "hello";

  if(true){
    let a = "bye";
  }

  return(
    <div>
      <h1>{a}</h1>
    </div>
  );
}

export default App;