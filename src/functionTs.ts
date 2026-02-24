function makeChai(type:string, cups:number){
    console.log(`Making ${cups} cups of ${type} chai...`);
}

makeChai("Masala", 2);

//this is how to define and call a function using types in typescript 

//below is an example of function with return type
function getChaiPrice(): number {
    return 25;}

//if function is not returning anything then we can use void as return type to explicitly indicate that the function does not return a value.
function serveChai(): void {
    console.log("Serving chai...");
}

function orderChai(type?:string){
}
//question mark means optional

function orderSomeChai(type:string="masala"){}
//in this way provide default value  

//std practice is that we should write optional and default parameters at the end of the parameter list.

function kuchbhi (){
    if(Math.random() > 0.5){
        return "Chai is ready!";
    }
    else return null;
}
//here the return type of the function is string | null because it can return either a string or null. TypeScript will infer the return type based on the possible return values of the function.

function createChai(order:{
    type:string;
    sugar:number;
    size:"small" | "medium" | "large";
}){
    console.log(`Creating a ${order.size} ${order.type} chai with ${order.sugar} sugar...`);
}