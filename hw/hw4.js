// 1
// Перепишіть функцію, використовуючи '?' або '||'

function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Батьки дозволили?');
}
}

function checkage(age) {
    return age > 18 || confirm('Батьки дозволили?');
}


// 2
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

function min(a, b) {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    }
    return `${a} = ${b}`;
}


function min(a, b) {
    return a < b ? a : (a > b ? b : `${a} = ${b}`);
}

console.log(min(4, 4));


// 3
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:



function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
ask("Ви згодні?",
    function() { alert("Ви погодились."); },
    function() { alert("Ви скасували виконання."); }
);


const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask("Ви згодні?", function() { alert("Ви погодились."); }, function() { alert("Ви скасували виконання."); });