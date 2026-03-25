//Generics
//mostly used when making libraries or frameworks
function wrapInArray<T>(item:T):T[]{
    return [item];
}
wrapInArray(5); // returns [5]
wrapInArray("Hello"); // returns ["Hello"]
wrapInArray({name: "John", age: 30}); // returns [{name: "John", age: 30}]

//here <T> is generics. item will take the parameter of type T and the function will return an array of type T. This allows us to create a reusable function that can work with any type of data without having to specify the type explicitly. We can use this function to wrap any item in an array, and TypeScript will infer the type based on the argument we pass in.

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
    //return [second, first]; // this will give an error because the return type is defined as [T, U] and we are trying to return [U, T]
}

pair(1, "one"); // returns [1, "one"]
pair("hello", true); // returns ["hello", true]


//Generic interfaces
interface Box<T> {  
    content: T;
}

const numberBox: Box<number> = { content: 123 };
const stringBox: Box<string> = { content: "Hello" };
//make sure to specify the type when creating an instance of the generic interface, otherwise it will default to any and you will lose the benefits of type safety.

//generic also supports partial, pick and omit utility types


//real world used in interface for api response 
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}
const response: ApiResponse<{ name: string; age: number }> = {
    data: { name: "John", age: 30 },
    status: 200,
    message: "Success"
}
//here we are defining a generic interface for an API response that can contain any type of data. We can then create an object that implements this interface by providing the appropriate data, status, and message. This allows us to have a consistent structure for our API responses while still being flexible enough to handle different types of data.

