const {Banco} = require('./modulos/bancos');
const {Usuarios} = require('./modulos/usuarios');

const aylin = new Usuarios({_id: 1, nombre:'Aylin', pass:'123'});
const hcbs = new Banco({credenciales:aylin, saldo:600});

const araceli = new Usuarios({_id: 12, nombre:'Araceli', pass:'567'});
const hcbsara = new Banco({credenciales:araceli, saldo:600});

console.log(hcbs);
//abonar
hcbs.abonar({cantidad: 100});
//retirar
hcbs.retirar({cantidad: 200});
//consultar Saldo
console.log(hcbs.consultarSaldo());
//transferencia
hcbs.transferencia({user:hcbsara, cantidad: 300});
console.log(hcbsara.consultarSaldo);

