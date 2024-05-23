// [optional chainging (.?), nullish coalescing operator(??) 예제코드]
const user = {
    name : 'tom',
    age : 20,
    addr : {
        city : 'seoul',
        job : 'student'
    }
}

const name = user?.name; // optional chaining
console.log(name);

const food = user?.name?.food?? 'pizza'; // nullish coalescing operator
console.log(food);