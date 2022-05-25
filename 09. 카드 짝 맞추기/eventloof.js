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