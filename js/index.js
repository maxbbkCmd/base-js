import { upperCaseFirstLetter } from './utils.js';
import { upperCaseAllWord } from './utils.js';
import { capitalizeWords } from './utils.js';
import { checkAge } from './utils.js';
import { searchCarModel } from './utils.js';
import { formatArr } from './utils.js';
import { str } from './utils.js';
import { personalData } from './utils.js';
import { arr } from './utils.js';

console.log(upperCaseFirstLetter('МаКсиМ привет'));
console.log(upperCaseAllWord('пО пОлям пО пОлям сИний трАКТОр еДЕТ К НАМ'));
console.log(capitalizeWords(str));
console.log(checkAge('18'));
console.log(searchCarModel(personalData, 'Bmw'));
console.log(formatArr(arr));
