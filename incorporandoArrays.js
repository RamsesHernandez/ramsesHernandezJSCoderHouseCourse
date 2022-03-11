function diaSemana() {
    var day = prompt("Ingresa un numero entre el 1 y el 7 y te dire que dia de la semana es.....");

    var weekDay = ["", "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    if (day <= 0) {
        alert("Solo acepto numeros positivos mayores a 0, intenta de nuevo");
        window.location.reload();
    }

    else if (day > 7) {
        alert("La semana tiene solo 7 dias, intenta de nuevo");
        window.location.reload();
    }

    else if (isNaN(day)) {
        alert("Solo acepto numeros enteros");
        window.location.reload();
    }

    else {

        day = weekDay[day];
        document.write(day);

    }

}

diaSemana();
