import Cliente from "./cliente_modelo.js";
import {guardarCliente} from "./api_modelo.js";

const formulario=document.getElementById("formulario");
const mensaje=document.getElementById("mensaje");

formulario.addEventListener("submit",function(e){

e.preventDefault();

let nombre=document.getElementById("nombre").value.trim();

let apellido=document.getElementById("apellido").value.trim();

let rol=document.getElementById("rol").value;

if(nombre.length<=3){

mensaje.innerHTML="El nombre debe tener más de 3 caracteres.";

return;

}

let cliente=new Cliente(nombre,apellido,rol);

let guardado=guardarCliente(cliente);

if(guardado){

mensaje.innerHTML="Hola "+nombre+", registro exitoso.";

formulario.reset();

}else{

mensaje.innerHTML="El cliente ya existe.";

}

});