// import { flag, sum, height, num1, mul, Person } from './aaa.js';
import * as aaa from './aaa.js';
if (aaa.flag) {
  console.log('小明是天才,身高' + aaa.height + '已经运动' + aaa.num1);
}
console.log(aaa.sum(110, 120));
console.log(aaa.mul(555, 666));
const p = new aaa.Person();
p.run();
