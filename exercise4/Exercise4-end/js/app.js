var MAINAPP = (function (nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    Change this code so that it uses Promise.all to respond once all of the promises have returned. Provide a notification to the console when the promises have completed.
    */

    const search = ["posts", "comments", "todos"]

    const promises = search.map(iteration => {
        return fetch(`${url}${iteration}`)
            .then(resp => resp.json())
            .catch(err => rej(`Problem retrieving ${iteration}: ${err}`));
    })

    Promise.all([...promises])
        .then(([p, c, t]) => {
            nsp.post = p
            nsp.comments = c
            nsp.todos = t
        })
        .catch(err => console.error(`Error: ${err}`))
        .finally(() => console.log(window))


    /*   let p1 = fetch(url + 'posts/').then(response1 => response1.json()),
          p2 = fetch(url + 'comments/').then(response2 => response2.json()),
          p3 = fetch(url + 'todos/').then(response3 => response3.json());
  
      Promise.all([p1, p2, p3])
      .then(msg => {
          nsp.posts = msg[0];
          nsp.comments = msg[1];
          nsp.todos = msg[2];
          console.log("We have received the data!");
      })
      .catch(err => console.log(`Problem retrieving data: ${err}`)); */

    //public
    return nsp;
})(MAINAPP || {});