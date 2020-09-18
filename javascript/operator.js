// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
// tip: 특수문자 앞에는 \, 줄바꿈 \n, 탭키 \t

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder 나머지
console.log(2 ** 3); // exponentiation 제곱

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`); // 3, 3
// counter = counter + 1; 위 한 줄은 이 수식과 동일함
// preIncrement = counter;
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // 3, 4
// postIncrement = counter;
// counter = counter + 1;
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 3, 3
const postDecrement = counter--;
console.log(`preDecrement: ${postDecrement}, counter: ${counter}`); // 3, 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false

// || (or), finds the first truthy value (처음으로 true가 나오면 거기서 멈춘다!)
console.log(`or: ${value1 || value2 || check()}`); // 셋 중에 true인 것을 뱉음

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('d');
  }
  return true;
}
// 중요한 것은 위 check()처럼 computation이 헤비한, 연산이 많은 함수를 호출하거나
// expression 같은 것들을 앞에 두지 않는 것이 중요!
// 간단한 함수들을 앞에 두고, 그것들이 false일 때에만 헤비한 함수를 호출하도록 해야함.

// && (and), finds the first falsy value (처음으로 false가 나오면 거기서 멈춘다!)
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('d');
  }
  return true;
}
// 마찬가지로 연산이 많고 헤비한 함수는 뒤에 둘 것.

// often used to compress long if-statement
// nullableObject && nullableObject.something
// 위에서 nullableObject가 null이 아닐 때만 something을 받아옴. 아래처럼 코드로 풀면
if (nullableObject != null) {
  nullableObject.something;
}

// ! (not) 값을 반대로 바꿔줌.
console.log(!value1); // false (value1이 true기 때문)

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const edie1 = { name: 'edie' };
const edie2 = { name: 'edie' };
const edie3 = edie1;
console.log(edie1 == edie2); // false
console.log(edie1 === edie2); // false
console.log(edie1 === edie3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'edie';
if (name === 'edie') {
  console.log('Welcome, Edie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no'); // no
// ~~가 트루니 ? 맞으면 좌측 : 틀리면 우측 실행

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!'); // go away
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`); // while 3, 2, 1
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 블럭을 먼저 실행시키고 싶다면 do while을 쓰면 됨.
// 조건문이 맞을 때만 실행시키고 싶다면 while을 쓰면 됨.
do {
  console.log(`do while: ${i}`); // do while: 0
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`); // for 3, 2, 1 출력
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`); // inline variable for: 3, 1
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// 01. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// 02. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
