// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let nums = [2,17,13,6,22,31,45,66,100,-18];
//
//     1. перебрати його циклом while
// let nums = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < nums.length) {
//     console.log(nums[i]);
//     i++;
// }

//     2. перебрати його циклом for
// let nums = [2,17,13,6,22,31,45,66,100,-18];
//
// for ( let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//     }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let nums = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < nums.length) {
//     if (i % 2 !==0) {
//         console.log(nums[i]);
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let nums = [2,17,13,6,22,31,45,66,100,-18];
// for ( let i = 0; i < nums.length; i++) {
//     if(i % 2 !==0) {
//         console.log(nums[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let nums = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < nums.length) {
//     if (i % 2 ===0) {
//         console.log(nums[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let nums = [2,17,13,6,22,31,45,66,100,-18];
// for ( let i = 0; i < nums.length; i++) {
//     if(i % 2 ===0) {
//         console.log(nums[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let nums = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < nums.length; i++){
//     if (nums[i] % 3 === 0) {
//     nums[i] = 'okten';
//         console.log(nums[i]);
//     }
// }

// 8. вивести масив в зворотньому порядку.
// let numsReverse = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numsReverse.length-1; i >= 0; i--){
//     console.log(numsReverse[i]);
// };

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//9.1
// let numsReverse = [2,17,13,6,22,31,45,66,100,-18];
// let i = numsReverse.length-1;
// while (i >=0) {
//     console.log(numsReverse[i]);
//     i--;
// }

//9.2
// let numsReverse = [2,17,13,6,22,31,45,66,100,-18];
//
// for ( let i = numsReverse.length-1; i >=0; i--) {
//     console.log(numsReverse[i]);
//     }

 //9.3
// let numsReverse = [2,17,13,6,22,31,45,66,100,-18];
// let i = numsReverse.length-1;
// while (i >=0) {
//     if (i % 2 !==0) {
//         console.log(numsReverse[i]);
//     }
//     i--
// }

// 9.4
// let numsReverse = [2,17,13,6,22,31,45,66,100,-18];
// for ( let i = numsReverse.length-1; i >=0; i--) {
//     if(i % 2 !==0) {
//         console.log(numsReverse[i]);
//     }
// }

// 9.5
// let numsReverse = [2,17,13,6,22,31,45,66,100,-18];
// let i = numsReverse.length-1;
// while (i >=0) {
//     if (i % 2 ===0) {
//         console.log(numsReverse[i]);
//     }
//     i--;
// }

// 9.6
// let numsReverse = [2,17,13,6,22,31,45,66,100,-18];
// for ( let i = numsReverse.length-1; i >=0; i--) {
//     if(i % 2 ===0) {
//         console.log(numsReverse[i]);
//     }
// }

// 9.7
// let numsReverse = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numsReverse.length-1; i >= 0; i--) {
//     if (numsReverse[i] % 3 === 0) {
//     numsReverse[i] = 'okten';
//         console.log(numsReverse[i]);
//     }
// }
