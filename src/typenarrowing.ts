//Type Narrowing is a process of refining the type of a variable to a more specific type. This is done using type guards, which are expressions that perform runtime checks to ensure that a variable is of a certain type.

function getChai(kind:string|number){
    if(typeof kind === "string"){
        // here we are using the typeof operator to check if kind is a string. If it is, then we can safely assume that kind is of type string within this block of code.
        return `You ordered a ${kind} chai`
    } else {
        // if kind is not a string, then it must be a number (since it's a union type of string | number). So we can safely assume that kind is of type number within this block of code.
        return `You ordered ${kind} cups of chai`
    }
}

//checking truithiness 

function serveChai (msg?:string){
    if(msg){
        return `Serving ${msg}`;
    }
    return "Serving default masala chai"
}   

// in the above function, we are checking if msg is truthy. If it is, then we serve the chai with the message. If it's falsy (undefined, null, empty string, etc.), then we serve the default masala chai. This is an example of type narrowing using truthiness checks.


//Exhausting checks
function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small" || size === "medium" || size === "large"){
        return `You ordered a ${size} chai`
    } else {
        return `You ordered ${size} cups of chai`
    }   
}

class KulhadChai{
    server(){
        return "Serving kulhad chai"
    }
}
class Cutting{
    server(){
        return "Serving cutting chai"
    }
}

function server(chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return chai.server()
    } else {
        return chai.server()
    }
}

// in the above function, we are using the instanceof operator to check if chai is an instance of KulhadChai. If it is, then we can safely assume that chai is of type KulhadChai within this block of code. If it's not, then it must be an instance of Cutting, so we can safely assume that chai is of type Cutting within the else block. This is an example of type narrowing using class instances.



//creating your custom types
type ChaiOrder ={
    type: string
    sugar: number
}

function isChaiOrder(obj:any): obj is ChaiOrder{
    return(
        typeof obj ==="object" &&
        obj !== null &&
        typeof obj.type === "string" && 
        typeof obj.sugar === "number"
    )
}

//the above checks are only known as type guards 

function serverOrder(item:ChaiOrder|string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} spoons of sugar`
    }
    return `Serving ${item} chai`
}

// you can make your own types like below we make masala as a type
type MasalaChai = {
    type: "masala";
    spiceLevel: number;
}

type GingerChai = {
    type: "ginger";
    amount: number;
}

type ElaichiChai = {
    type: "elaichi";
    aroma: number;
}

type Chai = MasalaChai | GingerChai | ElaichiChai;
// in the above code, we are creating a union type called Chai, which can be either MasalaChai, GingerChai, or ElaichiChai. Each of these types has a specific structure, and we can use type guards to narrow down the type of chai we are serving based on the properties of the object. This is an example of creating custom types and using them in our code for better type safety and readability.

//now doing type narrowing
function MakeChai(order:Chai){
    switch(order.type){
        case "masala":
            return `Masala Chai`
            break;
        case "ginger":
            return `Ginger Chai`
            break;
        case "elaichi":
            return `Elaichi Chai`
            break;
    }
}

//why order.type is not MasalaChai | GingerChai | ElaichiChai but it is their types? https://gemini.google.com/share/8d5b663fd8df


function brew(order:MasalaChai | GingerChai){
    if("spiceLevel" in order){
        // this can be used to check if the order is of type MasalaChai, since only MasalaChai has the property spiceLevel. If this condition is true, then we can safely assume that order is of type MasalaChai within this block of code.
        return `Brewing ${order.type} chai with spice level ${order.spiceLevel}`
    }
}

function isStringArray(arr:unknown): arr is string[]{
    return Array.isArray(arr) && arr.every(item => typeof item === "string")
}
// the parameter arr is of type unknown. unknown is used when we want to accept any type of value, but we don't know what type it will be. in unknown we later declare what type it is. in the above function, we are checking if arr is an array and if every item in the array is a string. If both conditions are true, then we can safely assume that arr is of type string[] within this block of code. This is an example of using type guards to narrow down the type of a variable that is initially of type unknown.

