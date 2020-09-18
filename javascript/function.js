// Function
// - fundamental nuilding block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body/// return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello(); // Hello (쓸모가 없음)

function log(message) {
  console.log(message);
}
log('Hello@'); // Hello@
log(1234); //1234

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(edie);
console.log(edie); // {name: "coder"}

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMeasage('Hi!'); // Hi! by unknown

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg); // 더 간단하게 호출
  }

  args.forEach((arg) => console.log(arg)); // 더 더욱 간단하게 호출
}
printAll('dream', 'coding', 'edie');

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  console.log(childMessage); // error
}
printMessage();
console.log(message); // error

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic... 블럭 안에서 로직을 많이 작성하면 가독성이 많이 떨어짐..
  }
}
// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 맞지 않을 때는 빨리 return을 해서 빠르게 함수를 종료하고
  } // 조건이 맞을 때만 필요한 조건들을 실행하는 것이 좋음
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as a value to variable
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function (or named function)
  console.log('print');
};
print(); // print
const printAgain = print;
printAgain(); // print
const sumAgain = sum;
console.log(sumAgain(1, 3)); // 4

// 2. Callback function using function expression
// 콜백: 함수를 전달해서 상황이 맞으면 전달된 함수를 부르는 것
function randomQuiz(answer, printYes, printNo) {
  // 두 가지의 콜백함수가 parameter로 전달되어
  if (answer === 'love you') {
    printYes(); // 정답이 맞으면 printYes 함수 호출
  } else {
    printNo(); // 틀리면 printNo 함수 호출
  }
}
const printYes = function () {
  // anonymous function
  console.log('yes!');
};

const printNo = function print() {
  // named function (better debugging in debugger's stack traces)
  console.log('no!');
  print(); // recursions (함수 안에서 본인 함수를 호출하는 것 -> 무한 루프)
};
randomQuiz('wrong', printYes, printNo); // no!
randomQuiz('love you', printYes, printNo); // yes!

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint!');

const add = (a, b) => a + b;

const add = function (a, b) {
  return a + b;
};

const simpleMultiply = (a, b) => {
  // 길어질 경우 블록 이용해서 처리 가능. return은 꼭 써야함.
  // do sth more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
function hello() {
  console.log('IIFE');
}
hello(); // 이렇게 하지 않고,

(function hello() {
  console.log('IIFE');
})(); // 괄호로 묶어 바로 호출 가능!
