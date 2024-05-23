//(class 함수)
class Person {
    constructor(name, age, addr, food) {
        this.name = name;
        this.age = age;
		this.addr = addr;
		this.food = food;
    }

    introduce() {
        console.log(`안녕하세요, 제 이름은 ${this.name}이고, ${this.age}살입니다. 고향은 ${this.addr}입니다. 좋아하는 음식은 ${this.food}입니다.`);
    }
}

const person1 = new Person('철수', 25, '대구', '치킨');
const person2 = new Person('민수', 33, '부산', '피자');

person1.introduce(); // 안녕하세요, 제 이름은 철수이고, 25살입니다. 고향은 대구입니다. 좋아하는 음식은 치킨입니다
person2.introduce(); // 안녕하세요, 제 이름은 민수이고, 33살입니다. 고향은 부산입니다. 좋아하는 음식은 피자입니다