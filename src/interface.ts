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

type CupSize = "small" | "large"

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