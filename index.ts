import './type/type';
import './style.css';

// 타입체크
let 이름: string = 'kim';
이름 = '123';

let 이름2: string[] = ['kim', 'park'];
let 나이: { age: number } = { age: 12 };

// | == Union type
let 이름3: string | number = 'kim';
let 이름6: string[] | number = ['kim'];

type nameType = string | number;
let 이름4: nameType = 'kim';

type NameType = 'kim' | 'park';
let 이름5: NameType = 'kim';

// 리턴값도 number
function 함수명(x: number): number {
  return x * 2;
}
함수명(32);

// 에러
// function 함수명2(x: number | string) {
//   return x * 2;
// }

// 가능
function 함수명3(x: number | string) {
  if (typeof x === 'number') {
    return console.log(x * 2);
  }
}
함수명3(9);

type Member2 = [number, boolean];
let john: Member2 = [100, false];

// type Member = { name: string; };
let john2: Member = { name: 'kim' };

// type Object
type MyObject = {
  name?: string;
  age: number;
};
let 철수: MyObject = {
  name: 'kim',
  age: 50,
};

type MyObject2 = {
  [key: string]: number; // 모든 오브젝트 속성 number
};
let 철수2: MyObject2 = {
  age: 50,
  weight: '100',
};

// class
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
