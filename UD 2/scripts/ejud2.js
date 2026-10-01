/* Ejercicio 1
Declara 6 variables a las que asignaremos los siguientes valores. 1357, 135.7, 135e7, 0b1010, 0o1357 y 0x1A57. Una vez creadas muestra por 
consola los valores almacenados y el tipo de dato que nos indica el 
operador typeof.*/

/*let numDecimal = 1357;
let numFlotante = 135.7;
let numExponencial = 135e7;
let numBinario = 0b1010;
let numOctal = 0o1357;
let numHexadecimal = 0x1A57;

console.log("numDecimal:", numDecimal, "->", typeof numDecimal);
console.log("numFlotante:", numFlotante, "->", typeof numFlotante);
console.log("numExponencial:", numExponencial, "->", typeof numExponencial);
console.log("numBinario:", numBinario, "->", typeof numBinario);
console.log("numOctal:", numOctal, "->", typeof numOctal);
console.log("numHexadecimal:", numHexadecimal, "->", typeof numHexadecimal);*/

/* ---------- Ejercicio 2 ----------
   Pide un número con prompt() y guárdalo como Number
------------------------------------------------- */

let numeroUsuario =  parseInt(prompt("Introduce un número:"));//otra opcion sería parseInt() o parseFloat() dependiendo del tipo de número que se quiera obtener
console.log("Valor:", numeroUsuario, "- Tipo:", typeof numeroUsuario);

/*Pide al usuario dos números con prompt() sin convertirlos. 
Muestra por consola el resultado de sumarlos con el operador +. A continuación, convierte ambos valores a Number y vuelve a sumarlos,
 mostrando ahora el resultado correcto.*/

 let num1Texto = prompt("Introduce el primer número:");
let num2Texto = prompt("Introduce el segundo número:");

console.log("Suma sin convertir (concatenación):", num1Texto + num2Texto);

let num1 = Number(num1Texto);
let num2 = Number(num2Texto);

console.log("Suma convirtiendo a Number:", num1 + num2);

/*Ejercicio 4
Pide al usuario que te indique su nombre, apellidos ,  edad y un número del 1 al 10. Almacena cada dato en una variable diferente.  A continuación muestra la siguiente información.
Por consola una frase que incluya su nombre , apellidos y la edad.
En el documento html incluye con formato h3 la misma información.
En un alert muestra la siguiente información “Dentro de número años tendras x años”. Ayuda: usa los backticks para crear un template literal que te permita hacer este ejercicio*/
let nombre = prompt("Introduce tu nombre:");
let apellidos = prompt("Introduce tus apellidos:");
let edad = Number(prompt("Introduce tu edad:"));
let anyosFuturo = Number(prompt("Introduce un número del 1 al 10:"));

console.log(`Nombre: ${nombre}, Apellidos: ${apellidos}, Edad: ${edad}`);
document.write(`<h3>Nombre: ${nombre}, Apellidos: ${apellidos}, Edad: ${edad}</h3>`);
alert(`Dentro de ${anyosFuturo} años tendrás ${edad + anyosFuturo} años`);

/* Ejercicio 5
Pide al usuario su nombre, una afición y si le gusta programar usando confirm(). 
Muestra en un párrafo del documento un texto que combine los tres datos 
usando un único template literal.*/

let nombreUsuario = parseInt(prompt("¿Cómo te llamas?"));
let aficion = prompt("¿Cuál es tu afición favorita?");
let leGustaProgramar = confirm("¿Te gusta programar?");

document.write(`<p>${nombreUsuario} tiene como afición ${aficion} y es ${leGustaProgramar} que le guste programar.</p>`);

/*Ejercicio 6Pide al usuario un string, 
Muestra en el documento la posición que ocupa la primera “a”*/

let textoBuscarA = prompt("Introduce un texto:");
let posicionA = textoBuscarA.indexOf("a");

document.write(`<p>La primera "a" está en la posición: ${posicionA}</p>`);
/* Ejercicio 7 
Pide al usuario un string con espacios de más al principio o al final.
 Muestra por consola: el string sin esos espacios, 
el mismo string en mayúsculas y los 3 primeros caracteres.*/

let textoConEspacios = prompt("Introduce un texto (con espacios de más si quieres):");

console.log(`Sin espacios: ${textoConEspacios.trim()}`);
console.log("En mayúsculas:", textoConEspacios.toUpperCase());
console.log("3 primeros caracteres:", textoConEspacios.trim().slice(0, 3));

/*Pide al usuario tres strings, debes sustituir en el primer string la primera ocurrencia del segundo string por el contenido del tercer string. ejemplo
string 1 “Hola caracola”
string 2 “cara”
string 3 “era”
resultado a mostrar con un alert “Hola eracola”.*/

let cadenaOriginal = prompt('Introduce la cadena original (ej: "Hola caracola"):');
let cadenaBuscar = prompt('Introduce la cadena a buscar (ej: "cara"):');
let cadenaSustituir = prompt('Introduce la cadena de sustitución (ej: "era"):');

let resultadoUnaVez = cadenaOriginal.replace(cadenaBuscar, cadenaSustituir);
alert(resultadoUnaVez);

/* ---------- Ejercicio 9 ----------
   Igual que el anterior pero sustituyendo todas las ocurrencias
------------------------------------------------- */
let cadenaOriginal2 = prompt('Introduce la cadena original:');
let cadenaBuscar2 = prompt('Introduce la cadena a buscar:');
let cadenaSustituir2 = prompt('Introduce la cadena de sustitución:');

let resultadoTodas = cadenaOriginal2.replaceAll(cadenaBuscar2, cadenaSustituir2);
alert(resultadoTodas);

/* ---------- Ejercicio 10 ----------
   Número de veces que string2 está contenido en string1
------------------------------------------------- */
let cadenaPrincipal = prompt("Introduce el primer texto:");
let cadenaBuscada = prompt("Introduce el texto a buscar:");

let numeroOcurrencias = cadenaPrincipal.split(cadenaBuscada).length - 1;

console.log(`"${cadenaBuscada}" aparece ${numeroOcurrencias} veces en "${cadenaPrincipal}"`);