function messi(cantidad) {
    cantidad = prompt("Cuantas veces es mejor Messi que CR7?");

    if (cantidad <= 0) {
        alert("Vamoooo! Minimo es 1000 veces mejor que CR7!");
        window.location.reload();
    }

    else if (cantidad > 10) {
        alert("Tampoco te pases!! Respeta al comandante! Al Bichooooo, Siuuuuuuuuu!!!!");

        window.location.reload()
    }

    else {
        for (i = 0; i < cantidad; i++) {
            document.write("MESSI ES EL GOAT!" + "<br/>");
        }
    }
}

messi();
