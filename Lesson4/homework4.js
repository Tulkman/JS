// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function numChecker(a, b) {
//     return typeof a === 'number' && typeof b === 'number';
// }
// function square (action,a,b){
//     let res;
//     if (action === '*' && numChecker(a, b)) {
//         res = a * b;
//     }
//     return res
// }
// let s = square(`*`,20,10);
// console.log(s);
// document.write(`Площа прямокутника = ` + s);



// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function square (r){
//     let rad = r**2 ;
//     let s =  3.14 * rad;
//     return s;
// }
// let s = square(2);
// console.log(s);
// document.write(`Площа кола = ` + s);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function square (h, r){
//     let s =  2 * 3.14 * r * h;
//     return s;
// }
// let s = square(4,2);
// console.log(s);
// document.write(`Площа циліндра = ` + s);

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function array (arr){
//         for (let i=0; i <= arr.length-1;) {
//             document.write(`<div>`);
//             document.write(arr[i]);
//             document.write(`</div>`);
//             i++;
//     }
//        }
//        array(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf(t) {
//     document.write(`<p>${t}</p>`);
// }
// paragraf('створити функцію яка створює параграф з текстом. Текст задати через аргумент');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(l){
//     document.write(`<ul>`);
//     document.write(`<li>`);
//     document.write(l);
//     document.write(`</li>`);
//     document.write(`<li>`);
//     document.write(l);
//     document.write(`</li>`);
//     document.write(`<li>`);
//     document.write(l);
//     document.write(`</li>`);
//     document.write(`</ul>`);
// }
//    list('listlistlist');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list(l,n){
//     document.write(`<ul>`);
//     for (let i=0; i < n; i++) {
//         document.write(`<li>${l}</li>`);
//     }
//         document.write(`</ul>`);
// }
// list('list',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [1, 'hello', true,'1985', false, 2012];
// function arr (array) {
//     document.write(`<ul>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arr(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let actors = [{id: 1, name: 'Sylvester', age: 75}, {id: 2, name: 'Brad', age: 57}, {id: 3, name: 'Will', age: 53}];
// function act(actors) {
//     for (let actorsElement of actors) {
//         document.write(`<div>${actorsElement.id}.${actorsElement.name} - age: ${actorsElement.age};</div>`);
//     }
// }
// act(actors);