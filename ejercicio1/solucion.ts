class Ejercicio1 {
    public tipoUva(){
        let tipoUva:string;
        tipoUva = prompt("Ingresa el tipo de uva (A o B)")!;
        if (tipoUva =="A" || tipoUva=="a") {
            this.tamanoUva(tipoUva);
        }else if(tipoUva =="B" || tipoUva=="b"){
            this.tamanoUva(tipoUva);
        }else{
            this.tipoUva();
        }
        
    }
    public tamanoUva(tipoUva:string){
        let tamanoUva:number;
        tamanoUva = Number(prompt("Ingresa el tamano de uva (1 o 2)")!);
        if (tamanoUva == 1) {
            this.operaciones(tipoUva,tamanoUva);
        }else if(tamanoUva == 2){
            this.operaciones(tipoUva,tamanoUva);
        }else{
            this.tamanoUva(tipoUva);
        }
    }
    public operaciones(tipoUva:string,tamanoUva:number){
        let precioInicial:number;
        let cantidadUvas:number;
        let precioSinDescuento:number;
        let precioConDescuento:number;
        if (tipoUva == "A" || tipoUva == "a" && tamanoUva == 1) {
            precioInicial = Number(prompt("Ingresa el precio inicial de la uva\nTipo: " + tipoUva +"\nTamano: " + tamanoUva)!);
            cantidadUvas = Number(prompt("Cantidad de uvas")!);
            precioSinDescuento = precioInicial*cantidadUvas;
            precioConDescuento = (precioInicial + 0.20) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        } else if(tipoUva == "A" || tipoUva == "a" && tamanoUva == 2){
            precioInicial = Number(prompt("Ingresa el precio inicial de la uva\nTipo: " + tipoUva +"\nTamano: " + tamanoUva)!);
            cantidadUvas = Number(prompt("Cantidad de uvas")!);
            precioSinDescuento = precioInicial*cantidadUvas;
            precioConDescuento = (precioInicial + 0.30) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        } else if (tipoUva == "B" || tipoUva == "b" && tamanoUva == 1) {
            precioInicial = Number(prompt("Ingresa el precio inicial de la uva\nTipo: " + tipoUva +"\nTamano: " + tamanoUva)!);
            cantidadUvas = Number(prompt("Cantidad de uvas")!);
            precioSinDescuento = precioInicial*cantidadUvas;
            precioConDescuento = (precioInicial - 0.30) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        } else if(tipoUva == "B" || tipoUva == "b" && tamanoUva == 2){
            precioInicial = Number(prompt("Ingresa el precio inicial de la uva\nTipo: " + tipoUva +"\nTamano: " + tamanoUva)!);
            cantidadUvas = Number(prompt("Cantidad de uvas")!);
            precioSinDescuento = precioInicial*cantidadUvas;
            precioConDescuento = (precioInicial - 0.50) * cantidadUvas;
            alert("PAGO\nPrecio sin descuento " + precioSinDescuento + "\nPrecion con descuento " + precioConDescuento);
        }
    }
}

let objeto = new Ejercicio1();
objeto.tipoUva();

