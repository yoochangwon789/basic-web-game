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