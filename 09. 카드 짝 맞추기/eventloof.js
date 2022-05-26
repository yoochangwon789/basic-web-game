// 이벤트 루프 테스트 코드

function a() {
    b();
}

function b() {
    console.trace();
}

a();

function start() {
    startFun();
}

function startFun() {
    setTimeout(() => {
        console.trace()
    }, 1000)
}

start();


function aaa() {
    setTimeout(() => {
        console.log('d');
    }, 0);
    console.log('c');
}

setTimeout(() => {
    console.log('a');
    aaa();
}, 0);

setTimeout(() => {
    aaa();
    console.log('b');
}, 0);