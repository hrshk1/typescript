let subs:number | string = 22
subs = "twenty two" // no error since subs can be either a number or a string

let apiRequestStatus: "success" | "failure" | "pending" = "pending"
// apiRequestStatus = "completed" // error since apiRequestStatus can only be "success", "failure", or "pending"
// union types are useful when we want to allow a variable to have multiple types, but we want to restrict it to a specific set of types. In the above example, apiRequestStatus can only be "success", "failure", or "pending", which helps us ensure that we are only using valid status values in our code.

const orders = ['12', '23', '34']
let currentOrder;
//here we are not giving currentOrder a specific type, so it is inferred as any. This means that currentOrder can be of any type, and we can assign it any value without getting a type error. However, this can lead to potential issues since we won't have any type safety or autocompletion for currentOrder. It's generally recommended to avoid using the any type and instead use union types or specific types to ensure better type safety in our code.

for (let order of orders){
    if(order === '23'){
        currentOrder = order
        break
    }
}

console.log(currentOrder);
// currentOrder is of type string | undefined, since it can either be a string (if we find the order) or undefined (if we don't find the order). This is an example of a union type, where a variable can have multiple types. In this case, currentOrder can be either a string or undefined, depending on whether we find the order in the array or not.

let randomValue: any = 10
randomValue = "hello"
randomValue = true
// randomValue can be of any type, so we can assign it a number, a string, a boolean, or any other type without getting a type error. However, using the any type can lead to potential issues since we won't have any type safety or autocompletion for randomValue. It's generally recommended to avoid using the any type and instead use specific types or union types to ensure better type safety in our code.