
// boolean
// const a = true

// 여기서 a는 조건의 실행여부 또는 코드를 반복해야할지 결정하는데 쓰인다.

// if(a) {
//   console.log("실행")
// } else {
//   console.log("실행하지 않음")
// }

// null
// null은 객체의 존재하지 않음 또는 주소를 의도적으로 가리키는 참조를 나타낸다.
// 예를 들어 링크드리스트의 next가 참조할 객체가 없을때 null로 가리킨다.

const b = null
console.log(typeof b === 'object') // true

// Number는 Number와 BigInt 두 가지 내장 숫자 타입을 가진다.
// Number 타입은 부동소수점 숫자, +Infinity, -Infinity, NaN("Not a Number")와 같은 상징적인 값도 가진다.

console.log(Number.isSafeInteger(890090000))
console.log(Number.MAX_SAFE_INTEGER)



