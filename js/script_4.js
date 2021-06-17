//task 1
var obj = {};
var numLength;
function numberToObj(x) {
    var x = prompt('Введите число от 0 до 999');
    numLength = x.length;
    if (parseInt(x) < 0 || parseInt(x) > 999) {
        console.log('Введите число из диапазона!');
        return obj;
    }
    else if (isNaN(parseInt(x))) {
        console.log('Введите число!');
        return obj;
    }
    else {
        switch (numLength) {
            case 3:
                obj.ed = x[2];
                obj.des = x[1];
                obj.sotn = x[0];
                break;
            case 2:
                obj.ed = x[1];
                obj.des = x[0];
                break;
            default:
                obj.ed = x[0];
        }
        console.log(obj);
        return obj;
    }
}
numberToObj();

//task 2
