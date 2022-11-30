const array = [10, 20, 30, 40, 50];

// for ... of문 변수에 array의 아이템이 순차적으로 할당
for (const item of array) {
  document.write(`${item} `); // 10 20 30 40 50
}

const say = "Hello";

// for ... of문 변수에 say의 글자가 순차적으로 할당
for (const item of say) {
  document.write(`${item} `); // H e l l o
}
