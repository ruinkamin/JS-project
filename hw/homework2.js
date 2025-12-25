// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

let first = 1;
if (first > 0) {
    console.log(true);
} else if (first < 0) {
    console.log(false);
}

let second = 0;
if (second > 0) {
    console.log(true);
} else if (second < 0) {
    console.log(false);
} else {
    console.log("0")
}

let third = -3;
if (third > 0) {
    console.log(true);
} else if (third < 0) {
    console.log(false);
}

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

let one;
const meaning = "true";

if (one = "test") {
    console.log(true);
} else {
    console.log(false);
}

let two;
const mean = "qwerty";

if (two = "qwerty") {
    console.log(true);
} else {
    console.log(false);
}

let three;
const mea= "true";

if (three = "true") {
    console.log(true);
} else {
    console.log(false);
}


// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

let num;
const numnum = 1;

if (numnum > 10) {
    num = numnum - 5;
} else if (numnum < 5) {
    num = numnum + 5;
}

console.log(num);


let numten;
const numnumten = 10;

if (numnumten > 10) {
    numten = numnumten - 5;
} else if (numnumten < 5) {
    numten = numnumten + 5;
// } else {
//     numten = 0;
}

console.log(numten);

let numtrteen;
const numnumtrteen = 13;

if (numnumtrteen > 10) {
    numtrteen = numnumtrteen - 5;
} else if (numnumtrteen < 5) {
    numtrteen = numnumtrteen + 5;
}

console.log(numtrteen);


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

const month = prompt("Input month number");

switch (month) {
    case "1":
        console.log("січень")
        break;
    case "2":
        console.log("лютий")
        break;
    case "3":
        console.log("березень")
        break;
    case "4":
        console.log("квітень")
        break;
    case "5":
        console.log("травень")
        break;
    case "6":
        console.log("червень")
        break;
    case "7":
        console.log("липень")
        break;
    case "8":
        console.log("серпень")
        break;
    case "9":
        console.log("вересень")
        break;
    case "10":
        console.log("жовтень")
        break;
    case "11":
        console.log("листопад")
        break;
    case "12":
        console.log("грудень")
        break;
}


//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел



const numberfirst = prompt("Input first number");
firstnumber = Number(numberfirst);
const numbersecond = prompt("Input second number");
secondnumber = Number(numbersecond);

console.log(firstnumber + secondnumber);