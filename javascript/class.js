'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntatical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const edie = new Person('edie', 20);
console.log(edie.name); // edie
console.log(edie.age); // 20
edie.speak(); // edie: hello!

// 2. Getter and Setters
// 클래스를 사용하는 사용자가 바보 같이 잘못 사용해도 방어적으로
// 사용할 수 있도록 해주는 것이 게터와 세터
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); // -1

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //     throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value; // value가 -라면 0을 쓰고 아니면 지정된 밸류로 하겠다.
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// too soon!
// 나온지 얼마 되지 않아 최신 브라우저에서도 지원하지 않음

class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// too soon!
// object에 상관없이 class에서 쓰일 수 있는 거라면
// static 과 static methods 를 이용해서 작성하는 것이 메모리 사용 줄여줌.
class Article {
  static publisher = 'Edie Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Edie Coding
Article.printPublisher(); // Edie Coding

// 5. 상속과 다양성
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawig ${this.color} color of`);
  }
  getArea() {
    return width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {}
// shape 을 사용하면 shape에서 사용한 연산자가 자동으로 포함이 됨
// 상속이 가능함.

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
const triangle = new Triangle(20, 20, red);
triangle.draw(); // drawing red color of
// 실행했을 때 자동으로 shape의 constructor가 상속이 됨

console.log(rectangle.getArea()); // 400
console.log(triangle.getArea()); // 400 -> 틀림. 이 때 다양성 사용

class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2; // 200. overwriting이 가능
  }
  draw() {
    super.draw(); // 부모의 draw를 호출
    console.log('△'); // Triangle에 overwriting
  }
}

// 6. Class checking: instanceOf
// 왼쪽에 있는 object가 우측의 class를 통해 만들어진 것인지 확인
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t
