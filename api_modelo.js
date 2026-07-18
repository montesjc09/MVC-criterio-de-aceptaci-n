const CLAVE="clientes";

export function obtenerClientes(){

let datos=localStorage.getItem(CLAVE);

if(datos==null){

localStorage.setItem(CLAVE,JSON.stringify([]));

return [];

}

return JSON.parse(datos);

}

export function guardarCliente(cliente){

let clientes=obtenerClientes();

let existe=clientes.find(c=>

c.nombre.toLowerCase()==cliente.nombre.toLowerCase()

&&

c.apellido.toLowerCase()==cliente.apellido.toLowerCase()

);

if(existe){

return false;

}

clientes.push(cliente);

localStorage.setItem(CLAVE,JSON.stringify(clientes));

return true;

}