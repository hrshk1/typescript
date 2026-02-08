let drink = "chai"
// drink = 10 // error since drink is of type string
let cup = Math.random()>0.5?10:"big"
// cup is either a number or a string, so its type is number | string
// we are not giving cup a specific type, so it is inferred as number | string. This is called type inferencing. Type inference means TypeScript automatically determines the type of a variable, function return, or expression based on how it’s used.

let chaiFlavour:string = "masala"
// here we are explicitly giving chaiFlavour a type of string. This is called type annotation. Type annotation means we explicitly specify the type of a variable, function parameter, or return value using a colon followed by the type.

// check all the dataypes in typescript https://chatgpt.com/share/6988cc55-5e84-8006-959b-dee859a36885

