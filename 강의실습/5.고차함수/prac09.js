const map = new Map();

const lee = { name: "Lee" };
const kim = { name: "Kim" };

// 객체도 key로 사용 가능
map.set(lee, "developer");
map.set(kim, "designer");

console.log("Map 객체의 key");
for (const key of map.keys()) {
  console.log(key); // { name: 'Lee' }
  // { name: 'Kim' }
}

console.log("Map 객체의 value");
for (const value of map.values()) {
  console.log(value); // developer
  // designer
}
