//commonjs模块化
const { add, mul } = require('./js/mathUs.js');

console.log(add(20, 30));
console.log(mul(20, 30));

//es6模块化的规范
import { name, age, height } from './js/info';

console.log(name, age, height);
