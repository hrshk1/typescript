const chai = {
    name: "Masaala Chai",
    price: 100,
    isHot: true
}

// in above code we are defining an object called chai with three properties: name, price and isHot. The type of the chai variable is inferred by TypeScript based on the values assigned to it. The name property is inferred as a string, the price property is inferred as a number and the isHot property is inferred as a boolean. This is an example of how TypeScript can infer the types of variables based on their values, which helps us catch errors and ensure that we are using the correct types in our code.

//object type definition

let tea: {
    name:string;
    price:number;
    isHot:boolean;
}

tea={
    name:"Ginger Tea",
    price: 80,
    isHot: true
}


//2nd way to define object type is by using type alias
type Tea = {
    name:string;
    price:number;
    ingredients:string[];
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 120,
    ingredients: ["tea leaves", "ginger", "milk", "sugar"]
}


type cup = {size:string};
let smallCup:cup = {size:"200ml"};
let bigCup = {size:"500ml", material:"ceramic"};
smallCup = bigCup; // This is allowed because smallCup and bigCup have the same structure, even though bigCup has an additional property. This is an example of structural typing in TypeScript, where the compatibility of types is determined by their structure rather than their explicit declarations.

//2nd exmaple of the above thing
type Brew = {brewTime: number}
const coffee = {brewTime:5, beans:"arabica"};
let myBrew: Brew = coffee; // This is allowed because myBrew and coffee have the same structure, even though coffee has an additional property. This is another example of structural typing in TypeScript, where the compatibility of types is determined by their structure rather than their explicit declarations.


//Note: if we define lesser properties in the type definition than the actual object, it will still work because of structural typing. However, if we define more properties in the type definition than the actual object, it will result in an error because the object does not have those additional properties.

type User = {
    username: string;
    password: string;
}

const u:User = {
    username: "chaicode",
    password: "12345",
}
// if this password in not defined in u, it will give an error


//Datatype separation in object type definition

type Item = {name:string, quantity: number}
type Address = {street: string, pin:number}
type Order = {
    id: string;
    items: Item[];
    address: Address;
}
// In the above code, we have defined three types: Item, Address and Order. The Order type has properties that are of type Item[] (an array of Item) and Address. This allows us to create complex objects with nested structures while still maintaining type safety and clarity in our code. 
//Also, **IMP** first two types are normal datatype definitions and the third one is an object type definition. int first two's commas are being used to separate the properties of the type, while in the third one, we are using semi colons.  


//using partial
type chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<chai>)=>{
    console.log("Updating Chai with", updates);
}

// after using partial all the properties of the chai type become optional, which means we can pass an object with any combination of the properties defined in the chai type when calling the updateChai function. This allows for more flexibility when updating the properties of a chai object, as we can choose to update only specific properties without having to provide values for all of them.

updateChai({price:25})
updateChai({name:"Masala Chai", isHot:false})
updateChai({})

//here const updateChai is an actual function and there is this parameter oif updateChai calld updates whihc is actuall an object with the propertiues of chail and that too just partial. we are calling updateChai again and again with different objects  

type ChaiOrder = {
    name?:string;
    quantity?: number;
}

const placeOrder = (order: Required<ChaiOrder>)=>{
    console.log("Placing order for", order);
}

placeOrder({
    name: "Masala Chai",
    quantity: 100, 
})

//Required keyword is used to make all the properties of a type required.  