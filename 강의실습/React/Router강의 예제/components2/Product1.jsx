import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Product1 = () => {
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();

  //이때 useState를 사용한 값은 초기 값이 담겨있지않은경우 1번 click할때는 빈값을 반환하기때문에 페이지가 바로 이동하지않는다. 이럴떈 useEffect를 사용해주자
  function clickHandler(e) {
    setProductId(e.target.value);
    console.log(productId);
  }

  useEffect(() => {
    navigate(`/product1/${productId}`);
  }, [productId]);

  return (
    <div>
      {/* 제품상세페이지 value를 작성해주고 click시 해당 값이 navigate1/value 뒤에 작성되게 한다 */}
      <button onClick={clickHandler} value="p001">
        1
      </button>
      <button onClick={clickHandler} value="p002">
        2
      </button>
      <button onClick={clickHandler} value="p003">
        3
      </button>
    </div>
  );
};

export default Product1;
