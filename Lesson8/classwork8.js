// Взяти файл template_2.html та працювати в ньому
//    1) Напишіть код, який :
//    a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let main_header = document.getElementById('main_header');
// main_header.innerText = 'sept2021';

//    b) робить шириниу елементу ul 400px
// let ulWidth = document.getElementsByTagName('ul');
// ulWidth[0].style.width = '400px';

//    c) робить шириниу всіх елементів з класом linkList шириною 50%
// let llWidth = document.getElementsByClassName('linklist');
// for (let element of llWidth) {
//     element.style.width = '50%';
// }

//    d) отримує текст який зберігається в елементі з класом listElement2
// let liElementText = document.getElementsByClassName('listElement2');
// liElementText[0].innerHTML = '<a href="">отримує текст який зберігається в елементі з класом listElement2</a>';

//    e) отримує всі елементи li та змінює ім колір фону на сірий
// let liEvery = document.getElementsByTagName('li');
// console.log(liEvery);
// for (let element of liEvery) {
//    element.style.backgroundColor = 'grey';
// }

//    f) отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName('a');
// console.log(a);
// for (let element of a) {
//     element.classList.add('anchor')
// }

//    g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let a = document.getElementsByTagName('a');
// console.log(a);
// for (let element of a) {
//     console.log(element);
//     if (element.innerText === 'link3') {
//         element.style.fontSize = '40px';
//     }
// }

//    h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let a = document.getElementsByTagName('a');
// for (const element of a) {
//     let eClass = element.innerText;
//     element.classList.add(`element_${eClass}`);
// }

//    i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elemSH = document.getElementsByClassName('sub-header');
// for (let element of elemSH) {
//     element.style.backgroundColor = prompt('color');
// };

//    j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let elemSH = document.getElementsByClassName('sub-header');
// for (const element of elemSH) {
//     if (element.textContent === 'content 2 segment') {
//         element.style.backgroundColor = prompt('color');
//     };
// };


//    k) отримує елемент з класом content_1 та заміняє  в ньому теkст на довільний. Текст отримати з prompt()
// let text = document.getElementsByClassName('content_1');
// for (let element of text) {
//     element.innerText= prompt('new text')
// }

//    l) отримати елементи p та змінити їм padding на 20px
// let pad = document.getElementsByTagNameNS('p');
// for (let element of pad) {
//     element.style.padding= '20px';
// }

//    m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let nameM = document.getElementsByClassName('text2');
// for (let element of nameM) {
//     element.innerText = 'sep-2021';
// }