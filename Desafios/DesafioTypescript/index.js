var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.saldo = 0;
    }
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.getApellido = function () {
        return this.apellido;
    };
    Usuario.prototype.getDni = function () {
        return this.dni;
    };
    Usuario.prototype.transferirDinero = function (importe, usuario) {
        this.saldo -= importe;
        this.recibirDinero(importe, usuario);
        console.log("El usuario " + this.getNombre() + " " + this.getApellido() + " le transfirio $" + importe + " al usuario " + usuario.getNombre() + " " + usuario.getApellido());
        console.log("Tu saldo restante es $" + this.saldo);
    };
    Usuario.prototype.recibirDinero = function (importe, usuario) {
        usuario.cargarSaldo(importe);
    };
    Usuario.prototype.consultarSaldo = function () {
        console.log(this.saldo);
    };
    Usuario.prototype.cargarSaldo = function (importe) {
        this.saldo += importe;
    };
    return Usuario;
}());
var u1 = new Usuario("Leandro", "Liggerini", 11111111);
var u2 = new Usuario("Juan", "Perez", 22222222);
u1.cargarSaldo(1000);
u2.cargarSaldo(500);
u1.consultarSaldo();
u2.consultarSaldo();
console.log(" ");
console.log("------------------------------------------");
console.log(" ");
u1.transferirDinero(125, u2);
u1.consultarSaldo();
u2.consultarSaldo();
