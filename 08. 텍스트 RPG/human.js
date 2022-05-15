// human class 생성
// 생성자 메서드에서는 이름과 나이를 속성을 입력
// 자신의 이름과 나이를 콘솔에 출력하는 메서드

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.outputMyname();
        this.outputMyage();
    }

    outputMyname() {
        console.log(this.name);
    }

    outputMyage() {
        console.log(this.age);
    }
}

const human1 = new Human('유창원', 27);