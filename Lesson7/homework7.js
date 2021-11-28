// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id, name, surname, email, phone) {
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }
// console.log(User);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [
//     new User(5, 'Mykola', 'Durkalets', 'md@gmail.com', 38055000000),
//     new User(49, 'Andrew', 'Dorosh', 'ad@gmail.com', 380550006500),
//     new User(2, 'Iurii', 'Koltun', 'ik@gmail.com', 38055890000),
//     new User(7, 'Stas', 'Pieha', 'sp@gmail.com', 38055000035),
//     new User(45, 'Olia', 'Dolia', 'od@gmail.com', 38055000000),
//     new User(62, 'Anna', 'Panna', 'ap@gmail.com', 380550350000),
//     new User(3, 'Katia', 'Svatia', 'ks@gmail.com', 38055004500),
//     new User(85, 'Iulia', 'Dulia', 'id@gmail.com', 38055002300),
//     new User(90, 'Oleg', 'Pulia', 'op@gmail.com', 38055003400),
//     new User(4, 'Igor', 'Hurkalo', 'ih@gmail.com', 38055003000),
// ];
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUser = users.filter((User) => {
//         if (User.id % 2 === 0){
//         return User
//         }
// });
//     console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// };

// створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [
//     new Client(62, 'Anna', 'Panna', 'ap@gmail.com', 380550350000, ['book', 'dress', 'parfum']),
//     new Client(5, 'Mykola', 'Durkalets', 'md@gmail.com', 38055000000, ['brush', 'cologne', 'blade']),
//     new Client(2, 'Iurii', 'Koltun', 'ik@gmail.com', 38055890000, ['brush', 'cologne', 'blade']),
//     new Client(7, 'Stas', 'Pieha', 'sp@gmail.com', 38055000035, ['cream', 'balm']),
//     new Client(45, 'Olia', 'Dolia', 'od@gmail.com', 38055000000, ['lotion', 'foam', 'body wash']),
//     new Client(3, 'Katia', 'Svatia', 'ks@gmail.com', 38055004500, ['shampoo', 'parfum', 'conditioner']),
//     new Client(85, 'Iulia', 'Dulia', 'id@gmail.com', 38055002300, ['book', 'brush']),
//     new Client(90, 'Oleg', 'Pulia', 'op@gmail.com', 38055003400, ['shampoo', 'razor', 'brush']),
//     new Client(4, 'Igor', 'Hurkalo', 'ih@gmail.com', 38055003000, ['blade', 'cream', 'foam']),
//     new Client(49, 'Andrew', 'Dorosh', 'ad@gmail.com', 380550006500, ['book']),
//         ];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortCLients = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sortCLients)