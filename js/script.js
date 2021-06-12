//task 1
var i = 2;
var n = 100;
function isPrime(x) {
    var d = 2;
    while (x % d != 0) {
        d += 1;
        if (d == x) {
            console.log(x + "\n");
        }
    }
    return 0;
}
while (i <= n) {
    if (i == 2) {
        console.log(i + "\n");
    }
    if (i > 1) {
        isPrime(i);
    }
    i++;
}

//task 2 3

var basket = [
    {
        title: "Товар 1",
        price: 10,
        count: 2
    },
    {
        title: "Товар 2",
        price: 20,
        count: 3
    },
    {
        title: "Товар 3",
        price: 30,
        count: 5
    },
    {
        title: "Товар 4",
        price: 40,
        count: 1
    },
    {
        title: "Товар 5",
        price: 50,
        count: 7
    },
    {
        title: "Товар 6",
        price: 60,
        count: 3
    },
    {
        title: "Товар 7",
        price: 70,
        count: 0
    }
]

var s = 0;
function countBasketPrice(b) {
    for (var good of b) {
        s += good.price * good.count;
    }
    console.log("\nСтоимость всех товаров в корзине равна " + s);
    return s;
}

countBasketPrice(basket);

//task 4
/*
Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/

for (var j = 0; j < 10; console.log(j++)) { }


//task 5
/*Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */
var s = "x";
for (var i = 0; i < 20; i++) {
    console.log(s);
    s += "x";
}