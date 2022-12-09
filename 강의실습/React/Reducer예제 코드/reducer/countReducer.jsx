//복잡한 함수를 따로 적어준 후 필요한 컴포넌트에 끌어다쓴다.
//보통 if,switch문과 많이 쓴다.

//useReducer() 함수가 들고올 함수
function countReducer(state, action) {
  //보통 key값자리에 type이라는 값을 써준다 (하지만 이름 마음대로변경가능)
  // action은 객체값으로 넣어줘야한다.
  switch (action.type) {
    //action안에 있는 type이 INCREMENT,DECREMENT일때 행동작성됨
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      //혹은 error 날때 나타낼 action
      return state;
  }
}

export default countReducer;
