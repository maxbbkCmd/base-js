/**
 * @function upperCaseFirstLetter
 * @param {string} word
 * @return {string} Возращает озаглавленное слово
 */

export const upperCaseFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
};

/**
 * @function upperCaseAllWord
 * @param {string} proposal
 * @return {string} вернет все слова с заглавной буквы
 */

export const upperCaseAllWord = (proposal) => {
  return proposal
    .split(' ')
    .map((proposal) => proposal.toLowerCase())
    .map((proposal) => proposal.charAt(0).toUpperCase() + proposal.slice(1))
    .join(' ');
};

/**
 * @function capitalizeWords
 * @param {string} str
 * @returns {string} возвращает текст с озаглавленной первой буквой.
 */

export const capitalizeWords = (str) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const str = 'hello world';

// 3. Функция которая что-то проверяет true/false

/**
 * @function checkAge
 * @param {number} age
 * @return {boolean} Возращает true, если возраст больше или равно 18
 */

export const checkAge = (age) => {
  if (age >= 18) {
    return true;
  }
  if (typeof age != 'number') {
    return 'its not a number!';
  } else return false;
};

// 4. Функция по работе с объектом

/**
 * @function searchCarModel
 * @param {object{}} data
 * @param {string} brand
 * @return {boolean} Возвращает true, если поиск успешный.
 */

export const personalData = {
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

export const searchCarModel = (data, brand) => {
  return Object.values(data).some((value) => value.carBrand === brand);
};

// 5. Функция по работе с массивом(передали массив чисел, а вернули числа с разделителями).

/**
 * @function formatArr
 * @param {number[]} arr
 * @return {string}
 */

export const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const formatArr = (arr) => {
  return arr.join(' перед ');
};
