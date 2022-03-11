function diaSemana() {
    var day = prompt("Ingresa un numero entre el 1 y el 7 y te dire que dia de la semana es.....");


    switch (day) {
        case '1':

            document.write("Domingo");

            break;

        case '2':

            document.write("Lunes");

            break;

        case '3':

            document.write("Martes");

            break;

        case '4':

            document.write("Miercoles");

            break;

        case '5':

            document.write("Jueves");

            break;

        case '6':

            document.write("Viernes");

            break;

        case '7':

            document.write("Sabado");

            break;


        default:

            alert("La semana tiene solo 7 dias, intenta de nuevo");
            window.location.reload();

            break;
    }
}

diaSemana();
