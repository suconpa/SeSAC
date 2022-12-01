// App.js

// 실습1-3
// 삼항연산자
function App() {
  const name = "리액트"

  return(
    <div>
      {name === '리액트' ? (<h1>리액트입니다.</h1>) : (<h1>리액트가 아닙니다.</h1>)}
    </div>
  );
}

export default App;