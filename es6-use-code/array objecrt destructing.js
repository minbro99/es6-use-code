//(arry와 Object destructing)
const contacts = {
	famillyName: '이',
	name: '영희',
	age: 22
};

let { famillyName, name, age } = contacts;

console.log(famillyName); //이
console.log(name); //영희
console.log(age); // 22
