let url = new URL (location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp => resp.json())
    .then(post => {
        let container = document.createElement('div');
        container.classList.add('postContainer');
        document.body.appendChild(container);

        let postDataBox = document.createElement('div');
        postDataBox.innerText= `All info about the post:`;
        postDataBox.classList.add('postDataBox');
        container.appendChild(postDataBox);

        for (const postElement in post) {
            let p = document.createElement('p');
            p.innerText= `${postElement} - ${(post[postElement])}`;
            p.classList.add('postElement');
            postDataBox.appendChild(p);
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(resp => resp.json())
            .then(comments => {

                let postComment= document.createElement('div');
                postComment.classList.add('postComment');
                container.appendChild(postComment);
                for (const comment of comments) {
                    let com = document.createElement('div');
                    com.classList.add('postCom');
                    postComment.appendChild(com);
                    for (const commentElement in comment) {
                        let come = document.createElement('div');
                        come.innerText = `${commentElement}: ${(comment[commentElement])}`;
                        come.classList.add('postCome');
                        com.appendChild(come);
                    }

                }
            })
    })