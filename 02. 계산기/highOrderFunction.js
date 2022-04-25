let a1 = '1';
if (a1) {
    console.log('true');
} else {
    console.log('false');
}

// 고차함수
// 함수를 선언하고 그 함수의 return 값을 함수로 리턴하는 방식
const func = (msg) => {
    return () => {
        console.log(msg);
    };
};

// 중괄호와 return 생략 가능
const func2 = (msg) => () => {
    console.log(msg);
};

const innerFunc1 = func('hello');
const innerFunc2 = func('js');
const innerFunc3 = func2();

innerFunc1();
innerFunc2();
innerFunc3();

const hof = (a) => (b) => (c) => {
    return a + (b * c);
};

const first = hof2(3);
const second = first(4);
const third = second(5);

console.log(third);

// if 중첩 줄이기
function test() {
    let result = '';

    if (a) {
        if (!b) {
            result = 'c';
        }
    } else {
        result = 'a';
    }
    result += 'b';
    return result;
}

function testResult() {
    let result = '';

    if (!a) {
        result = 'a';
        result += 'b';
        return result;
    }
    if (!b) {
        result = 'c';
    }
    result += 'b';
    return result;
}