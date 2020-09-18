'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globacName = 'global name';
{
  let name = 'edie';
  console.log(name);
  name = 'hello';
  console.log(name);
}
console.log(name); // code block 안의 지역변수이므로 출력되지 않음
console.log(globacName); // code block 밖의 전역변수이므로 출력됨

// var (don't ever use this!)
// 단적인 예로, 값을 정의하기 전에도 출력이 됨
// var hoisting (move delaration from bottom to top)
// var has no block scope. code block 밖에서도 출력.
console.log(age); // undefined
age = 4;
console.log(age);
var age;

// let으로 var의 문제점을 해결하고자 함.
name = 4;
let name; // 에러

// 3. Constants r(read only)
// favor immutable data type always for a few reasons:
const daysInWeek = 7;
const maxNumber = 5;
// Note!
// immutable data types: premitive types, frozen objects (i.e. object.freeze())
// mutable data types: all objects by default by default are mutable in JS
// favor immtable data type always for a few reasons:
//  - security: immutable하기 때문에 코드 보안 향상
//  - thread safety: 다양한 thread들의 값이 동시에 변경되지 않음
//  - reduce human mistakes: 자의, 타의에 의한 실수 방지

// 4. Variable types
// primitive(더 이상 나눠지지 않는 작은 단위의), single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function(function도 데이터 타입이므로 변수에 할당이 가능)
const count = 17; // integer 정수
const size = 17.1; // decimal number 소숫점 숫자
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
// 값에 상관 없이 타입은 number로 나옴

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; // 무한대
const negativeInfinity = -1 / 0; // 네거티브 무한대
const NaN = 'not a number' / 2; // nAn
console.log(infinity); // infinity
console.log(negativeInfinity); // -infinity
console.log(NaN); // NaN

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // 이렇게 쓰지 말 것!!

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; // 값이 없이 텅텅 비어있는 것
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // 선언은 되었지만 아무것도 값이 지정되어 있지 않음.
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요하거나, 동시다발적으로 일어나는 코드에서 우선순위를 주고 싶을 때 사용
// string을 쓰기도 하지만 string은 동일한 문자일 때 동일한 식별자로 간주되기도 함
// symbol은 동일한 문자를 쓰더라도 다른 식별자로 인식이 됨
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// 만약에 동일한 symbol을 만들고 싶다면,
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
//symbol을 그냥 출력하면 오류가 나므로 .description을 추가해야 함
console.log(`value: ${symbol1.description}, type: ${typeof Symbol1}`);

// object, real-life object, data structure
const edie = { name: 'edie', age: 20 };
edie.age = 21; // const로 지정이 된 edie는 다시 할당이 불가하지만, 그 아래 객체는 가능.

// 5. Dynamic typing: dynamically typed language
// c나 java는 statically. 
// 자바스크립트는 선언할 때 어떤 타입인지 선언하지 않고, 
// 런타임에서 할당된 값에 따라서 타입이 변결될 수 있다. (오류날 가능성 많음)
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); // hello, string
text = 1; 
console.log(`value: ${text}, type: ${typeof text}`);// 1, number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75, string
text = '8' / '2'; // 이렇게 문자로 바꿔주더라도 아래와 같이 숫자로 바꾸어 수식으로 계산.
console.log(`value: ${text}, type: ${typeof text}`); // 4, number


