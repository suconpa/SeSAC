class Users {
  constructor() {
    this.members = [
      { id: 1, name: "soo", addr: "seoul" },
      { id: 2, name: "Lee", addr: "busan" },
      { id: 3, name: "Kim", addr: "seoul" },
    ];
  }

  findById(id) {
    // id가 일치하는 사용자를 찾기
    // member = { id: 1, name: "soo", addr: "seoul" }
    // member.id = 1
    return this.members.filter((member) => member.id == id);
  }

  removeByAddr(addr) {
    // 지역이 서울이 아닌 member 제거 => 지역이 서울인 member만 남기면 됨
    // member = { id: 1, name: "soo", addr: "seoul" }
    // member.addr = "seoul"
    this.members = this.members.filter((member) => member.addr == "seoul");
    return this.members;
  }
}

// 객체 생성
const users = new Users();

// ID 값으로 사용자 찾기
const user = users.findById(1);

document.write(
  `<br>< ID가 1인 고객 정보 ><hr>이름 : ${user[0].name}<br>지역 : ${user[0].addr}`
);

// 지역이 서울이 아닌 고객 제거
const userSeoul = users.removeByAddr("seoul");

document.write(`<br><br>< 전체 고객 정보 ><hr>`);

userSeoul.forEach((user, i) => {
  document.write(
    `ID : ${user.id}<br>이름 : ${user.name}<br>지역 : ${user.addr}<hr>`
  );
});
