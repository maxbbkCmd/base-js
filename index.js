import { calcSum } from './utils.js';

// 2. ????

// 4. Функция по работе с объектом
// 5. Функция по работе с массивом(передали массив чисел, а вернули числа с разделителями).

// 1. Функция со строковыми значениями.

/**
 * @function upperCaseFirstLetter
 * @param {string} word
 * @return {string} Возращает озаглавленное слово
 */

const upperCaseFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
};

console.log(upperCaseFirstLetter('МаКсиМ привет'));

/**
 * @function upperCaseAllWord
 * @param {string} proposal
 * @return {string} вернет все слова с заглавной буквы
 */

const upperCaseAllWord = (proposal) => {
  return proposal
    .split(' ')
    .map((proposal) => proposal.toLowerCase())
    .map((proposal) => proposal.charAt(0).toUpperCase() + proposal.slice(1))
    .join(' ');
};

console.log(upperCaseAllWord('пО пОлям пО пОлям сИний трАКТОр еДЕТ К НАМ'));

/**
 * @function capitalizeWords
 * @param {string} str
 * @returns {string} возвращает текст с озаглавленной первой буквой.
 */

function capitalizeWords(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

let str = 'hello world';
console.log(capitalizeWords(str)); // Hello World

// 3. Функция которая что-то проверяет gtrue/false

/**
 * @function checkAge
 * @param {number} age
 * @return {bulean} Возращает true, если возраст больше или равно 18
 */

const checkAge = (age) => {
  if (age >= 18) {
    return true;
  }
  if (typeof age != 'number') {
    return 'its not a number!';
  } else return false;
};

console.log(checkAge('a'));

// 4. Функция по работе с объектом

/**
 * @function searchCarModel
 * @param {object} data
 * @param {string} brand
 * @return {bulean} Возвращает true, если поиск успешный.
 */

const personalData = {
  user1: {
    name: 'Mikle',
    carBrand: 'Skoda',
    phone: '89263113112',
  },
  user2: {
    name: 'Kate',
    carBrand: 'Bmw',
    phone: '89261232456',
  },
};

const searchCarModel = (data, brand) => {
  return Object.values(data).some((value) => value.carBrand === brand);
};

console.log(searchCarModel(personalData, 'Bmw'));
