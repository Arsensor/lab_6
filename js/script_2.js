document.getElementById("send_2").onclick = exercise_2; //Переход по клику
function exercise_2() { //Объявление функции
    let number_k = Number(document.getElementById("name_k_2").value); //Получение переменной по id
    let number_m = Number(document.getElementById("name_m_2").value); //Получение переменной по id
    let number_n = Number(document.getElementById("name_n_2").value); //Получение переменной по id
    let matrix;
    function get_random_number(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //Максимум не включается, минимум включается
    }
    function get_matrix(m, n) {
        const matrix = [];
        for (let i = 0; i < m; i++) {
            const matrix_process = [];
            for (let j = 0; j < n; j++) {
                matrix_process[j] = get_random_number(1, 9);
            }
            matrix.push(matrix_process);
        }
        return matrix;
    }
    function get_line_in_matrix(matrix, line_number) {
        for (let i = 0; i < matrix.length; i++) {
            if ((i + 1) == line_number) {
                return matrix[i];
            }
        }
    }
    function show_matrix(id, matrix) {
        let container = document.getElementById(id);
        if (container) {
            container.innerHTML = "";
            for (let i = 0; i < matrix.length; i++) {
                let line = document.createElement("button");
                line.textContent = String(matrix[i]);
                line.className = "matrix_line";
                container.appendChild(line);
            }
        }
    }
    if (((isNaN(number_k) || (number_k == "")) || (isNaN(number_m) || (number_m == ""))
        || (isNaN(number_n) || (number_n == ""))) || (number_k < 0 || number_m < 0 || number_n < 0)) { //Объявление условия на проверку
        alert("Введите ещё раз корректные числа"); //Вывод о несоответствии ввода
    } else {
        if (number_k <= number_m) {
            matrix = get_matrix(number_m, number_n);
            show_matrix("output_exercise_2_matrix", matrix);
            document.getElementById("output_exercise_2_line").innerHTML = "Интересующая вас строчка матрицы: " + get_line_in_matrix(matrix, number_k) + "."; //Вывод
        }
        else {
            alert("Такой строки не существует"); //Вывод о несоответствии ввода
        }
    }
}
