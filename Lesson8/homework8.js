// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// let pContent = document.getElementById('content');
// console.log(pContent);
// pContent.innerHTML = '<strong>asdqwe</strong>';

// -- отримує текст з блоку з id "rules"
// let pRules = document.getElementById('rules');
// console.log(pRules);

// -- замініть текст параграфа з id 'content' на будь-який інший
// pContent.innerHTML = '<strong>Всілякі утяження і здирства вірним людям походять від владолюбних накупнів, які, прагнучи неситою пожадливістю для свого пожитку військових і посполитих урядів, зваблюють гетьманське серце корупціями.</strong>';

// -- замініть текст параграфа з id 'rules' на будь-який інший
// pRules.innerHTML = '<strong>Кривда, гніт та неволя викликають сувору помсту з боку справедливості, щоб Божі постанови проявлялись у всьому на очах живих людей.</strong>';

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// let children = document.body.children;
// console.log(children);
// for (const child of children) {
//     child.style.background = 'red';
//     document.body.style.color = 'blue';  // два завдання разом
//     }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let rulesClassList = document.querySelectorAll('#rules')
// for (const Element of rulesClassList) {
// console.log(Element.classList);
// }
//     console.log(rulesClassList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let rulesList = document.getElementsByClassName('fc_rules');
// for (let rules of rulesList) {
//     console.log(rules);
//     rules.style.color = 'red';
// }