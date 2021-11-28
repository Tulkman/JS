// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars(model, zavod, year, maxspeed, volume) {
//     this.model = model;
//     this.zavod = zavod;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const i in this) {
//             if (typeof this[i] !== 'function') console.log(`${i} - ${this[i]}`)
//         }
//     };
//     this.newMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     };
//     this.changeYear = function (newYear) {
//         this.year = newYear;
//     };
//     this.addDriver = function (driver, experience) {
//         this.driver = driver;
//         this.experience = experience;
//     };
// }
// let addCar = new Cars('Mersedes', 'Germany', 2017, 290, 1.7);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.newMaxSpeed(30);
// addCar.drive();
// addCar.changeYear(2018);
// addCar.info();
// addCar.addDriver('Jake', '5 years');
// console.log(addCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Cars {
//         constructor(model, producer, year, maxspeed, volume) {
//             this.model = model;
//             this.producer = producer;
//             this.year = year;
//             this.maxspeed = maxspeed;
//             this.volume = volume;
//         }
//         drive() {
//             console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//         }
//         info() {
//             for (const i in this) {
//                 console.log(`${i} - ${this[i]}`)
//             }
//         }
//         newMaxSpeed (newSpeed) {
//             this.maxspeed = this.maxspeed + newSpeed;
//         }
//         changeYear (newYear) {
//             this.year = newYear;
//         }
//         addDriver (driver) {
//             this.driver = driver;
//         }
//     }
//     let addCar = new Cars('Mersedes', 'Germany', 2017, 290, 1.7);
//     console.log(addCar);
//     addCar.drive();
//     addCar.info();
//     addCar.newMaxSpeed(30);
//     addCar.drive();
//     addCar.changeYear(2018);
//     addCar.info();
//     addCar.addDriver('Jake', '5 years');
//     console.log(addCar);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// function  Popelushka (name, age, sizefoot) {
//         this.name = name;
//         this.age = age;
//         this.sizefoot = sizefoot;
//     }
// let popelushkaArray = [
//     new Popelushka('Natalia', 33, 38),
//     new Popelushka('Katia', 42, 39),
//     new Popelushka('Lilia', 18, 37),
//     new Popelushka('Svitlana', 27, 36),
//     new Popelushka('Olia', 16, 33),
//     new Popelushka('Inna', 38, 35),
//     new Popelushka('Oksana', 57, 41),
//     new Popelushka('Iulia', 45, 40),
// ];
// console.log(popelushkaArray);

// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, Shose) {
//         this.name = name;
//         this.age = age;
//         this.Shose = Shose;
//     }
// }
// let prince = new Prince('Ivan', 36, 38);
// console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let princess = (popelushkaArray, prince) => {
//     for (let i of popelushkaArray) {
//         if (i.sizefoot === prince.Shose) {
//             return `Попелюшка Ivana це -  ${i.name}`
//         }
//     }
// };
// console.log(princess(popelushkaArray, prince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let Princess2 = popelushkaArray.find((i) => i.sizefoot === prince.Shose);
// console.log(Princess2);