// NO 'use strict'

console.log(this) // ссылается на LE документа

function getThis() {
  console.log(this)
}
getThis() // ссылается на LE документа потому что не находит собственный this

const arrThis = () => console.log(this)
arrThis() // не имеет собственного this ссылается на LE родителя