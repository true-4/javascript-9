// 'use strict' не нужен так как этот файл подключен через type="module"  

console.log(this) // ссылается на LE документа вернёт undefined так как пытается вернуть хоть что то

function getThis() {
  console.log(this)
}
getThis() // ссылается на LE документа потому что не находит собственный this вернёт undefined

const arrThis = () => console.log(this)
arrThis() // не имеет собственного this ссылается на LE родителя вернёт undefined

// 3
// 1. Найти элемент с максимальной суммой цифр
// const nums1 = [12, 23, 45, 111];
// const result1 = 45; // 4+5=9 – максимальная сумма

// TO DOO
const nums1 = [12, 23, 42, 45, 111]
const res1 = nums1.map(num => ({
  number: num,
  digitsSum: String(num).split('').reduce((acc, curr) => acc + Number(curr), 0)
})).reduce((acc, curr) => acc.digitsSum >= curr.digitsSum ? acc : curr).number

console.log(res1)

// 2. Найти объект с наибольшим количеством свойств
// const objs2 = [{a: 1}, {a: 1, b: 2}, {a: 1, b: 2, c: 3}];
// const result2 = {a: 1, b: 2, c: 3};

const obj2 = [{a: 1}, {a: 1, b: 2}, {a: 1, b: 2, c: 3}]
const res2 = obj2.reduce((acc, curr) => { // вызываем метод reduce и указал его api 
  return Object.keys(curr).length > Object.keys(acc).length ? curr : acc // возвращаем длину количества ключей объекта у curr указываем что будем сравнивать с длинной объекта ключей накопителя acc если выражение истина то ? если ложь то :
}, obj2[0]) // инциализируем объект с ключами начиная с 0 по умолчанию
console.log(res2)

// 3. Удалить повторяющиеся объекты (глубокое сравнение)
// const objs3 = [{x: 1}, {x: 2}, {x: 1}];
// const result3 = [{x: 1}, {x: 2}];

// TO DOO
const objs3 = [{x: 1}, {x: 2}, {x: 1}]
const res3 = objs3.filter((obj, index, self) => { // фильтрую элементы на неповторение и записываю их в новый массив который создаётся методом filter
  return index === self.findIndex(el => (el.id === obj.id && el.x === obj.x)) // возвращаем только уникальные значения
})
console.log(res3)

// 4. Получить все уникальные символы из массива строк
// const strs4 = ['cat', 'dog', 'cow'];
// const result4 = ['c', 'a', 't', 'd', 'o', 'g', 'w'];

// TO DOO
const strs4 = ['cat', 'dog', 'cow']
const newStr = strs4.toString().split('')
const set = [...new Set(newStr)]
console.log(set)