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

