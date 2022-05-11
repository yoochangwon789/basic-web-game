// 깊은 복사와 얕은 복사
// 참조와 복사의 차이
const monsterList = [
    { name: '슬라임', hp: 25, att: 10, xp: 10 },
    { name: '스켈레톤', hp: 50, att: 15, xp: 20 },
    { name: '마왕', hp: 150, att: 35, xp: 50 },
];

const monster1 = JSON.parse(JSON.stringify(monsterList[0]));
const monster2 = monsterList[0];

monster1.name = '새 몬스터';
console.log(monsterList[0].name); // 슬라임

monster2.name = '새 몬스터';
console.log(monsterList[0].name); // 새 몬스터

console.log(monsterList[0] === monster1);   // false, 깊은 복사
console.log(monsterList[0] === monster2);   // true, 참조 관계


// 얕은 복사
const a = [];
const b = 'hello';
const c = {};

const arr = [a, b, c];

// 참조
const arr1 = arr;
arr[1] = 'hi';
console.log(arr);      // [ [], 'hi', {} ]
// 위의 것을 원하지 않을 때

// ... 을 붙여서 얕은 복사를 한다
const arr2 = [...arr];
arr2[1] = 'babo';
// 복사한 것이다 arr2[1]을 babo 로 바꿨는데 바뀌지 않았다.
console.log(arr);      // [ [], 'hi', {} ]

// 얕은 복사의 문제점
arr2[0].push(1);
// 문자열은 바뀌지 않았지만 배열같은 경우에는 바뀌는 것을 볼 수 있다.
console.log(arr);      // [ [ 1 ], 'hi', {} ]

const array = [{ j: 'k' }, { l: 'm' }];
const shallowCopy = [...array];
console.log(array === shallowCopy);           // false
console.log(array[0] === shallowCopy[0]);     // true

// 깊은 복사의 여러가지 방법
const a1 = 'b';
const c1 = ['d', true, 1];
const e1 = { g: 'h' };
const i1 = [{ j: 'k' }, { l: 'm' }];
const n1 = { o: { p: 'q'} };

// 원시값으로만 되어있는 변수는 그냥 새로운 변수에 대입
const a2 = a;
// 배열의 원소가 모두 원시값이면 slice() 로 복사해도 된다. 원시값은 참조가 안되기 때문
const c2 = c1.slice() // slice 를 쓰거나 [...c1] 처럼 복사하면 된다
// 객체 안의 객체 가 없으니 ... 으로 시용하면 된다.
const e2 = {...e1};
// 배열안의 객체가 있으므로 강한 복사를 해야함
const i2 = JSON.parse(JSON.stringify(i1));
// 객체안의 객체가 있으므로 강한 복사
const n2 = JSON.parse(JSON.stringify(n1));