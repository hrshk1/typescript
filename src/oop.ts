class Chai {
    flavour: string;
    price: number;

    //unless we define a constructor, it will throw an error on the names of the variables 

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }
}

const masalaChai = new Chai("Masala", 25);
//it is necessary to give the correct number and type of arguments when creating an instance of the class. If we try to create an instance without providing the required arguments, or if we provide arguments of the wrong type, TypeScript will throw an error.
console.log(masalaChai.flavour);
