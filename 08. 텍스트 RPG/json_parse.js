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
