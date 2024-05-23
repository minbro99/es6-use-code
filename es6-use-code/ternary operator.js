//[원래대로의 if-else문]
const age = 20;

function message() {
    if (age >= 18) {
        return "성인입니다.";
    } else {
        return "미성년자입니다.";
    }
}

console.log(message()); // 성인입니다.

[삼항 연산자, 조건부 연산자 사용]

//{두개의 결과 값 도출}
const age = 20;
const message = age >= 18 ? '성인입니다.' : '미성년자입니다.';
console.log(message); // 성인입니다.


// {두개 이상의 결과 값 이용}
const score = 85;
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'D';
console.log(grade);  // B