const favorKey = 'favorites';
const work = document.getElementById('work');
const users = JSON.parse(localStorage.getItem(favorKey));

users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user';
    const info = document.createElement('div');
    info.innerText = `Name: ${user.name}  -  Age: ${user.age}  -  Status: ${user.status}`;
    userDiv.appendChild(info);
    work.appendChild(userDiv);
})