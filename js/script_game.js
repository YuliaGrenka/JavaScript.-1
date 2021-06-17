//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];


function showWindow(quest, answer1, answer2, quantity) {
    var ok = false;
    do {

        event = +prompt(quest + answer1 + answer2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(quantity, event);
        }
    } while (!ok);
    switch (event) {
        case 1:
            answers.push([quest, answer1]);
            break;
        case 2:
            answers.push([quest, answer2]);
            break;
        case -1:
            answers.push([quest, "выход из игры"]);
            break;
        default:
            alert('Ошибка');
    }
    return event;

}

switch (showWindow(works.a00, works.a1, works.a2, works.a0)) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2

        switch (showWindow(works.b00, works.b1, works.b2, works.b0)) {
            case 1:
            case 2: // Второе действие   Если ввели 1 2 то переходим на 4 окно

                showWindow(works.d00, works.d1, works.d2, works.d0)
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну

        switch (showWindow(works.c00, works.c1, works.c2, works.c0)) {
            case 1: // Второе действие

            case 2: // Второе действие
                showWindow(works.d00, works.d1, works.d2, works.d0)

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
console.log(answers);
var stepNumber = prompt('Введите номер хода');
alert("В ходе #" + stepNumber + " " + answers[stepNumber - 1][0] + " Вы выбрали вариант " + answers[stepNumber - 1][1]);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

