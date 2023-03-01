var Ejercicio2 = /** @class */ (function () {
    function Ejercicio2() {
    }
    Ejercicio2.prototype.estudiantes = function () {
        var cantidadEstudiantes;
        var totalPago;
        var costoPorAlumno;
        cantidadEstudiantes = Number(prompt("Ingresa la cantidad de estudiantes"));
        if (cantidadEstudiantes > 99) {
            totalPago = cantidadEstudiantes * 65;
            alert("Cantidad de pasajeros " + cantidadEstudiantes + "\nPago " + totalPago);
        }
        else if (cantidadEstudiantes < 100 && cantidadEstudiantes > 49) {
            totalPago = cantidadEstudiantes * 70;
            alert("Cantidad de pasajeros " + cantidadEstudiantes + "\nPago " + totalPago);
        }
        else if (cantidadEstudiantes < 50 && cantidadEstudiantes > 29) {
            totalPago = cantidadEstudiantes * 95;
            alert("Cantidad de pasajeros " + cantidadEstudiantes + "\nPago " + totalPago);
        }
        else if (cantidadEstudiantes < 30 && cantidadEstudiantes > 0) {
            costoPorAlumno = 4000 / cantidadEstudiantes;
            alert("Cantidad de pasajeros " + cantidadEstudiantes + "\nPago por alumno: " + costoPorAlumno);
        }
        else {
            alert("SE CANCELA EL VIAJE  A CHALMA :(");
        }
    };
    return Ejercicio2;
}());
var objeto = new Ejercicio2();
objeto.estudiantes();
