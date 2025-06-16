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

const nums1 = [12, 23, 42, 45, 111];
const res1 = nums1.map(num => ({ // проходимся по элементам массива с помощью map для того чтобы возвращать на каждой итерации объект с полями: 
  number: num, // указываем "ключ" number и присваеваем ей значение num
  digitsSum: String(num).split('').reduce((acc, curr) => acc + Number(curr), 0) // указываем "ключ" приводим его значение к строке чтобы число стало итерируемым разбиваем на отдельные числа и складываем с помощбю reduce
})).sort(function (a, b) { return a.digitsSum > b.digitsSum ? -1 : a.digitsSum < b.digitsSum ? 1 : 0 })

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

// 11. Развернуть (инвертировать) объект: ключи становятся значениями
const obj11 = {a: 1, b: 2};
// const result11 = {1: 'a', 2: 'b'};

const res11 = Object.entries(obj11).reduce((acc, [key, value]) => {
  acc[value] = key
  return acc
}, {})

console.log(obj11)
console.log(res11)

// 12. Разделить массив на положительные и отрицательные
const nums12 = [-1, 2, -3, 4];
// const result12 = {positive: [2, 4], negative: [-1, -3]};

const positive = nums12.filter(num => num > 0)
const negative = nums12.filter(num => num < 0)

console.log({positive, negative})

// 13. Сгруппировать пользователей по возрасту
const users13 = [{age: 20}, {age: 30}, {age: 20}];
// const result13 = {20: [{age: 20}, {age: 20}], 30: [{age: 30}]};

const res13 = users13.reduce((acc, {age}) => {
  if (!acc[age]) {
    acc[age] = []
  }
  acc[age].push({age})
  return acc
}, {})

console.log(res13)

// 14. Найти самую часто встречающуюся строку
const strs14 = ['a', 'b', 'a', 'c', 'b', 'a'];
// const result14 = 'a';
// TO DOO
const res14 = strs14.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1
  return acc
}, {})

console.log(res14)

// 15. Получить массив длины N с шагом K от начального значения
const start15 = 5, len15 = 4, step15 = 3;
// const result15 = [5, 8, 11, 14];

const res15 = Array.from({length: len15}, (_, index) => start15 + index * step15)
console.log(res15)

// 16. Убрать крайние N элементов массива
const arr16 = [1, 2, 3, 4, 5, 6];
const n16 = 2;
// const result16 = [3, 4];

const res16 = arr16.slice(n16, arr16.length - n16)
console.log(res16)

// 17. Объединить массив объектов, где ключи могут повторяться
const objs17 = [{a: 1}, {a: 2}, {b: 3}];
// const result17 = {a: [1, 2], b: [3]};

const res17 = objs17.reduce((acc, curr) => {
  for (const el in curr) {
    if (acc[el]) {
      acc[el].push(curr[el])
    } else {
      acc[el] = [curr[el]]
    }
  }
  return acc
}, {})

console.log(res17)

// 18. Преобразовать объект в массив строк формата "key=value"
const obj18 = {a: 1, b: 2};
// const result18 = ['a=1', 'b=2'];

const res18 = Object.entries(obj18).map(([key, value]) => `${key} = ${value}`)
console.log(res18)

// 19. Удалить дубликаты из массива объектов по значению ключа
const objs19 = [{id: 1}, {id: 2}, {id: 1}];
// const result19 = [{id: 1}, {id: 2}];

const res19 = Object.values(
  objs19.reduce((acc, curr) => {
    acc[curr.id] = curr
    return acc
  }, {})
)
console.log(res19)

// 20. Проверить, все ли элементы массива – уникальны
const arr20 = [1, 2, 3, 4, 1];
// const result20 = false;

const res20 = new Set(arr20).size === arr20.length
console.log(res20)

// 21. Сгруппировать строки по длине
const strings21 = ['a', 'bb', 'ccc', 'dd'];
// const result21 = {1: ['a'], 2: ['bb', 'dd'], 3: ['ccc']};

const res21 = strings21.reduce((acc, curr) => {
  const len = curr.length
  if (!acc[len]) {
    acc[len] = []
  }
  acc[len].push(curr)
  return acc
}, {})
console.log(res21)

// 22. Преобразовать массив в объект, подсчитывающий кратность значений
const arr22 = ['yes', 'no', 'yes'];
// const result22 = {yes: 2, no: 1};

const res22 = arr22.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1
  } else {
    acc[curr] = 1
  }
  return acc
}, {})
console.log(res22)

