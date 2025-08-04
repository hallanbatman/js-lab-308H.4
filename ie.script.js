// part one
let first = "";
let sec = "";
first = "one";
sec = "two";
console.log("string var:", first, sec);

// part 2
let arr = [];
arr.push(first);
arr.push(sec);
console.log("first array:", arr);

// arr = [];

let otherArr = [];
otherArr.push(arr);
console.log("second array:", otherArr);
arr = [];
console.log("second array:", otherArr);
first = "1";
sec = "2";
arr.push(first);
arr.push(sec);
console.log("first array:", arr);
otherArr.push(arr);
console.log("second array:", otherArr);