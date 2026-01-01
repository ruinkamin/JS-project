//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

const fruts = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];

let names = [];

for (let i = 0; i < fruts.length; i++) {
    names.push(fruts[i].name);
};

console.log(names);


//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

for (let i = 2; i < 10; i++) {
    if (i % 2 === 0) console.log(i);
}


//  -- 3 --
//Замініть цикл "for" на "while"

for (let i = 0; i < 5; i++) {
    console.log( `цифра ${i}!` );
}

let i = 0;

do {
    console.log(`цифра ${i}!`);
    i++;
} while (i < 5);

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

let numm = +prompt("Введіть число більше за 100");

while (true) {
    if (!numm) break;

    if (numm <= 100) {
        numm = +prompt("Введіть число ще раз");
    } else {
        break;
    }
}

console.log(numm);



//  -- 5 --
// Вирахуйте середній вік

const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

let ages = [];

for (let a = 0; a < girls.length; a++) {
    ages.push(girls[a].age);
};

let avarage = ages.reduce((summ, items) => (summ + items))/ ages.length;

console.log(avarage);