// 23. Найти индекс самого длинного слова
const words23 = ['hi', 'hello', 'world'];
// const result23 = 1;

const res23 = words23.reduce((maxIndex, currentWord, currentIndex, arr) => {
  if (arr[maxIndex].length < currentWord.length) {
    return currentIndex
  }
  return maxIndex
}, 0)
console.log(res23)

// 24. Получить первые N элементов, отсортированных по длине строки
const arr24 = ['a', 'bbbb', 'cc', 'ddd'];
const n24 = 2;
// const result24 = ['a', 'cc'];

const sortedArr = arr24.slice().sort((a, b) => a.length - b.length)
const res24 = sortedArr.slice(0, n24)
console.log(res24)

// 25. Удалить все числа меньше среднего
const nums25 = [1, 2, 3, 4, 5];
// const result25 = [3, 4, 5];

const average = nums25.reduce((acc, curr) => acc + curr, 0) / nums25.length
const res25 = nums25.filter(num => num >= average)
console.log(res25)

// 26. Найти слово, у которого все буквы уникальны
const arr26 = ['hello', 'world', 'python'];
// const result26 = 'world'; // 'w', 'o', 'r', 'l', 'd'

const res26 = arr26.find(word => {
  const letters = word.split('')
  const unique = new Set(letters)
  return letters.length === unique.size
})
console.log(res26)

// 27. Проверить, является ли массив палиндромом
const arr27 = [1, 2, 3, 2, 1];
// const result27 = true;

const res27 = arr27.join('') === [...arr27].reverse().join('')
console.log(res27)

// 28. Поменять местами минимальный и максимальный элементы
const arr28 = [5, 3, 9, 1];
// const result28 = [5, 3, 1, 9];

const minIndex = arr28.indexOf(Math.min(...arr28))
const maxIndex = arr28.indexOf(Math.max(...arr28))
const newMin = arr28[minIndex]
const newMax = arr28[maxIndex]
arr28[minIndex] = newMax
arr28[maxIndex] = newMin
console.log(arr28)

// 29. Удалить элементы, встречающиеся более одного раза
const arr29 = [1, 2, 2, 3, 4, 4];
// const result29 = [1, 3];

const res29 = arr29.filter(item => arr29.filter(i => i === item).length === 1)
console.log(res29)

// 30. Преобразовать массив чисел в строки формата "1-й", "2-й", ...
const nums30 = [1, 2, 3];
// const result30 = ['1-й', '2-й', '3-й'];

const res30 = nums30.map(num => `${num}-й`)
console.log(res30)

// ПОВТОРЕНИЕ

// 20. Объединить массив объектов в один
const arr200 = [{a: 1}, {b: 2}, {c: 3}];
// const res200 = Object.assign({}, ...arr20); // {a: 1, b: 2, c: 3}

const res200 = Object.assign({}, ...arr200)
console.log(res200)

// 1. Получить все ключи объекта в виде массива
const obj1 = { name: "Alice", age: 30, city: "Paris" };
// Ожидаемый результат: ["name", "age", "city"]

const result1 = Object.keys(obj1)
console.log(result1)

// 2. Получить все значения объекта в виде массива
const obj22 = { name: "Bob", age: 25, country: "Canada" };
// Ожидаемый результат: ["Bob", 25, "Canada"]

const result2 = Object.values(obj22)
console.log(result2)

// 3. Преобразовать объект в массив пар [ключ, значение]
const obj3 = { a: 1, b: 2, c: 3 };
// Ожидаемый результат: [["a", 1], ["b", 2], ["c", 3]]

const result3 = Object.entries(obj3)
console.log(result3)

// 4. Найти сумму всех числовых значений объекта
const obj4 = { math: 90, physics: 80, english: 70 };
// Ожидаемый результат: 240

const result4 = Object.values(obj4).reduce((acc, curr) => acc + curr)
console.log(result4)

// 5. Отфильтровать пары, у которых значения больше 10
const obj5 = { a: 5, b: 15, c: 8, d: 22 };
// Ожидаемый результат: { b: 15, d: 22 }

const filteredEntries = Object.entries(obj5).filter(([key, value]) => value > 10)
const result5 = Object.fromEntries(filteredEntries)
console.log(result5)

// 6. Из массива [ключ, значение] собрать обратно объект
const entries6 = [["x", 10], ["y", 20]];
// Ожидаемый результат: { x: 10, y: 20 }

const result6 = Object.fromEntries(entries6)
console.log(result6)

