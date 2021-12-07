// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let textN = document.getElementById('text');
// let button1 = document.getElementById('button1');
// button1.onclick = function () {
//     textN.style.display = 'none';
// }
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button2 = document.getElementById('button2');
// button2.onclick = function () {
//     button2.style.display = 'none';
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// document.getElementById('button3').onclick = function () {
//   let age = document.getElementById('age').value;
//       if (!age) {
//         alert('дані не введено');
//     } else if (+age < 18) {
//         alert('Менше 18');
//       } else if (+age >= 18) {
//           alert('Повнолітній');
//     } else if (age !=='number') {
//         alert('дані введені не вірно');
//     }
// }

 // - Создайте меню, которое раскрывается/сворачивается при клике*/
// let menu = document.querySelector('.menu');
// let title = menu.querySelector('.title');
// title.onclick = function () {
//     menu.classList.toggle('hide');
// };

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.*/
//     Вывести список комментариев в документ, каждый в своем блоке.*/
//     Добавьте каждому комментарию по кнопке для сворачивания его body.*/
let comments = [
    {name: 'Україна', body: 'Європа'},
    {name: 'Китай', body: 'Азія'},
    {name: 'США', body: 'Північна Америка'},
    {name: 'Аргентина', body: 'Південня Америка'},
];
let divCountry = document.createElement('div');
for (const i of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');
    h3.innerText = i.name;
    p.innerHTML = i.body;
    btn.innerHTML = 'Згорнути'
    btn.onclick = () => {
        p.style.display = 'none';
    }
    div.append(h3, p, btn);
    divCountry.append(div, hr);
}
document.body.appendChild(divCountry)