const map = new Map();

const lee = { name: "Lee" };
const kim = { name: "Kim" };

// 객체도 key로 사용 가능
map.set(lee, "developer"); // { name: 'Lee' } => 'developer'
map.set(kim, "designer"); // { name: 'Kim' } => 'designer'

console.log(map);
console.log(map.get(lee)); // developer

console.log(map.has(kim)); // true
console.log(map.has("soo")); // false

map.delete(lee);
map.clear();

console.log(map); // {}
