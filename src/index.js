// let fun = ()=> {
//   console.log("We are ready for Tic-Tac-Toe");
// }
// fun();


class MyLib {
  constructor() {
    this.foo = 1;
    this.bar = 2;
  }

  myPublicMethod1() {
    return this.foo;
  }

  myPublicMethod2(foo) {
    return foo + this.bar;
  }
}

const instance = new MyLib();
export { instance as MyLib };