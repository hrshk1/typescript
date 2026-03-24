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

//access modifiers
class ChaiWithAccess {
    public flavour: string = "Masala";
    private secretIngredient: string = "Cardamom";
    protected price: number = 25;
    revealSecretIngredient() {
        console.log(`The secret ingredient is ${this.secretIngredient}`);
    }
}
//private properties can only be accessed within the class they are defined in, while protected properties can be accessed within the class and its subclasses. Public properties can be accessed from anywhere.
//to show or access the private property we can create a public method inside the class that can access the private property and then call that method to reveal the secret ingredient.

const c = new ChaiWithAccess();
console.log(c.flavour);
c.revealSecretIngredient();

//understanding protected
class Shop{
    protected shopName: string = "Chaiwala";
}
class Branch extends Shop {
    displayShopName() {
        console.log(`The shop name is ${this.shopName}`);
    }
}

const branch = new Branch();
branch.displayShopName();
//In this example, the Branch class extends the Shop class, which means it inherits the protected shopName property. The displayShopName method in the Branch class can access the shopName property because it is protected and accessible within the subclass. When we create an instance of the Branch class and call the displayShopName method, it will successfully access and display the shop name.

//using # to define private

class Wallet {
    #balance: number = 100;

    getBalance() {
        return this.#balance;
    }
}
const myWallet = new Wallet();
console.log(myWallet.getBalance());
//In this example, the #balance property is defined as a private field using the # syntax. This means that it cannot be accessed directly from outside the class. Instead, we have a public method getBalance() that allows us to retrieve the value of the balance. When we create an instance of the Wallet class and call the getBalance method, it will return the current balance of 100.

//readonly properties
class Cup {
    readonly size: string;
    constructor(size: string) {
        this.size = size;
    }
}

const myCup = new Cup("Medium");
console.log(myCup.size);
//In this example, the size property is defined as readonly, which means that it can only be assigned a value once, either at the time of declaration or within the constructor. Once a value is assigned to a readonly property, it cannot be changed. In this case, we assign the value "Medium" to the size property when creating an instance of the Cup class. If we try to modify the size property after it has been assigned, TypeScript will throw an error because it is readonly.


//there is also a convention that use underscore before the name of private properties

class ModernChai {
    private _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value: number) {
        if (value < 0) {
            console.log("Sugar cannot be negative");
        } else {
            this._sugar = value;
        }
}
}

const myChai = new ModernChai();
console.log(myChai.sugar);
myChai.sugar = 3;



//static properties and methods
class EkChai {
    static shopName: string = "Ek Chai";
    constructor(public flavour:string){}
}

console.log(EkChai.shopName);
//In this example, the shopName property is defined as static, which means that it belongs to the class itself rather than to any instance of the class. We can access the static property directly using the class name (EkChai.shopName) without needing to create an instance of the class. Static properties are shared among all instances of the class, so they can be useful for storing information that is common to all instances, such as a shop name in this case.


//abstrct classes and methods
//An abstract class is a class that cannot be instantiated on its own and is meant to be subclassed. It can contain abstract methods, which are methods that are declared but not implemented in the abstract class. Subclasses of the abstract class are required to provide an implementation for the abstract methods.

abstract class Beverage {
    abstract prepare(): void;
}

class GreenTea extends Beverage {
    prepare() {
        console.log("Preparing Green Tea...");
    }
}

const myGreenTea = new GreenTea();
myGreenTea.prepare();
//In this example, the Beverage class is defined as an abstract class with an abstract method prepare(). The GreenTea class extends the Beverage class and provides an implementation for the prepare() method. We cannot create an instance of the Beverage class directly because it is abstract, but we can create an instance of the GreenTea class and call the prepare() method to see the output.


//composition
class Heater {
    heat(){}
}

class ChaiMaker{
    //define the type of the heater property as the heater class and then we can use it to call the heat method of the heater class
    constructor(private heater: Heater){}
    make(){
        this.heater.heat
    }
}