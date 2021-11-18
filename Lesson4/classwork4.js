// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function nums (a,b,c) {
//     if (a<b && a<c) {
//         document.write(a);
//     } else if (b<a && b<c) {
//         document.write(b);
//     } else {
//         document.write(c);
//     }
// }
// nums (189,5,35);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function nums (a,b,c) {
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
// function nums (numbers) {
//     let max = numbers[0];
//     for (const i of numbers) {
//        if (i>max){
//           max = i;
//       }
//     }
//     return max;
// }
// document.write(`Найбільше число з масиву -${nums(numbers)} `);

// - створити функцію яка повертає найменьше число з масиву
// let numbers = [12, 45, 1, 56, 34, 176];
// function nums (numbers) {
//     let min = numbers[0];
//     for (const i of numbers) {
//        if (i<min){
//           min = i;
//       }
//     }
//     return min;
// }
// document.write(`Найменше число з масиву -${nums(numbers)} `);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let numbers = [1, 2, 10];
// function calc (numbers) {
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
// function calc (numbers) {
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
// function array(arr) {
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
//
// function numsRandom (n){
//     for (let i = 0; i < numbers; i++){
//                n[i] = nums.Math.floor(Math.random()*100);
//             }
//         return n
//         };


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function numsRandom (n, limit){
//         for (let i = 0; i < 10; i++){
//            n[i]=Math.round(Math.random()*limit);
//             }
//         return n;
//         };


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//  function reverse (nums) {
//      let revNums = [];
//      for (let i = revNums.length-1, revi=0; i>=0;   i--, revi++) {
//     revNums[revi]=revNums[i]
//      }
//      return revNums;
//  }

