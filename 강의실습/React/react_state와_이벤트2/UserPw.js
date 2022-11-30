import React from 'react';

function UserPw(props){
    function updateValue(e){
        props.onAddPw(e.target.value);
    }

    return (
        <div>
            <h1>PW : <input type="password" onChange={updateValue}/></h1>
        </div>
    );
};

export default UserPw;