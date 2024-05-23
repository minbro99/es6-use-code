//(기본 매개 함수)
const myFunc = (name, age = 22) => {
	return `안녕 ${name} 너의 나이는 ${age}살 이니?`; 
};

console.log(myFunc1('영희')); // 안녕 영희 너의 나이는 22살 이니?
