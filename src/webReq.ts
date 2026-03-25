//for making web requests, we can use the axios library, which is a popular HTTP client for JavaScript. It allows us to make requests to APIs and handle responses easily.
//you need to npm install axios before using it in your project. You can do this by running the following command in your terminal:
//npm install axios
//most libraries are shipped with their own type definitions, so you don't need to install @types/axios separately. However, if you are using an older version of axios that does not include type definitions, you can install them using the following command:
//npm install -D @types/axios
//sometimes even the above command won't work in that case you need to search for the type definitions in the DefinitelyTyped repository on GitHub and install them manually. You have to make .d.ts file and paste that code

import axios, {AxiosResponse} from "axios"

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


//Axios resposne is the generic datatype for response obtained from any axios request
const fetchData = async () =>{
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo",response.data)
    } catch (error) {
        if(axios.isAxiosError(error)){
            // Handle Axios-specific errors
            console.error("Axios error:", error.message);
            if (error.response) {
                //if there was a response from the server, we can log the details of the response for debugging purposes
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            }
        } else {
            console.error("Unexpected error:", error);
        }
    }
}