// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let nums = (a,b,c) => {
//     if (a < b && a < c) {
//         document.write(a);
//     } else if (b < a && b < c) {
//         document.write(b);
//     } else {
//         document.write(c);
//     }
// }
// nums (189,5,35);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let nums = (a,b,c) => {
//     if (a>b && a>c) {
//         document.write(a);
//     } else if (b>a && b>c) {
//         document.write(b);
//     } else {
//         document.write(c);
//     }
// }
// nums (891,4,18);

// - створити функцію яка повертає найбільше число з масиву
// let numbers = [12, 45, 1, 56, 34, 176];
// let nums = (numbers) => {
//     let max = numbers[0];
//     for (const i of numbers) {
//        if (i>max){
//           max = i;
//       }
//     }
//     return max;
// }
// document.write(`Найбільше число з масиву : ${nums(numbers)} `);

// - створити функцію яка повертає найменьше число з масиву
// let numbers = [12, 45, 1, 56, 34, 176];
// let nums = (numbers) => {
//     let min = numbers[0];
//     for (const i of numbers) {
//        if (i<min){
//           min = i;
//       }
//     }
//     return min;
// }
// document.write(`Найменше число з масиву : ${nums(numbers)} `);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let numbers = [1, 2, 10];
// let calc = (numbers) => {
//     let sum= 0;
//     for (const number of numbers) {
//         if (typeof number === 'number'){
//             sum +=  number;
//         }
//     }
//     return sum;
// }
// document.write(calc(numbers));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbers = [1, 2, 10,3];
// let calc = (numbers) => {
//     let sum= 0;
//     for (const number of numbers) {
//         if (typeof number === 'number'){
//             sum +=  number;
//         }
//     }
//     return sum/numbers.length;
// }
// document.write(calc(numbers));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let array = (...arguments) => {
//     let max = arguments[0];
//     let min = arguments[0];
//         for (const i of arguments) {
//         if (i > max) {
//             max = i;
//         }
//         if (i < min) {
//             min = i;
//         }
//     }
//     console.log(max);
//     return min;
// }
// document.write('Найменьше число: ' + array(-25, 185, 6, 19856, 3));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let numsRandom = (n) => {
//     let xx = [];
//     for (let i = 0; i < n; i++){
//                xx.push(Math.floor(Math.random()*100));
//             }
//         return xx
//         };
// document.write(numsRandom(6));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let numsRandom = (n, limit) => {
//     let xx = [];
//     for (let i = 0; i < n; i++){
//                xx.push(Math.floor(Math.random()*limit));
//             }
//         return xx
//         };
// document.write(numsRandom(36,25));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let nums = [1, 2, 3];
// let reverse = (num)=>  {
//      let revNum = [];
//      for (let i = num.length-1, revi=0; i>=0;   i--, revi++) {
//          revNum[revi] = num[i];
//      }
//      return revNum;
//  }
// document.write(reverse(nums));


