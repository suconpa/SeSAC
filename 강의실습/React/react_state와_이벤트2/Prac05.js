import React, { useState } from "react";

const Prac07 = (props) => {
  const { list } = props;
  const [total, setTotal] = useState(0);

  const changeHandler = (checkbox) => {
    if (checkbox.checked) {
      setTotal((prevState) => prevState + parseInt(checkbox.value));
    } else {
      setTotal((prevState) => prevState - parseInt(checkbox.value));
    }
  };

  return (
    <div>
      {list.map((item) => (
        <label key={item.name}>
          <input
            type="checkbox"
            value={item.price}
            onChange={(e) => changeHandler(e.target)}
          />
          {item.name}
        </label>
      ))}
      <br />
      <p>합계 : {total} </p>
    </div>
  );
};

export default Prac07;

/*
function App() {
    const productList = [
      {
        name: "모자",
        price: 10000,
      },
      {
        name: "신발",
        price: 30000,
      },
      {
        name: "가방",
        price: 80000,
      },
    ];
    
    return (
        <>
          <CheckBox list={productList} />
        </>
      );
    }
    
    export default App;
*/
