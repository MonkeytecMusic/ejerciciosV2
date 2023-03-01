var Ejercicio3 = /** @class */ (function () {
    function Ejercicio3() {
    }
    Ejercicio3.prototype.capturaDuracionLlamada = function () {
        var duracion;
        duracion = Number(prompt("Ingresa los minutos de la llamada"));
        if (duracion <= 5) {
            this.cincoMinutos(duracion);
        }
        else if (duracion >= 6 && duracion <= 8) {
            this.ochoMinutos(duracion);
        }
        else if (duracion >= 9 && duracion <= 10) {
            this.diezMinutos(duracion);
        }
        else if (duracion > 10) {
            this.masDeDiezMinutos(duracion);
        }
    };
    Ejercicio3.prototype.cincoMinutos = function (duracion) {
        alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal $1.00");
        this.horarioLlamada(1, duracion);
    };
    Ejercicio3.prototype.ochoMinutos = function (duracion) {
        var total;
        total = 1 + 0.80;
        alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + total);
        this.horarioLlamada(total, duracion);
    };
    Ejercicio3.prototype.diezMinutos = function (duracion) {
        var total;
        total = 1 + 0.80 + 0.70;
        alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + total);
        this.horarioLlamada(total, duracion);
    };
    Ejercicio3.prototype.masDeDiezMinutos = function (duracion) {
        var cobroPorMinutoExtra;
        var total;
        cobroPorMinutoExtra = duracion - 10;
        total = (cobroPorMinutoExtra * 0.50) + 2.5;
        alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + total);
        this.horarioLlamada(total, duracion);
    };
    Ejercicio3.prototype.horarioLlamada = function (total, duracion) {
        var dia;
        var turno;
        var totalConImpuesto;
        dia = prompt("Ingresa el dia de la llamada");
        if (dia == "domingo") {
            totalConImpuesto = total + (total * (3 / 100));
            alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + totalConImpuesto);
        }
        else {
            turno = prompt("Ingresa el turno");
            if (turno == "matutino") {
                totalConImpuesto = total + (total * (15 / 100));
                alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + totalConImpuesto);
            }
            else if (turno == "vespertino") {
                totalConImpuesto = total + (total * (10 / 100));
                alert("RECIBO LLAMADA\nDuracion: " + duracion + " Minutos\nTotal " + totalConImpuesto);
            }
        }
    };
    return Ejercicio3;
}());
var objeto = new Ejercicio3();
objeto.capturaDuracionLlamada();
