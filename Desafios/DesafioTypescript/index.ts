/*--------CAJERO AUTOMATICO-----------*/

class Usuario {
    private nombre: String;
    private apellido: String;
    private dni: number;

    constructor(nombre: String, apellido: String, dni: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    getDatos() {
        return `Nombre: ${this.getNombre()} - Apellido: ${this.getApellido} - DNI: ${this.getDni}`;
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
    
    
}

class CuentaBanco implements SaldoCuenta {
    private movimientos: String[];
    private saldo: number;
    private usuario: Usuario;

    constructor(usuario: Usuario) {
        this.movimientos = [];
        this.saldo = 0;
        this.usuario = usuario;
    }

    getCliente() {
        return this.usuario;
    }

    consultarSaldo() {
        console.log(`Saldo ${this.getCliente().getNombre()} ${this.getCliente().getApellido()}: $${this.saldo}`);
    }
    cargarSaldo(importe: number) {
        this.saldo += importe;
    }

    transferencia(importe: number, cuentaUsuarioReceptor: CuentaBanco) {
        this.saldo -= importe;
        this.recibirTransferencia(importe, cuentaUsuarioReceptor);
        console.log(`El usuario ${this.usuario.getNombre()} ${this.usuario.getApellido()} le transfirio $${importe} al usuario ${cuentaUsuarioReceptor.getCliente().getNombre()} ${cuentaUsuarioReceptor.getCliente().getApellido()}`);
        console.log(`Tu saldo restante es $${this.saldo}`);
        this.agregarMovimiento(`Salida: $${importe}`);
    }

    recibirTransferencia(importe: number, cuentaUsuarioReceptor: CuentaBanco) {
        cuentaUsuarioReceptor.cargarSaldo(importe);
        cuentaUsuarioReceptor.agregarMovimiento(`Entrada: $${importe}`);
    }

    agregarMovimiento(movimiento: String) {
        this.movimientos.push(movimiento);
    }

    verMovimientos() {
        let m = 0;
        console.log(`Movimientos de ${this.usuario.getNombre()} ${this.usuario.getApellido()}`);
        this.movimientos.forEach(movimiento => {
            m++;
            console.log(`${m}. ${movimiento}`);
        });
    }
}

interface SaldoCuenta {
    consultarSaldo();
    cargarSaldo(saldo: number);
}

let u1 = new Usuario("Leandro", "Liggerini", 11111111);
let u2 = new Usuario("Juan", "Perez", 22222222);
let cbu1 = new CuentaBanco(u1);
let cbu2 = new CuentaBanco(u2);

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

