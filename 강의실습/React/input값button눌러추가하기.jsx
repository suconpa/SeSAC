import React, { useState } from "react";

const Child3 = () => {
  const [btValue, setBtValue] = useState(["홍길동", "김민수"]);
  const [textValue, setTextValue] = useState("");

  function inputEvent(e) {
    setTextValue([e.target.value]);
  }

  function btEvent() {
    setBtValue([...btValue, textValue]);
  }
  return (
    <div>
      <input type="text" onChange={inputEvent} />
      <button onClick={btEvent}>추가</button>
      <ul>
        {btValue.map((arr, index) => (
          <li key={index}>{arr}</li>
        ))}
      </ul>
    </div>
  );
};

export default Child3;
