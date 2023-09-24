//number
let sales = 123_45678;

//string
let course = "TypeScript";

//boolean
let is_published = false;

//any
let level;

//string
function render (document: string) {
    console.log(document);
}

//array
let numbers: number[] = [1, 2, 3];

//tuple - for key value pairs
let unit: [number, string] = [1042, 'Technical writing'];

//enums use PascalCase
const enum Size {Small = 's', Medium = 'm', Large = 'l'};
let tshirt: Size = Size.Large;
console.log(tshirt);

//functions
function calculateTax (income: number, taxYear = 2022) {
    if (taxYear > 2022) 
        return income * 0.2
    return income * 0.1
}
console.log(calculateTax(20000, 2023))

//objects
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
let employee: Employee = {
    id: 1,
    name: "ALX SE",
    retire: (date: Date) => console.log(date)
};
console.log(employee.name);

//Union
function kiloToGram (weight: number | string): number {
    if (typeof(weight) === 'number')
        return weight * 2
    else
        return parseInt(weight) * 4
}
console.log(kiloToGram(10));
console.log(kiloToGram('10'));

//Intersection types
type Draggable = {
    drag: () => void
}

type Clickable = {
    click: () => void
}

type UIwidget = Draggable & Clickable;

let textBox: UIwidget = {
    drag: () => console.log('dragging'),
    click: () => console.log('clicking')
}

//Literal types
type Status = 'success' | 'failure' | 'pending';
let feedback: Status = 'pending';
console.log(feedback);

//nullable types
function greet(name: string | null | undefined): string {
    return `Hello ${name}`;
}
greet(null)

//optional chaining
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear())
