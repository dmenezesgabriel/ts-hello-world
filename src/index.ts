// Types

// - number
const age: number = 12;

// - string
const fullName: string = "Peter Pan";

// - boolean
const isAdult: boolean = false;

// - undefined

// - object
const character = {
  fullName: "Peter Pan",
  age: 12,
};

// - null

// - Array
let values: number[] = [10, 20, 30];
// - any

// - unknown
let itemInput: unknown;
let itemName: string;
if (itemInput === "string") {
  itemName = itemInput;
}

// - tuple
let itemTuple: [string, number, boolean] = ["Apple", 3, true];

// - never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// - enum
enum Role {
  admin = 1,
  read = 2,
  backup = 3,
}

const user = {
  firstName: "Andre",
  age: 40,
  role: Role.admin,
};

// Alias
type User = {
  firstName: string;
  age: number;
};

// Union
let input: string | number;

// Literal Types
let productPrice: 10 | 20 | 30;
let productSize: "P" | "M" | "G";
productPrice = 10;
productSize = "M";

// Intersection
type JobRole = {
  id: number;
  role: Role;
};

type Employee = User & JobRole;
const employee1: Employee = {
  firstName: "Rafael",
  age: 25,
  id: 2,
  role: Role.admin,
};

// Classes
class Users {
  name: string;
  public balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }
  addMoney(amount: number) {
    this.balance += amount;
  }
}

const user1 = new Users("Gerson", 20);
user1.addMoney(100);
console.log(user1);

// Interfaces
interface Item {
  name: string;
  price: number;
  itemPurchased(message: string): void;
}

let product1: Item;

product1 = {
  name: "Apple",
  price: 2,
  itemPurchased(message: string): void {
    console.log(message + " " + this.name);
  },
};

product1.itemPurchased("You just bought a");

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

class Person implements Person {
  // Public declaration before constructor param initializes it, don't need to this.foo = foo
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}

  greet() {
    console.log("Hello!");
  }
}

const person1 = new Person("Gabriel", "Smith", 30);
console.log(`${person1.firstName} is ${person1.age} years old.}`);

interface UserSchema {
  id: number;
  name: string;
}

class SysUser implements UserSchema {
  constructor(public name: string, readonly id: number) {}
}
const sysUser = new SysUser("Roberto", 1);
console.log(sysUser);

// Index signatures
class HotelRooms {
  [roomNumber: string]: string;
}
const rooms = new HotelRooms();
rooms.A201 = "José";

// Inheritance
class Client extends Person {
  getSoppingCart() {
    console.log(["Potato", "Orange", "Cereal"])
  }
}

class Staff extends Person {
  override greet(): void {
    super.greet()
    console.log("how can I help you?")
  }
}

const staff1 = new Staff("Ana", "Maria", 32)
const client1 = new Client("Pedro", "Paulo", 40);
client1.greet()
staff1.greet()
client1.getSoppingCart()

class Furniture {
  constructor(protected manufacturer: string = "IKEA") {}
}

class Desk extends Furniture{
  kind(){
    console.log(`This is a desk made by ${this.manufacturer}`)
  }
}

class Chair extends Furniture {
  kind() {
    console.log(`This is a chair made by ${this.manufacturer}`)
  }
}

const desk = new Desk()
desk.kind()
const chair = new Chair
chair.kind()
