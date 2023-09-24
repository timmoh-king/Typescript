"use strict";
var _a;
let sales = 12345678;
let course = "TypeScript";
let is_published = false;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let unit = [1042, 'Technical writing'];
;
let tshirt = "l";
console.log(tshirt);
function calculateTax(income, taxYear = 2022) {
    if (taxYear > 2022)
        return income * 0.2;
    return income * 0.1;
}
console.log(calculateTax(20000, 2023));
let employee = {
    id: 1,
    name: "ALX SE",
    retire: (date) => console.log(date)
};
console.log(employee.name);
function kiloToGram(weight) {
    if (typeof (weight) === 'number')
        return weight * 2;
    else
        return parseInt(weight) * 4;
}
console.log(kiloToGram(10));
console.log(kiloToGram('10'));
let textBox = {
    drag: () => console.log('dragging'),
    click: () => console.log('clicking')
};
let feedback = 'pending';
console.log(feedback);
function greet(name) {
    return `Hello ${name}`;
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map