// 7. Подсчитать, сколько раз встречается каждое значение
const obj7 = { a: "yes", b: "no", c: "yes", d: "maybe" };
// Ожидаемый результат: { yes: 2, no: 1, maybe: 1 }

const result7 = {};
for (const key in obj7) {
  const value = obj7[key]
  result7[value] = (result7[value] || 0) + 1
}
console.log(result7)

// 8. Сделать инвертированный объект: значения → ключи
const obj8 = { a: 1, b: 2, c: 1 };
// Ожидаемый результат: { 1: "c", 2: "b" }

const result8 = Object.entries(obj8).reduce((acc, [key, value]) => {
  acc[value] = key
  return acc
}, {})
console.log(result8)

// 9. Удалить все свойства, где значение null или undefined
const obj9 = { name: "Tom", age: null, city: "Rome", job: undefined };
// Ожидаемый результат: { name: "Tom", city: "Rome" }

const result9 = Object.fromEntries(Object.entries(obj9).filter(([key,value]) => value !== null))
console.log(result9)

// 10. Создать массив строк "ключ: значение"
const obj10 = { brand: "Tesla", model: "S", year: 2021 };
// Ожидаемый результат: ["brand: Tesla", "model: S", "year: 2021"]

const result10 = Object.entries(obj10).map(([key,value]) => `${key}: ${value}`)
console.log(result10)

// 11. Получить количество ключей в объекте
const obj111 = { a: 1, b: 2, c: 3, d: 4 };
// Ожидаемый результат: 4

const result11 = Object.entries(obj111).length
console.log(result11)

// 12. Удвоить все числовые значения
const obj12 = { a: 2, b: 4, c: 6 };
// Ожидаемый результат: { a: 4, b: 8, c: 12 }

const result12 = Object.fromEntries(Object.entries(obj12).map(([key, value]) => [key, typeof value === 'number' ? value * 2 : value]))
console.log(result12)

// 13. Получить объект только с строковыми значениями
const obj13 = { name: "John", age: 28, city: "Berlin", height: 180 };
// Ожидаемый результат: { name: "John", city: "Berlin" }

const result13 = Object.fromEntries(Object.entries(obj13).filter(([k, v]) => typeof v === 'string'))
console.log(result13)

// 14. Проверить, есть ли значение "admin"
const obj14 = { role1: "user", role2: "moderator", role3: "admin" };
// Ожидаемый результат: true

const result14 = Object.values(obj14).includes("admin")
console.log(result14)

// 15. Получить сумму длин всех строковых значений
const obj15 = { a: "hello", b: "world", c: 42 };
// Ожидаемый результат: 10

const result15 = Object.values(obj15).reduce((sum, v) => {
  return typeof v === 'string' ? sum + v.length : sum
}, 0)
console.log(result15)

// 16. Сравнить два объекта на идентичность ключей
const obj16a = { x: 1, y: 2 };
const obj16b = { y: 3, x: 4 };
// Ожидаемый результат: true

function result16(objA,objB){
  const keysA = Object.keys(objA).sort()
  const keysB = Object.keys(objB).sort()
  return JSON.stringify(keysA) === JSON.stringify(keysB)
}
console.log(result16({x:1,y:2}, {y :3,x :4}))

// 17. Получить ключи, где значения — массивы
const obj17 = { a: [1, 2], b: "hello", c: [], d: 42 };
// Ожидаемый результат: ["a", "c"]

const result17 = Object.keys(obj17).filter(k => Array.isArray(obj17[k]))
console.log(result17)

// 18. Преобразовать массив ключей в объект с null значениями
const keys18 = ["id", "name", "email"];
// Ожидаемый результат: { id: null, name: null, email: null }

const result18 = Object.fromEntries(keys18.map(key => [key, null]))
console.log(result18)

// 19. Отсортировать ключи по алфавиту и собрать объект заново
const obj19 = { c: 3, a: 1, b: 2 };
// Ожидаемый результат: { a: 1, b: 2, c: 3 }

const result19 = Object.fromEntries(Object.entries(obj19).sort(([kA], [kB]) => kA.localeCompare(kB)))
console.log(result19)

// 20. Получить объект, где значения — длины строк из другого объекта
const obj20 = { a: "apple", b: "banana", c: "kiwi" };
// Ожидаемый результат: { a: 5, b: 6, c: 4 }

const result202 = Object.fromEntries(Object.entries(obj20).map(([key, value]) => [key, value.length]))
console.log(result202)