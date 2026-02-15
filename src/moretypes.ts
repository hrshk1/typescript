//forceful type assertion
// sometimes we are sure about the type of a variable but TypeScript is not able to infer it. In such cases, we can use type assertion to tell TypeScript about the type of a variable. This is done using the as keyword.

let response: any = "42";
//let numericLength:number = response
//in above code in start response is of type any, but we clearly assigned it a string but still in the next line response acts like any and we can assign it to a number variable which is not correct. To fix this we can use type assertion.

let numericLength: number = (response as string).length;
// in above code we are asserting that response is of type string, so now TypeScript knows that response is a string and we can access the length property of it. This is an example of forceful type assertion, where we are telling TypeScript about the type of a variable that it cannot infer on its own.

type Book = {
  name: string;
};

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;
// in above code we are parsing a JSON string to an object and then asserting that the object is of type Book. This is a common use case for type assertion when working with JSON data. By asserting the type of the parsed object, we can ensure that we are working with the correct structure and properties of the data.

console.log(bookObject.name); // Output: who moved my cheese

const inputElement = document.getElementById("myInput") as HTMLInputElement;
// in above code we are getting an element from the DOM and asserting that it is of type HTMLInputElement. This allows us to access the properties and methods specific to input elements, such as value, without TypeScript throwing an error about the element being of type HTMLElement.

// diff between any and unknown https://gemini.google.com/share/79f85acb342b

// try catch block , in typeScript, the error variable in a catch block is of type unknown by default. This means that TypeScript does not know the type of the error variable and we need to use type assertion to tell TypeScript about the type of the error variable.

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}
// in above code we are using the instanceof operator to check if the error variable is an instance of the Error class. If it is, we can safely access the message property of the error variable. This is a common pattern for handling errors in TypeScript, where we check the type of the error variable before accessing its properties or methods.

const data: unknown = "chai aur code";
const strData: string = data as string;
// in above code we are asserting that the data variable is of type string, so now TypeScript knows that data is a string and we can assign it to a string variable. This is an example of using type assertion to tell TypeScript about the type of a variable that is of type unknown.

type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  } else if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
  role;
}
//here last variable role is of type never because we have covered all possible values of the Role type in the if-else statements. This is an example of exhaustive checking, where we ensure that all possible cases are handled in our code. If we were to add another value to the Role type, TypeScript would throw an error because we have not handled that case in our function. also we have to use return in each if-else block to ensure that the function exits after handling a specific case, otherwise TypeScript would not be able to determine that we have covered all cases and would not assign the type never to the role variable.

function neverReturns(): never {
  while (true) {}
}

// in above code the function neverReturns is of type never because it never returns a value. The while loop runs indefinitely, so the function will never reach a return statement or throw an error. This is an example of a function that has a return type of never, which indicates that it will never return a value or complete its execution.

//void means the function finishes running, but doesn't return a value.

//never means the function will not finish running (it crashes or loops forever).

