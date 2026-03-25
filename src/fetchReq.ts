//Here we won't be using axios library for making web requests instead we will be using the built-in fetch API, which is a modern interface for making HTTP requests in JavaScript. It is supported in most modern browsers and can also be used in Node.js environments with the help of libraries like node-fetch. The fetch API provides a more flexible and powerful way to handle HTTP requests and responses compared to older methods like XMLHttpRequest.

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


const fetchData = async () =>{
    try {
        const response: Response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Todo = await response.json();
        //using await here again because we ere waiting for json parsing to complete before we can use the data
        console.log("Todo",data)
    } catch (error) {
        
    }
}