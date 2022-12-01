import React from "react";
import "./dist/Prac02.css";

const Prac02 = () => {
  const users = [
    {
      id: 1,
      profile:
        "https://images.unsplash.com/photo-1664303167354-6c530671d1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lee",
      age: 20,
      address: "Seoul",
    },
    {
      id: 2,
      profile:
        "https://images.unsplash.com/photo-1664193017060-60f39584c640?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Kim",
      age: 30,
      address: "Busan",
    },
    {
      id: 3,
      profile:
        "https://images.unsplash.com/photo-1664165263956-79ac4d05fa29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Park",
      age: 40,
      address: "Jeju",
    },
    {
      id: 4,
      profile:
        "https://images.unsplash.com/photo-1663877175069-1fe1727f53ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Choi",
      age: 40,
      address: "Jeju",
    },
  ];

  return (
    <div className="content">
      {users.map((user) => {
        return (
          <div key={user.id} className="card">
            <div className="profile">
              <img
                src={user.profile}
                width="150px"
                height="200px"
                alt="사진없음"
              />
            </div>
            <div className="info">
              <h3>이름 : {user.name} </h3>
              <h3>나이 : {user.age} </h3>
              <h3>지역 : {user.address} </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Prac02;
