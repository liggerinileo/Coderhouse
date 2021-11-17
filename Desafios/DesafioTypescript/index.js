/*--------CAJERO AUTOMATICO-----------*/
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
    Usuario.prototype.getDatos = function () {
        return "Nombre: " + this.getNombre() + " - Apellido: " + this.getApellido + " - DNI: " + this.getDni;
    };
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.getApellido = function () {
        return this.apellido;
    };
    Usuario.prototype.getDni = function () {
        return this.dni;
    };
    return Usuario;
}());
var CuentaBanco = /** @class */ (function () {
    function CuentaBanco(usuario) {
        this.movimientos = [];
        this.saldo = 0;
        this.usuario = usuario;
    }
    CuentaBanco.prototype.getCliente = function () {
        return this.usuario;
    };
    CuentaBanco.prototype.consultarSaldo = function () {
        console.log("Saldo " + this.getCliente().getNombre() + " " + this.getCliente().getApellido() + ": $" + this.saldo);
    };
    CuentaBanco.prototype.cargarSaldo = function (importe) {
        this.saldo += importe;
    };
    CuentaBanco.prototype.transferencia = function (importe, cuentaUsuarioReceptor) {
        this.saldo -= importe;
        this.recibirTransferencia(importe, cuentaUsuarioReceptor);
        console.log("El usuario " + this.usuario.getNombre() + " " + this.usuario.getApellido() + " le transfirio $" + importe + " al usuario " + cuentaUsuarioReceptor.getCliente().getNombre() + " " + cuentaUsuarioReceptor.getCliente().getApellido());
        console.log("Tu saldo restante es $" + this.saldo);
        this.agregarMovimiento("Salida: $" + importe);
    };
    CuentaBanco.prototype.recibirTransferencia = function (importe, cuentaUsuarioReceptor) {
        cuentaUsuarioReceptor.cargarSaldo(importe);
        cuentaUsuarioReceptor.agregarMovimiento("Entrada: $" + importe);
    };
    CuentaBanco.prototype.agregarMovimiento = function (movimiento) {
        this.movimientos.push(movimiento);
    };
    CuentaBanco.prototype.verMovimientos = function () {
        var m = 0;
        console.log("Movimientos de " + this.usuario.getNombre() + " " + this.usuario.getApellido());
        this.movimientos.forEach(function (movimiento) {
            m++;
            console.log(m + ". " + movimiento);
        });
    };
    return CuentaBanco;
}());
var u1 = new Usuario("Leandro", "Liggerini", 11111111);
var u2 = new Usuario("Juan", "Perez", 22222222);
var cbu1 = new CuentaBanco(u1);
var cbu2 = new CuentaBanco(u2);
cbu1.cargarSaldo(1000);
cbu2.cargarSaldo(500);
cbu1.consultarSaldo();
cbu2.consultarSaldo();
console.log(" ");
console.log("------------------------------------------");
console.log(" ");
cbu1.transferencia(125, cbu2);
console.log(" ");
console.log("------------------------------------------");
console.log(" ");
cbu1.consultarSaldo();
cbu2.consultarSaldo();
console.log(" ");
console.log("------------------------------------------");
console.log(" ");
cbu1.verMovimientos();
cbu2.verMovimientos();
