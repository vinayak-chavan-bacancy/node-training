console.log('Hello World');
let num: number = 10;
console.log(num);
num = 5;
console.log(num);


// tuple

let info: [number, string] = [1, 'vinayak'];
console.log(info);


// enum

enum gender { female= 0, male=1, others= 2}
let myGender: gender = gender.male;
console.log(myGender);


//  function

function calculateTax (income: number): number {
  if(income < 50000)
    return income * 1.2;
  else
    return income * 1.3
}
calculateTax(12000)


//object

type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

let employee: Employee = { 
  id: 1, 
  name: 'vinayak',
  retire: (date: Date) => {
    console.log(date);
  }
};


// union

function kgToLbs(weight: number | string): number {
  if(typeof weight === 'number')
    return weight * 2.2;
  else
    return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');


// intersection type

type Draggable = {
  drag: () => void
}
type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}


// nullable

function greet(name: string | null) {
  if(name)
    console.log(name.toUpperCase());
  else
    console.log('Hello');
}
greet(null);