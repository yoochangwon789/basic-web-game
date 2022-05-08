const answer = [3, 1, 4, 6];
const value = '3124';
let strike = 0;
let ball = 0;
for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) {
        if (index === i) {
            strike++;
        } else {
            ball++;
        }
    }
}
console.log(strike, ball);

// forEach
const answer1 = [3, 1, 4, 6];
const value1 = '3124';
let strike1 = 0;
let ball1 = 0;

// element 는 배열의 요소, i 는 index
answer1.forEach((element, i) => {
    const index = value1.indexOf(element);
    if (index > -1) {
        if (index === i) {
            strike1++;
        } else {
            ball1++;
        }
    }
});
console.log(strike1, ball1);

// map
// 배열의 요소의 값들을 각각 바꿔줄 수 있다.
// 원본은 바뀌지 않는다.
const array = [1, 2, 3, 4];
// 기존 배열을 수정안하고 새로운 배열을 생성한다.
array.map((element, i) => {
    return element * 2;
});
console.log(array);
console.log(array.map((element, i) => {
    return element * 2;
}));

// 길이가 9인 빈배열
Array(9);
// ubifined 가 9개 차있다.
Array(9).fill();
// 0이 9개 차있다.
Array(9).fill(0);
// map 을 사용해서 1~9 까지 숫자를 배열에 넣는 법
Array(9).fill(0).map((element, index) => {
    return index + 1;
});
console.log(Array(9).fill(0).map((element, index) => {
    return index + 1;
}));

// slice 배열 자르기
// 원본은 바뀌지 않는다. 마지막 포인트는 포함하지 않는다.
const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.slice(0, 3));
// 시작점 부터 끝까지
console.log(arr.slice(4));
// 뒤에서 첫번째 까지 마지막 꺼는 포함하지 않는다.
console.log(arr.slice(5, -1));
// 뒤에서 다섯번째 부터 뒤에서 첫번째 까지 마지막 꺼는 포함하지 않는다.
console.log(arr.slice(-5, -1));
console.log(arr.slice(-5));

// sort 배열 정렬
// 원본을 바꾼다.
const arrSort = [5,8,9,3,2,4,1,7,6];
// sort a - b 인 경우 오름차순
console.log(arrSort.sort((a, b) => a - b));
console.log(arrSort);

// sort b - a 인 경우 내림차순
console.log(arrSort.sort((a, b) => b - a));
console.log(arrSort);

// 만약 원본을 그대로 두고싶은 경우는 slice() 함수를 추가하면 된다.
const arrSort2 = [5,8,9,3,2,4,1,7,6];
console.log(arrSort2.slice().sort((a, b) => a - b));
console.log(arrSort2);

// reduce 함수
const arrReduce = [1, 2, 3, 4];
console.log(arrReduce.reduce((a, c) => (a + c), 0));
// 두번 째 인수는 초기값 자리이다.
// 초기값은 처음 누적값이 된다. 즉 누적값은 0 이다.
// (a , c) a 는 누적값 c 는 다음 값
// 함수의 동작원리는 누적값과 현재값을 더한 값을 반복문이랑 똑같이 반복한다. 곱셈이든 나누기든 빼기든 상관없고
// 연산식 이든 모든 상관없다. 누적값과 현재값을 반복해서 연산한다.
// return 값으로는 마지막 누적값이다.
// a: 0  c: 1
// a: 1  c: 2
// a: 3  c: 3
// a: 6  c: 4
// a: 10
// return 10 으로 반환

console.log(arrReduce.reduce((a, c) => (a * c), 0));
// a: 0  c: 1
// a: 0  c: 2
// a: 0  c: 3
// a: 0  c: 4
// a: 0
// return 0 으로 반환  

console.log(arrReduce.reduce((a, c) => (a * c), 1));
// a: 1  c: 1
// a: 1  c: 2
// a: 2  c: 3
// a: 6  c: 4
// a: 24
// return 24 으로 반환  

console.log(arrReduce.reduce((a, c) => (a + c)));
// 초기값 을 넣지 않는 경우 첫번째 값이 초기값이다.
// c 는 초기값 다음값부터 반복한다. 3번 반복
// a: 1  c: 2
// a: 3  c: 3
// a: 6  c: 4
// a: 10
// return 10 으로 반환  


const arrayReduceObject = ['철수', '짱구', '유리', '맹구'].reduce((a, c, i) => { a[i] = c; return a }, {})
console.log(arrayReduceObject);
// 배열을 객체로 변환
// (a, c , i)   a = 누적값  c = 현재값  i = 인덱스
// 초기값을 {}
// a[i] = c 먼저 하고 return

// a: {}  c: 철수  i: 0
// a: {0: 철수}  c: 짱구   i: 1
// a: {0: 철수, 1: 짱구}  c: 유리   i: 2
// a: {0: 철수, 1: 짱구, 2: 유리}  c: 맹구   i: 3
// return a: {0: 철수, 1: 짱구, 2: 유리, 3: 맹구}