// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('postDiv');
        for (let item of posts) {
            let Card = document.createElement('div');
            Card.classList.add('post');
            Card.innerHTML = `
                    <h3>id - ${item.id}</h3>
                    <h4>Title: ${item.title}</h4>
                    <p>Content: ${item.body}</p>
                    `;
            postDiv.appendChild(Card);
            document.body.appendChild(postDiv);
        }
    });
