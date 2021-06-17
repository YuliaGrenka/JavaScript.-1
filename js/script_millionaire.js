//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа


var answer, correctAnswers = 0;
for (var i = 0; i < question.length; i++) {
    answer = +prompt("Вопрос #" + (i + 1) + " " + question[i].q + "\nВарианты ответов:\n" + question[i].a1 + "\n" + question[i].a2 + "\n" + question[i].a3 + "\n" + question[i].a4 + "\nВведите номер вашего ответа. \n\nДля выхода из игры введите -1.");
    if (answer == -1) {
        alert("Вы покинули игру.");
        break;
    }
    if (answer == question[i].correct) {
        correctAnswers++;
        alert('Правильный ответ!');
    }
    else {
        alert('Вы ответили неверно.');

    }
}
alert("Вы ответили на " + correctAnswers + " вопросa(-ов).");
