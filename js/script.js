//task 1
/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 префиксная форма, а увеличивается на 1 и в с заносится 2 (a=2)
d = b++; alert(d);           // 1 постфиксная форма, в d заносится 1, b увеличивается на 1(b=2)
c = (2+ ++a); alert(c);      // 5 префискная форма, c= (2+ 2+1) = 5, a теперь равно 3
d = (2+ b++); alert(d);      // 4 постфиксная форма, сначала d=(2 + 2), потом b увеличивается на 1
alert(a);                    // 3
alert(b);                    // 3

*/

//task 2

/*

var a = 2;
var x = 1 + (a *= 2);

Уравнение: x = 1 + (a *= 2) в полной записи x = 1 + (a = a * 2). Если a = 2,
то подставляя, получим:

(a = 2 * 2), теперь a = 4. Окончательный результат: x = 1 + 4 = 5

*/


//task 3
var a, b, diff, mlt, sum;

function mathFunction(a, b) {
    a = +prompt('Введите первое целое число');
    b = +prompt('Введите второе целое число');
    if ((a == '') || (b == '')) {
        alert('Введённые значения некорректны');
    } else if ((a >= 0) && (b >= 0)) {
        diff = a - b;
        alert('Разность введенных чисел равна ' + Math.abs(diff));
    } else if ((a < 0) && (b < 0)) {
        mlt = a * b;
        alert('Произведение введенных чисел равно ' + mlt);
    } else if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        sum = a + b;
        alert('Сумма введенных чисел равна ' + sum);
    } else {
        alert('Введённые значения некорректны');
    }
}

mathFunction(a, b);



//task 4

/*


*/



var a = (Math.random() * 15).toFixed(0);
function massNumbers(a) {
    if (a == 15) {
        console.log(a + "\n \n Второй вариант задачи с числами: \n");
        return 1;
    }
    console.log(a++ + " ");
    massNumbers(a);
}

massNumbers(a);

var b = (Math.random() * 15).toFixed(0);
switch (b) {
    case "0":
        console.log(0);
    case "1":
        console.log(1);
    case "2":
        console.log(2);
    case "3":
        console.log(3);
    case "4":
        console.log(4);
    case "5":
        console.log(5);
    case "6":
        console.log(6);
    case "7":
        console.log(7);
    case "8":
        console.log(8);
    case "9":
        console.log(9);
    case "10":
        console.log(10);
    case "11":
        console.log(11);
    case "12":
        console.log(12);
    case "13":
        console.log(13);
    case "14":
        console.log(14);
    case "15":
        console.log(15);
}

//task 5
var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');

function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}
function division(a, b) {
    if (b != 0) {
        return (a / b);
    }
    return 0;
}



alert('сумма чисел равна ' + add(x, y));
alert('Разность чисел равна ' + subtract(x, y));
alert('Произведение чисел равно ' + multiply(x, y));
alert('Частное деления чисел равно ' + division(x, y));

//task 6

function mathOperation(arg1, arg2, operation) {
    arg1 = +prompt('Введите первое число');
    arg2 = +prompt('Введите второе число');
    operation = prompt('Введите номер выполняемой операции для чисел \n 1 - сложение \n 2 - вычитание \n 3 - умножение \n 4 - деление');
    switch (operation) {
        case "1":
            alert(add(arg1, arg2));
            break;
        case "2":
            alert(subtract(arg1, arg2));
            break;
        case "3":
            alert(multiply(arg1, arg2));
            break;
        case "4":
            alert(division(arg1, arg2));
            break;
        default:
            alert('Некорректный выбор!');
    }

}
var arg1, arg2, operation;
mathOperation(arg1, arg2, operation);

//task 7
alert(null == 0); //false
alert(null != 0); //true
alert(null > 0); //false
alert(null < 0); //false

//task 8

//task 8
var val, pow, i = 0, z = 1;
function exponentiation(x, y) {
    if (i == y) {
        return z;
    }
    z = z * x;
    i++;
    exponentiation(x, y);
}
function power(val, pow) {
    val = +prompt('Введите число');
    pow = +prompt('Введите степень');
    if (pow == 0) {
        alert("Число " + val + " в степени 0 равно 1");
        return 1;
    }
    if (pow == 1) {
        alert("Число " + val + " в степени 1 равно " + val);
        return val;
    }
    if (pow > 0) {
        exponentiation(val, pow);
        alert(z);
    }
    if (pow < 0) {
        pow = Math.abs(pow);
        exponentiation(val, pow);
        alert(1 / z);
    }


}
power(val, pow);