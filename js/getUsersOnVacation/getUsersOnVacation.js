/**
 * @typedef {import('./types').UserData} UserData
 */

/**
 * @function getUsersOnVacation
 * @param {UserData} data Объект с данными пользователя.
 * @return {String} Вернет юзеров, которые были в отпуске, через запятую.
 */

export const getUsersOnVacation = (data) => {
  return data.filter((user) => user.vacation === true)
    .map((user) => user.name)
    .join(", ");
};
