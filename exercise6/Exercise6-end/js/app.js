"use strict";

//Refactor the promise code to create an async function that will take a todo object as a parameter and add the todo to the jsonplaceholder site. Make sure you account for possible errors.

const todo = {
    completed: false,
    userId: 1,
    title: "Learn Promises"
};

const sendTodo = async todo => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(todo)
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(`Unable to create todo ${error}`);
    }
}
sendTodo(todo)

console.log('Other code');