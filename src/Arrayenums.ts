//we can declare arrays in ts in following ways 
const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [25, 30]
const rating: Array<number> = [4.5, 4.0, 5.0]


//how to make array of objects in ts
type Chai = {
    name:string;
    price: number
}

const menu: Chai[] = [
    {name: "Masala", price: 25},
    {name: "Adrak", price: 30},
    {name: "Elaichi", price: 35}
]

//we can also define readonly arrays in ts using the readonly keyword. This means that once the array is created, its elements cannot be modified.

const cities: readonly string[] = ["delhi", "mumbai", "kolkata"]
//cities.push("chennai") // Error: Property 'push' does not exist on type 'readonly string[]'.

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
//this is how we can define a two-dimensional array in ts. Each element of the outer array is itself an array of numbers.


////Tuples
//A tuple is a fixed-length array where each element can have a different type. We can define a tuple in TypeScript using the following syntax:
let chaiOrder: [string, number] = ["Masala", 2]
//here the first element of the tuple is a string representing the type of chai, and the second element is a number representing the quantity of cups. We can access the elements of the tuple using their index, just like with regular arrays.


//chaiTuple = [2, "Masala"] // Error: Type 'number' is not assignable to type 'string' and Type 'string' is not assignable to type 'number'.

let userInfo: [string, number, boolean?] 
//third element is optional 
userInfo = ["John", 30, true]
userInfo = ["Jane", 25] // This is also valid because the third element is optional.

const location: readonly [number, number] = [40.7128, -74.0060]
//this is how we can define a readonly tuple in TypeScript. The elements of the tuple cannot be modified after it is created.

//named tuples
const chaiItems: [name: string, price:number] = ["Masala", 25]



//Enums

enum Cupsize {
    SMALL,
    MEDIUM,
}

const size = Cupsize.SMALL

enum Status {
    PENDING = 100,
    SERVED,
    CANCELLED
}
//These are incremental enums where the first member is assigned a value (100 in this case) and the subsequent members are assigned incremented values (101 for SERVED and 102 for CANCELLED).

enum ChaiType {
    MASALA = "Masala",
    ADRAK = "Adrak",
    ELAICHI = "Elaichi"
}
//This is a string enum where each member is assigned a specific string value. In this case, the members of the ChaiType enum are assigned the corresponding string values representing different types of chai.

function makeChai (type: ChaiType){
    console.log(`Making a cup of ${type} chai...`);
}

makeChai(ChaiType.MASALA)
// since we have defined that the type parameter of the makeChai function should be of type ChaiType, we can only pass values that are defined in the ChaiType enum. In this case, we are passing ChaiType.MASALA, which is a valid value from the ChaiType enum. If we try to pass a value like "masasla" (a string that is not part of the ChaiType enum), we will get a type error because it does not match any of the defined enum values.


//in std practices