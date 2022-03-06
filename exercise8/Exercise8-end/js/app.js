var MAINAPP = (function (nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    Change this code to use async await. Make sure to use promise.all so that we await all three pieces of data without awaiting each individually which would take much longer.

    Which pattern do you prefer for this application? promises or async await?
    */

    const calls = ["posts", "comments", "todos"]
    const promises = calls.map(call => {
        return fetch(url + call)
            .then(data => nsp[call] = data.json())
    });

    (async function () {
        try {
            const [posts, comments, todos] = await Promise.all([...promises])
            nsp.posts = posts
            nsp.comments = comments
            nsp.todos = todos
        }
        catch (e) {
            console.error(`Problem retrieving data: ${e}`)
        }
    })()

    /*  (async function () {
         try {
             let p1 = fetch(url + 'posts/'),
                 p2 = fetch(url + 'comments/'),
                 p3 = fetch(url + 'todos/');

             let results = await Promise.all([p1, p2, p3]);

             nsp.posts = await results[0].json();
             nsp.comments = await results[1].json();
             nsp.todos = await results[2].json();
             console.log("data received.");
         } catch (e) {
             console.error(`Problem retrieving data: ${e}`)
         }
     })(); */

    console.log("Remaining Code.")

    //public
    return nsp;
})(MAINAPP || {});

