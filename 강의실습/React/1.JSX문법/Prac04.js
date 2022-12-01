// App.js

// 실습1-4
// css 스타일링

function App() {
  const name = "리액트"
  
  const style = {
    backgroundColor : "blue",
    color : "yellow",
    fontSize : "50px",
    fontWeight : "bold",
  }

  return(
    <div style={style}>{name}</div>
  );
}

export default App;