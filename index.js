// 'use strict' не нужен так как этот файл подключен через type="module"  

console.log(this) // ссылается на LE документа вернёт undefined так как пытается вернуть хоть что то

function getThis() {
  console.log(this)
}
getThis() // ссылается на LE документа потому что не находит собственный this вернёт undefined

const arrThis = () => console.log(this)
arrThis() // не имеет собственного this ссылается на LE родителя вернёт undefined

// 3
// 3.1 TO DOO
const nums1 = [12, 23, 42, 45, 111]
const res1 = nums1.map(num => ({
  number: num,
  digitsSum: String(num).split('').reduce((acc, curr) => acc + Number(curr), 0)
})).reduce((acc, curr) => acc.digitsSum >= curr.digitsSum ? acc : curr).number

console.log(res1)

// 3.2
const obj2 = [{a: 1}, {a: 1, b: 2}, {a: 1, b: 2, c: 3}]
const res2 = obj2.map((it) => {
  return it
})
console.log(res2)