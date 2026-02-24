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