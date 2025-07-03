var a = 100;
function test() {
  console.log("Inside function");
}

console.log(window.a);  // 100
console.log(this.a);    // 100
console.log(window === this); // true
console.log(test);
console.log(window.test)
