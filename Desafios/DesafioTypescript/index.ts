/*--------CAJERO AUTOMATICO-----------*/

class Usuario implements SaldoUsuario {
    private nombre: String;
    private apellido: String;
    private dni: number;
    private saldo: number;
    private movimientos: String[];

    constructor(nombre: String, apellido: String, dni: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.saldo = 0;
        this.movimientos = [];
    }

    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getDni() {
        return this.dni;
    }

    transferirDinero(importe: number, usuario: Usuario) {
        this.saldo -= importe;
        this.recibirDinero(importe, usuario);
        console.log(`El usuario ${this.getNombre()} ${this.getApellido()} le transfirio $${importe} al usuario ${usuario.getNombre()} ${usuario.getApellido()}`);
        console.log(`Tu saldo restante es $${this.saldo}`);
        this.agregarMovimiento(`Salida: $${importe}`);
    }

    agregarMovimiento(movimiento: String) {
        this.movimientos.push(movimiento);
    }

    recibirDinero(importe: number, usuario: Usuario) {
        usuario.cargarSaldo(importe);
        usuario.agregarMovimiento(`Entrada: $${importe}`);
    }

    verMovimientos() {
        let m = 0;
        console.log(`Movimientos de ${this.getNombre()} ${this.getApellido()}`);
        this.movimientos.forEach(movimiento => {
            m++;
            console.log(`${m}. ${movimiento}`);
        });
        console.log("--------------------------------");
    }
    
    consultarSaldo() {
        console.log(this.saldo);
    }
    cargarSaldo(importe: number) {
        this.saldo += importe;
    }
}

interface SaldoUsuario {
    consultarSaldo();
    cargarSaldo(saldo: number);
}

let u1 = new Usuario("Leandro", "Liggerini", 11111111);
let u2 = new Usuario("Juan", "Perez", 22222222);

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

u1.verMovimientos();
u2.verMovimientos();

