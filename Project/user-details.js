let url = new URL (location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(info => {
        console.log(info);
        let cont = document.createElement('div');
        cont.classList.add();
        document.body.appendChild(cont);

        let userData = document.createElement('div');
        userData.innerText= `User details:`;
        userData.classList.add('userInfoDiv');
        cont.appendChild(userData);

        for (const infoElement in info) {
            let p = document.createElement('p');
            p.innerText= `${infoElement} - ${(info[infoElement])}`;
            p.classList.add('infoList');
            userData.appendChild(p);
        }

        let button = document.createElement('button');
        button.classList.add('postButton');
        button.innerText = `post of current user`;
        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(resp => resp.json())
                .then(posts => {
                    let postBox = document.createElement('div');
                    postBox.classList.add('postBox');
                    userData.appendChild(postBox)
                    for (const post of posts) {
                        let postDiv = document.createElement('div');
                        postDiv.classList.add('postDiv');
                        postDiv.innerText = `${post.title} `;
                        postBox.appendChild(postDiv);

                        let a = document.createElement('a');
                        a.href = `post-details.html?id=${post.id}`;
                        a.innerText = 'go to post info';
                        a.classList.add ('postLink');
                        postDiv.appendChild(a);
                    }
                });
        }
        userData.appendChild(button);
    });