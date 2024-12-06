document.getElementById("send_1").onclick = exercise_1; //Переход по клику
function exercise_1() { //Объявление функции
    let number_a = Number(document.getElementById("name_a_1").value); //Получение переменной по id
    let number_b = Number(document.getElementById("name_b_1").value); //Получение переменной по id
    let answer; //Создание переменной ответа
    if ((isNaN(number_a) || (number_a == "")) || (isNaN(number_b) || (number_b == "")) || (number_a == number_b)) { //Объявление условия на проверку
        alert("Введите ещё раз корректные числа"); //Вывод о несоответствии ввода
        return;
    } else { //Если с первичной проверкой все хорошо, тогда
        answer = (number_a + number_b) / 2; //Формула нахождения средней линии
        if (answer > 0) {
            document.getElementById("output_exercise_1").innerHTML = "Средняя линия вашей трапеции: " + answer + "."; //Вывод
            return;
        } else {
            document.getElementById("output_exercise_1").innerHTML = "Средняя линия вашей трапеции не может быть найдена. "; //Вывод
            return;
        }
    }
}
