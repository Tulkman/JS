// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('commentDiv');
        for (let item of comments) {
            let commentCard = document.createElement('div');
            commentCard.classList.add('commentCard');
            commentCard.innerHTML = `
                        <h3>ID: ${item.id}</h3>
                        <h4>Name: ${item.name}</h4>
                        <h5>Email: ${item.email}</h5>
                        <h6>Body: ${item.body}</h6>
                        `;
            commentDiv.appendChild(commentCard);
            document.body.appendChild(commentDiv);
        }
    })