import { userData } from "./userData.js";

/**
 * @typedef {import('./types').UserData} UserData
 */

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {number} age
 * @property {string} city
 * @property {string} phone
 * @property {boolean} vacation
 */

/**
 * @function getUsersOnVacation
 * @param {UserData} data Объект с данными пользователя.
 * @return {String[]} Вернет массив юзеров, которые были в отпуске.
 */

export const getUsersOnVacation = (data) => {
  return Object.values(data)
    .filter((user) => user.vacation === true)
    .map((user) => user.name)
    .join(", ");
};
