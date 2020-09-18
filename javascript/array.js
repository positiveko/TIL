//array method 중
//slice, splice, push, pop, filter, map 을
//활영한 함수를 작성해보세요

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('lemon', 'kiwi');
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); // 배열의 마지막 요소가 하나씩 없어짐
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('kiwi');
console.log(fruits); // kiwi 부터 시작

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits); // kiwi가 사라짐

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.splice(1); // 시작점 1에서 끝까지 다 지워버림
fruits.splice(1, 1); // 1에서 1개를 지움
fruits.splice(1, 1, 'lemon', 'cherry'); // 1에서 1개를 지우고 그 자리 레몬, 체리 추가.

// combine two arrays
const fruits2 = ['pear', 'coco'];
const newFruits = fruits.concat(fruits2); // 배열 둘을 합해줌

// 5. Searching
// indexOf: find the index
console.log(fruits.indexOf('apple')); // 사과가 몇번째에 있는지 출력
console.log(fruits.indexOf['1']); // -1 (없는 값)

// includes
console.log(fruits.includes('lemon')); // 포함하는지 t/f로 알려줌

// lastIndexOf
console.log(fruits.lastIndexOf('apple')); // 마지막에서 더 가까운 사과의 위치 출력

// q1. make a string out of an array
{
  const fruits = ['1', '2', '3', '4'];
  const result = fruits.join();
  console.log(result); // 1,2,3,4 (스트링으로 변환하여 보여줌)

  //const result = fruits.join('|'); // 1|2|3|4 (괄호 안 원하는 구분자 삽입 가능)
}

// q2. make an array out of a string
{
  const fruits = '1,2,3,4';
  const result = fruits.split(',');
  console.log(result); // ['1','2','3','4'] string을 배열로 바꾸어 표현. 괄호 안 구분자 삽입 가능
  // 구분자 설정 없으면 모든 스트링을 한 요소로 인식. 반드시 구분자 넣을 것.

  const result = fruits.split(',', 2); //['1','2']
}

// q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // [5, 4, 3, 2, 1]
  console.log(array); // [5, 4, 3, 2, 1] 배열 자체를 바꿔버린다는 것을 주의
}

// q4. make new array without the first two elements
// splice로 했을 때, 배열 자체가 바뀜. 새 배열을 만드는 것은 slice!
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result); // [3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// q5. find a student with the score 90
// find 사용. 첫번째로 true가 되는 밸류 출력
{
  const result = students.find(function (student, index) {
    return student.score === 90;
  });
  console.log(result); // 3번째 학생과 인덱스값 출력
}
// 더 간단하게 아래와 같이 정리
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled); // 굳이 true 쓸 필요 없음
  console.log(result);
}

// q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// map: 배열에 있는 요소 한 가지 한 가지를 다른 것으로 변환해줌.
{
  const result = students.map((students) => student.score);
  console.log(result);
}

{
  const result = students.map((students) => student.score * 2);
  console.log(result);
}


// q8. check if there is a student with the score lower than 50
// some: 배열의 요소 중에서 콜백 함수가 리턴이 true가 되는 애가 있는지 없는지 확인
// every: 배열의 모든 요소가 콜백 함수의 리턴이 true가 되는지 확인
{
  const result = students.some((student) =. student.score < 50);
  console.log(result); // true

  const result = students.every((student) => student.score < 50);
  console.log(result2); // false
}


// q9. compute students' average score
// reduce: 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용
{
  const result = students.reduce((prev, curr) => {
    console.log('--------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0); // 이니셜 값을 0으로 해서 prev에 0이 들어가도록.
  console.log(result / students.length); // 73.8
}
// 더 간단하게 표현하면,
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result . students.length); // 73.8
}


// reduceRight: 배열의 맨 마지막에서부터 시작.
{
  const result = students.reduceRight((prev, curr) => {
    console.log('--------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result);
}


// q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map(student => student.score).join();
  console.log(result); // 45, 80, 90, 66, 88
} 

// 만약 점수가 50점 이상인 사람들만 뽑아내고 싶다
{
  const result = students.map(student => student.score)
  .join()
  .filter(score => score >= 50);
  console.log(result); // 80, 90, 66, 88
}


// Bonus! do q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(student => student.score)
    .sort((a,b) => a - b)
    .join()
  console.log(result); // 45, 66, 80, 88, 90
}
// 반대로 하고 싶으면
{
  const result = students.map(student => student.score)
    .sort((a,b) => b - a )
    .join()
  console.log(result); // 45, 66, 80, 88, 90
}
