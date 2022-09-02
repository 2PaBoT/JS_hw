let container = document.createElement('div');
container.classList.add ('userContainer');
document.body.appendChild(container);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{
        for (const user of users) {
            let block = document.createElement('div');
            block.classList.add('userInfo');
            block.innerText = `${user.id} ${user.name}`;

            let a = document.createElement('a');
            a.href = `user-details.html?id=${user.id}`;
            a.innerText = 'About Me';
            a.classList.add ('info');
            block.appendChild(a);
            container.appendChild(block);
        }
    });
