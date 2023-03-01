class Ejercicio3{
    public capturaDuracionLlamada(){
        let duracion:number;
        duracion = Number(prompt("Ingresa los minutos de la llamada")!);
        if (duracion <= 5) {
            this.cincoMinutos(duracion);
        } else if(duracion >= 6 && duracion <=8) {
            this.ochoMinutos(duracion);
        } else if(duracion >= 9 && duracion <= 10){
            this.diezMinutos(duracion);
        }else if(duracion > 10){
            this.masDeDiezMinutos(duracion);
        }

    }
    public cincoMinutos(duracion:number){
        alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal $1.00");
        this.horarioLlamada(1, duracion);
    }
    public ochoMinutos(duracion:number){
        let total:number;
        total = 1 + 0.80;
        alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + total);
        this.horarioLlamada(total,duracion);
    }
    public diezMinutos(duracion:number){
        let total:number;
        total = 1 + 0.80 +  0.70;
        alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + total);
        this.horarioLlamada(total,duracion);
    }
    public masDeDiezMinutos(duracion:number){
        let cobroPorMinutoExtra:number;
        let total:number;
        cobroPorMinutoExtra = duracion-10;
        total = (cobroPorMinutoExtra*0.50) + 2.5;
        alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + total);
        this.horarioLlamada(total,duracion);
    }
    public horarioLlamada(total:number,duracion:number){
        let dia:string;
        let turno:string;
        let totalConImpuesto:number;
        dia = prompt("Ingresa el dia de la llamada")!;
        if (dia =="domingo") {
            totalConImpuesto = total + (total*(3/100));
            alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + totalConImpuesto);
        }else{
            turno = prompt("Ingresa el turno")!;
            if (turno == "matutino") {
                totalConImpuesto = total + (total*(15/100));
                alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + totalConImpuesto);
            } else if(turno == "vespertino") {
                totalConImpuesto = total + (total*(10/100));
                alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + totalConImpuesto);
            }
        }
    }

}
let objeto = new Ejercicio3();
objeto.capturaDuracionLlamada();
