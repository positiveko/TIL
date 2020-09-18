// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all
// object = {key: value}; 오브젝트는 키와 밸류의 집합니다.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const name = 'edie';
const age = 4;
// print(name, age);
// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const edie = { name: 'edie', age: 4 };
print(edie);

edie.hasJob = true; // 동적으로 후에 다시 추가 가능
console.log(edie.hasJob); // but 유지 보수 힘듦

delete edie.hasJob; // 삭제도 가능.
console.log(edie.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(edie.name); // edie
// coding 하는 순간 바로 그 값을 받아오고 싶을 때 . 사용
console.log(edie['name']); // edie -> 반드시 string 타입으로 입력
// 정확히 어떤 키가 필요한지 모를 때, 런타임에서 결정될 때. computed properties 사용
edie['hasJob'] = true;
console.log(edie.hasJob); // true

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(edie, 'name'); // edie
printValue(edie, 'age'); // 4

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };

// 4번째 사람을 쓰려면 함수를 정해서 값만 전달해주는 방법이 있다.
const person4 = makePerson('edie', 5);
console.log(person4); // {name: "edie", age: 5}
function makePerson(name, age) {
  return {
    name, // name: name,
    age, // age: age, 생략 가능
  };
}

// 4. Constructor function
// 혹은 class 이용 가능
function Person(name, age) {
  // this = {}; // 생략된 것
  this.name = name;
  this.age = age;
  // return this; // 생략된 것
}
const person5 = new Person('higgins', 6);
console.log(person5); // Person {name: "higgins", age: 6}

// 5. in operator: property existence check (key in obj)
console.log('name' in edie); // true
console.log('age' in edie); // true
console.log('random' in edie); // false
console.log(edie.random); // undefined
// 해당하는 키가 object에 속해 있는지 확인 가능

// 6. for..in vs for..of
// for (key in obj)
// 모든 키들을 받아와서 처리하고 싶을 때,
console.clear();
for (key in edie) {
  console.log(key); // name age hasJob 출력
}

// for (value of iterable)
// 배열을 사용하고 싶을 때,
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // 1, 2, 4, 5 출력은 되지만 빙글빙글 돌아서 좋지 않음
}

//쉽게 할 수 있는 방법
for (value of array) {
  console.log(value); // 똑같이 나옴. 더 효율적.
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = { name: 'edie', age: '4' };
const user2 = user;
user2.name = 'coder';
console.log(user); //{name: "coder", age: "4"}

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3); // {name: "coder", age: "4"}

// new way
const user4 = {}; // 텅 빈 대상을 정의하고,
Object.assign(user4, user); // 대상, 붙여넣고자 하는 대상을 넣음
console.log(user4); // {name: "coder", age: "4"}

// new way 2
const user5 = Object.assign({}, user); //정의하면서 바로 대상 넣음
console.log(user5); //{name: "coder", age: "4"}

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // {'blue'}
console.log(mixed.size); // {'big'}
