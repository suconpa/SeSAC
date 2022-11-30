const person = {
  name: "soo",
  age: 20,
  addr: "seoul",
};

// for ... in문의 변수에 person 객체의 key가 할당
for (const key in person) {
  document.write(`${key} : ${person[key]}<br>`);
}
