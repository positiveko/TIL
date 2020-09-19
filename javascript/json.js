//Json
// JavaScript Object Notation
// 데이터를 주고 받을 때 사용하는 가장 가벼운 포맷
// 프로그램 언어와 상관 없이 쓸 수 있다
// 공부 포인트: object를 어떻게 serialize 해서 JSON으로 변환할지,
//             다시 어떻게 deserialize 해서 object로 변환할 건지.

// 1. Object to JSON
// stiringify (obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"]

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2020-09-19T07:25:46.313Z"}
// 콘솔은 표기되지 않음. 콘솔은 object에 포함되는 data기 때문

// 만약 json을 좀더 통제하고 싶다면,
// 원하는 property만 골라서 정의할 수 있다.
json = JSON.stringify(rabbit, ['name']);
console.log(json); // {"name":"tori"}

// 혹은 콜백함수를 넣을 수도 있다.
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value;
});
console.log(json);
//key: , value: [object Object]
//key: name, value: tori
//key: color, value: white
//key: size, value: null
//key: birthDate, value: 2020-09-19T07:30:24.372Z
//key: jump, value: () => {
//     console.log(`${name} can jump!`);
//   }
//{"name":"tori","color":"white","size":null,"birthDate":"2020-09-19T07:30:24.372Z"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'edie' : value; // 키가 이름이면 이디로 설정하고, 이름이 아니면 오리지널 밸류
});
console.log(json);
// name의 밸류가 edie로 설정이 됨.
//key: , value: [object Object]
//key: name, value: tori
//key: color, value: white
//key: size, value: null
//key: birthDate, value: 2020-09-19T07:35:01.413Z
//key: jump, value: () => {
//     console.log(`${name} can jump!`);
//   }
//{"name":"edie","color":"white","size":null,"birthDate":"2020-09-19T07:35:01.413Z"}

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj); // {name: "tori", color: "white", size: null, birthDate: "2020-09-19T07:38:10.378Z"}

// point!
rabbit.jump(); // can jump!
//obj.jump(); // error (deserialize된 obj에는 jump함수가 없다)

console.log(rabbit.birthDate.getDate()); // 19
// console.log(obj.birthDate.getDate()); // error (birthDate가 string 형태이기 때문)
// 만약 birthDate를 출력하고 싶다면,
console.clear();
json = JSON.stringify(rabbit);
const obj1 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj1.birthDate); // Sat Sep 19 2020 16:47:38 GMT+0900 (대한민국 표준시)
console.log(obj1.birthDate.getDate()); // 19
