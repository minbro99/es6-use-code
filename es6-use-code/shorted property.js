//[단축 속성명 사용전]
const name = "tom";
const age = 20;
const gender = "male";

const person = { 
    name : name , 
    age : age,
    gender : gender,
}
console.log(person);

[단축 속성명 사용후]
const name = "tom";
const age = 20;
const gender = "male";


const person = { 
    name , 
    age,
    gender,
};

console.log(person);

// [단축 속성명 사용 불가능한 경우]

const name = "tom";
const age = 20;
const addr = "seoul";


const person = { 
    name , 
    age,
    city : addr,
};

console.log(person);