var Ejercicio1Clase = /** @class */ (function () {
    function Ejercicio1Clase() {
    }
    Ejercicio1Clase.prototype.precioInicial = function () {
        var precioInicial;
        precioInicial = Number(prompt("Ingresa el precio inicial de la uva"));
        this.tipoUva(precioInicial);
    };
    Ejercicio1Clase.prototype.tipoUva = function (precioInicial) {
        var tipoUva;
        tipoUva = prompt("Ingresa el tipo de uva (A o B)");
        if (tipoUva == "A" || tipoUva == "a") {
            this.tamanoUva(tipoUva, precioInicial);
        }
        else if (tipoUva == "B" || tipoUva == "b") {
            this.tamanoUva(tipoUva, precioInicial);
        }
        else {
            this.tipoUva(precioInicial);
        }
    };
    Ejercicio1Clase.prototype.tamanoUva = function (tipoUva, precioInicial) {
        var tamanoUva;
        tamanoUva = Number(prompt("Ingresa el tamano de uva (1 o 2)"));
        if (tamanoUva == 1) {
            this.operaciones(tipoUva, tamanoUva, precioInicial);
        }
        else if (tamanoUva == 2) {
            this.operaciones(tipoUva, tamanoUva, precioInicial);
        }
        else {
            this.tamanoUva(tipoUva, precioInicial);
        }
    };
    Ejercicio1Clase.prototype.operaciones = function (tipoUva, tamanoUva, precioInicial) {
        var cantidadUvas;
        var precioSinDescuento;
        var precioConDescuento;
        if (tipoUva == "A" || tipoUva == "a" && tamanoUva == 1) {
            cantidadUvas = Number(prompt("Cantidad de uvas"));
            precioSinDescuento = precioInicial * cantidadUvas;
            precioConDescuento = (precioInicial + 0.20) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        }
        else if (tipoUva == "A" || tipoUva == "a" && tamanoUva == 2) {
            cantidadUvas = Number(prompt("Cantidad de uvas"));
            precioSinDescuento = precioInicial * cantidadUvas;
            precioConDescuento = (precioInicial + 0.30) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        }
        else if (tipoUva == "B" || tipoUva == "b" && tamanoUva == 1) {
            cantidadUvas = Number(prompt("Cantidad de uvas"));
            precioSinDescuento = precioInicial * cantidadUvas;
            precioConDescuento = (precioInicial - 0.30) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        }
        else if (tipoUva == "B" || tipoUva == "b" && tamanoUva == 2) {
            cantidadUvas = Number(prompt("Cantidad de uvas"));
            precioSinDescuento = precioInicial * cantidadUvas;
            precioConDescuento = (precioInicial - 0.50) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        }
    };
    return Ejercicio1Clase;
}());
var objetoClase = new Ejercicio1Clase();
objetoClase.precioInicial();
