"use strict";
console.log('Hello World');
let num = 10;
console.log(num);
num = 5;
console.log(num);
let info = [1, 'vinayak'];
console.log(info);
var gender;
(function (gender) {
    gender[gender["female"] = 0] = "female";
    gender[gender["male"] = 1] = "male";
    gender[gender["others"] = 2] = "others";
})(gender || (gender = {}));
let myGender = gender.male;
console.log(myGender);
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    else
        return income * 1.3;
}
calculateTax(12000);
let employee = {
    id: 1,
    name: 'vinayak',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hello');
}
greet(null);
//# sourceMappingURL=app.js.map