let name = '小明',
  age = 18,
  flag = true;
function sum(num1, num2) {
  return num1 + num2;
}
if (flag) {
  console.log(sum(30, 20));
}
//导出方式1
export { flag, sum };
//导出方式2
export var num1 = 1000;
export var height = 1.88;
//导出函数/类
export function mul(num1, num2) {
  return num1 + num2;
}
export class Person {
  run() {
    console.log('在奔跑');
  }
}

//expot default 在一个模块中不能有多个 只能有一个
