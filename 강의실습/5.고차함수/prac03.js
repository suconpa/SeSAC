// map
const numbers = [5, 19, 42, 36, 70];

// 아이템을 2배
const result = numbers.map((item) => item * 2);
console.log(result);

// 아이템이 3의 배수이면 2배, 아니면 그냥 출력
const newArr = result.map((item) => {
  if (item % 3 == 0) {
    item = item * 2;
  }
  return item;
});

document.write(`결과 : ${newArr}`);
