//interface --> very similar to type
//interface is only used for objects & sometimes functions and classes but type can be used for any type of data
interface Chai {
    readonly flavor: string
    price : number
    milk?: boolean //optional property
}

const masala:Chai = {
    flavor: "Masala",
    price: 25
}

//we can't define method in interface but we can define a function type

interface DiscountCalculator{
    (price: number): number
}
const apply50: DiscountCalculator = (price) => price * 0.5
//here we are defining a function interface that takes a number as an argument and returns a number. We can then assign a function to this type that applies a 50% discount to the price.

interface TeaMachine{
    start(): void;
    stop(): void;
}

const Machine: TeaMachine = {
    start() {
        console.log("Machine started");
    },
    stop() {
        console.log("Machine stopped");
    }
}
//here we are defining an interface for a tea machine that has two methods: start and stop. We then create an object that implements this interface by providing the required methods.


//index signature -->similar to map ds here key will be string and value will be number
interface ChaiRatings {
    [flavour: string]: number;
}
const ratings: ChaiRatings = {
    "Masala": 4.5,
    "Ginger": 4.0,
    "Lemon": 3.5
}
//here we are defining an interface for chai ratings that allows us to have any number of properties with string keys and number values. We can then create an object that implements this interface by providing the ratings for different flavors of chai.

//interface Merging --> we can merge multiple interfaces with the same name and they will be combined into a single interface
//this generally happens when we are working with third party libraries and we want to add some additional properties or methods to the existing interfaces provided by the library.

interface User {
    name:string;
}
interface User {
    age:string;
}

const u: User = {
    name: "John",
    age: "30" // if we dont provide age then it will give an error because we have merged the two interfaces and now both name and age are required properties of the User interface.
}


//interfaces can also be extended to create new interfaces that inherit the properties and methods of the parent interface. This is useful for creating more specific types based on a general type.

interface A {a: string}
interface B {b: number}
interface C extends A, B {c: boolean}
//here we are defining three interfaces: A, B, and C. Interface C extends both A and B, which means it inherits the properties of both interfaces. Then we also add a new property c to interface C. Now any object that implements interface C must have properties a, b, and c.

