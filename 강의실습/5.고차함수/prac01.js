// find
// find() 함수를 이용하여 특정 과일을 검색한 후 다음과 같은 결과를 출력하세요.
// 과일의 정보를 저장하는 객체를 생성
const fruits = [
  { name: "apple", quantity: 2, price: 1000 },
  { name: "banana", quantity: 3, price: 2500 },
  { name: "orange", quantity: 5, price: 5000 },
];

// 객체를 리턴
const result = fruits.find((fruit) => fruit.name === "banana");

// 객체 정보 화면 출력
document.write(
  `이름 : ${result.name}<br>수량 : ${result.quantity}<br>가격 : ${result.price}`
);

console.log(result); // { name: 'cherries', quantity: 5 }
