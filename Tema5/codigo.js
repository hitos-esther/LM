console.log("Esto es un mensaje de prueba");

var a=4;//declaración de variables globales
let b=8;//declaración de variables locales
console.log(2+6);
console.log(2+2.3);
console.log(a+b);
a="hola";
console.log(a+3);

var nombre="Pepe ";
var edad = 8;
const TOPE = 35;
//indicar si "nombre" es mayor de edad o no
if(edad>=TOPE){
    document.write("<h1>"+nombre +"es mayor de edad </h1>");
}
else{
    document.write(nombre + "es menor de edad");
}
