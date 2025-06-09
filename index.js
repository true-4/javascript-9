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

// 5. Преобразовать массив пар в объект
// const pairs5 = [['a', 1], ['b', 2]];
// const result5 = {a: 1, b: 2};

// TO DOO
const pairs5 = [['a', 1], ['b', 2]]
const res5 = pairs5.reduce((acc, [key, value]) => {
  acc[key] = value
  return acc
}, {})

console.log(res5)

// 6. Из массива чисел получить сумму только уникальных чисел
// const nums6 = [1, 2, 2, 3, 4, 4];
// const result6 = 1 + 3 = 4;

const nums6 = [1, 2, 2, 3, 4, 4]
const count6 = {}

for (const el of nums6) {
  count6[el] = (count6[el] || 0) + 1
}

const res6 = Object.keys(count6).filter(key => count6[key] === 1).reduce((acc, curr) => {return acc + +curr}, 0)
console.log(res6)

// 7. Перевести массив строк в массив объектов {original, length}
// const words7 = ['hi', 'hello'];
// const result7 = [{original: 'hi', length: 2}, {original: 'hello', length: 5}];

const words7 = ['hi', 'hello']
const res7 = words7.map(str => ({original: str, length: str.length}))

console.log(res7)

// 8. Найти пересечение двух массивов объектов по ключу id
const arrA8 = [{id: 1}, {id: 2}];
const arrB8 = [{id: 2}, {id: 3}];
// const result8 = [{id: 2}];

const comparison = new Set(arrB8.map(arg => arg.id))
const res8 = arrA8.filter(arg => comparison.has(arg.id))

console.log(res8)

// 9. Преобразовать массив объектов в объект с ключами id
const users9 = [{id: 1, name: 'Ann'}, {id: 2, name: 'Bob'}];
// const result9 = {1: {id: 1, name: 'Ann'}, 2: {id: 2, name: 'Bob'}};
const res9 = users9.reduce((acc, curr) => {
  return acc[curr] = curr
}, {})

console.log(res9)

// 10. Получить сумму значений по одинаковым ключам
const arr10 = [{a: 1, b: 2}, {a: 3, b: 4}]
// const result10 = {a: 4, b: 6};

const res10 = {}

for (let i = 0; i < arr10.length; i++) {
  const arrKeys = Object.keys(arr10[i])
  for (const el of arrKeys) {
    if (res10[el] === undefined) {
      res10[el] = arr10[i][el]
    } else {
      res10[el] = res10[el] + arr10[i][el]
    }
  }
}

console.log(res10)