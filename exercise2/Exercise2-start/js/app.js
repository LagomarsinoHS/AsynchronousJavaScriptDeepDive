var MAINAPP = (function (nsp) {
    "use strict";

    /*
    This IIFE is the start of an application. The first thing we want to do is download all the posts, comments and todos so that we can work with them. Add the code in order to do that. Also, make sure that you add the posts, comments and todos to the MAINAPP variable so they are accessible outside this function (e.g. nsp.posts = posts & return nsp). Because the code is asynchronous, you will need to consider the best way to do that.
    */

    let baseUrl = 'https://jsonplaceholder.typicode.com'
    let extra = ["posts", "todos", "comments"]

    extra.forEach(ele => {
        fetch(`${baseUrl}/${ele}`)
            .then(response => response.json())
            .then(data => nsp[ele] = data)
    });


    /*  fetch(todosUrl)
         .then(data => data.json())
         .then(todosInfo => {
             todos = todosInfo
             return fetch(postsUrl)
         })
         .then(data => data.json())
         .then(postsInfo => {
             posts = postsInfo
             return fetch(commentsUrl)
         })
         .then(data => data.json())
         .then(comInfo => {
             comments = comInfo
             nsp.posts = posts;
             nsp.comments = comments;
             nsp.todos = todos
         }) */
    console.log(window)
    return nsp;
})(MAINAPP || {});
