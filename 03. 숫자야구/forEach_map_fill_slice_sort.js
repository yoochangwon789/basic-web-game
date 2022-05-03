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
