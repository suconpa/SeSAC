import React from 'react';

function UserId(props){
    function updateValue(e){
        props.onAddId(e.target.value);
    }

    return (
        <div>
           <h1>ID : <input type="text" onChange={updateValue}/></h1>
        </div>
    );
};

export default UserId;

// App.js

/*
function App() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');


  function addIdHandler(id){
    setId(id);
  }

  function addPwHandler(pw){
    setPw(pw);
  }

  function printInfo(){
    if(id=='hannah' && pw=='1234') {
      alert('로그인 성공');
    }
    else{
      alert('로그인 실패')
    }
  }

  return (
      <div>
          <UserId onAddId={addIdHandler}/>
          <UserPw onAddPw={addPwHandler}/>
          <button onClick={printInfo}>Login</button>
      </div>
  );
};

export default App;
*/