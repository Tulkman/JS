// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// let hogwarts = (string, sign) => {
//     let res = [];
//     if (string.includes(sign)) {
//         let s = string.split(sign)
//         s.forEach((item) => {
//             if (item) res.push(item);
//         });
//         console.log(res.join(' '));
//     }
//     }
// hogwarts(n1, '..');

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let fn = (m, n) => {
// let arr = [];
// for (let i = 0; i < m; i++) {
//     arr.push(Math.floor(Math.random() * n));
//      }
//       return arr;
// };
// let result = fn(10, 100);
// console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let fn = (m, n) => {
// let arr = [];
// for (let i = 0; i < m; i++) {
//     arr.push(Math.floor(Math.random() * n));
// }
// return arr;
// };
// let result = fn(10, 100);
// console.log(result);
// result.sort(( a, b ) =>  a - b);
// console.log(result)
// result.sort(( a, b ) =>  b - a);
// console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let fn = (m, n) => {
// let arr = [];
// for (let i = 0; i < m; i++) {
//     arr.push(Math.floor(Math.random() * n));
// }
// return arr.filter( value => value % 2===0);
// };
// let result = fn(10, 100);
// console.log(result);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let array = [1,21,354,2,1313,3535,9]
// let fnArray  = () => {
//     return array.map(value => value + "")
// }
// console.log(fnArray());

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let nums = [11,21,3];
// let sortNums = (m, n) => {
//     if (n === 'ascending') return m.sort((a, b) => a - b);
//     if (n === 'descending') return m.sort((a, b) => b - a);
// };
// console.log(sortNums([11, 21, 3], 'ascending') );

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sortArray = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sortArray);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let fnCourse = coursesAndDurationArray.filter((value) => value.monthDuration > 5);
// console.log(fnCourse);