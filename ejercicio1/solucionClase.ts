class Ejercicio1Clase {
    public precioInicial() {
        let precioInicial: number;
        precioInicial = Number(prompt("Ingresa el precio inicial de la uva")!);
        this.tipoUva(precioInicial);
    }
    public tipoUva(precioInicial: number) {
        let tipoUva: string;
        tipoUva = prompt("Ingresa el tipo de uva (A o B)")!;
        if (tipoUva == "A" || tipoUva == "a") {
            this.tamanoUva(tipoUva, precioInicial);
        } else if (tipoUva == "B" || tipoUva == "b") {
            this.tamanoUva(tipoUva, precioInicial);
        } else {
            this.tipoUva(precioInicial);
        }

    }
    public tamanoUva(tipoUva: string, precioInicial: number) {
        let tamanoUva: number;
        tamanoUva = Number(prompt("Ingresa el tamano de uva (1 o 2)")!);
        if (tamanoUva == 1) {
            this.operaciones(tipoUva, tamanoUva, precioInicial);
        } else if (tamanoUva == 2) {
            this.operaciones(tipoUva, tamanoUva, precioInicial);
        } else {
            this.tamanoUva(tipoUva, precioInicial);
        }
    }
    public operaciones(tipoUva: string, tamanoUva: number, precioInicial: number) {
        let cantidadUvas: number;
        let precioSinDescuento: number;
        let precioConDescuento: number;
        if (tipoUva == "A" || tipoUva == "a" && tamanoUva == 1) {
            cantidadUvas = Number(prompt("Cantidad de uvas")!);
            precioSinDescuento = precioInicial * cantidadUvas;
            precioConDescuento = (precioInicial + 0.20) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        } else if (tipoUva == "A" || tipoUva == "a" && tamanoUva == 2) {
            cantidadUvas = Number(prompt("Cantidad de uvas")!);
            precioSinDescuento = precioInicial * cantidadUvas;
            precioConDescuento = (precioInicial + 0.30) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        } else if (tipoUva == "B" || tipoUva == "b" && tamanoUva == 1) {
            cantidadUvas = Number(prompt("Cantidad de uvas")!);
            precioSinDescuento = precioInicial * cantidadUvas;
            precioConDescuento = (precioInicial - 0.30) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        } else if (tipoUva == "B" || tipoUva == "b" && tamanoUva == 2) {
            cantidadUvas = Number(prompt("Cantidad de uvas")!);
            precioSinDescuento = precioInicial * cantidadUvas;
            precioConDescuento = (precioInicial - 0.50) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        }
    }
}

let objetoClase = new Ejercicio1Clase();
objetoClase.precioInicial();
