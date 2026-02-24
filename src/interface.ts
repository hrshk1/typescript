type TeaRecipe = {
    water : number;
    milk : number;
}

class MChai implements TeaRecipe {
    water=100;
    milk=50;
}

//In TypeScript, the implements keyword is used to ensure that a class adheres to a specific contract defined by an interface.
// when using type for implement we can't use it in some ways like below:

type CupSize = "small" | "large" //--> these are called literal types and they are in union rn

class Chai implements CupSize {
    // Type 'Chai' is not assignable to type 'CupSize'.
    // Type 'Chai' is missing the following properties from type '"small" | "large"': small, large
    // we can't implement a type because it is not a contract, it is just a union of string literals. It doesn't have any properties or methods that a class can implement. On the other hand, an interface defines a contract that a class can implement, which is why we can use the implements keyword with interfaces but not with types.
}

// better way to implement the above code is to use an interface instead of a type:
interface CupSizeInterface {
    size: "small" | "large";
}
class ChaiInterface implements CupSizeInterface {
    size: "small" | "large" = "small";
}

// one more way where type can't be accepted 

type Response = {ok:true} | {ok:false}
class myRes implements Response {
    // Type 'myRes' is not assignable to type 'Response'.
    ok:boolean = true;
}

// in above code we are trying to implement a type that is a union of two object types. This is not possible because a class cannot implement a union type. A class can only implement an interface or a type that is an object type. In this case, we should use an interface instead of a type to define the contract for the class to implement.


//union

type TeaType = "masala" | "green" | "black";

// in above code we are defining a union type called TeaType which can be either "masala", "green" or "black". This means that any variable of type TeaType can only have one of these three string values. Union types are useful when we want to restrict the possible values of a variable to a specific set of options. In this case, we are defining the possible types of tea that we can have.

//intersection

type BaseChai = {teaLeaves: number};
type Extra = {masala:number};

type masalaChai = BaseChai & Extra;

// in above code we are defining two types, BaseChai and Extra, and then we are creating a new type called masalaChai which is an intersection of the two types. This means that any variable of type masalaChai must have all the properties of both BaseChai and Extra. In this case, a variable of type masalaChai must have both teaLeaves and masala properties. Intersection types are useful when we want to combine multiple types into a single type that has all the properties of the combined types.

const cup: masalaChai = {
    teaLeaves: 10,
    masala: 5   
}

// ? in TypeScript is used to denote optional properties in an interface or type. When a property is marked as optional, it means that it may or may not be present in an object of that type. This allows for more flexibility when working with objects, as we can create objects that do not have all the properties defined in the type or interface. For example:

type User = {
    username: string;
    bio?: string; // bio is an optional property
}

const u1 : User = {username:"Hitesh"}
const u2 : User = {username:"Hitesh", bio:"I am a software developer"}

// readonly in TypeScript is used to denote properties that cannot be modified after they have been initialized. When a property is marked as readonly, it means that its value can only be set once, either during initialization or in the constructor of a class. This is useful for creating immutable objects or for ensuring that certain properties of an object cannot be changed after they have been set. For example:

type Config = {
    readonly appName: string;
    version: string;
}

const cfg:Config={
    appName:"MyApp",
    version:"1.0.0"
}
// cfg.appName = "NewApp"; // Error: Cannot assign to 'appName' because it is a read-only property.