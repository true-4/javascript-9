// 'use strict' не нужен так как этот файл подключен через type="module"  

console.log(this) // ссылается на LE документа вернёт undefined так как пытается вернуть хоть что то

function getThis() {
  console.log(this)
}
getThis() // ссылается на LE документа потому что не находит собственный this вернёт undefined

const arrThis = () => console.log(this)
arrThis() // не имеет собственного this ссылается на LE родителя вернёт undefined