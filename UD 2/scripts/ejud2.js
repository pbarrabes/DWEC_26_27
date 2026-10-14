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

/* let numeroUsuario =  parseInt(prompt("Introduce un número:"));//otra opcion sería parseInt() o parseFloat() dependiendo del tipo de número que se quiera obtener
console.log("Valor:", numeroUsuario, "- Tipo:", typeof numeroUsuario); */

/*Pide al usuario dos números con prompt() sin convertirlos. 
Muestra por consola el resultado de sumarlos con el operador +. A continuación, convierte ambos valores a Number y vuelve a sumarlos,
 mostrando ahora el resultado correcto.*/

/*  let num1Texto = prompt("Introduce el primer número:");
let num2Texto = prompt("Introduce el segundo número:");

console.log("Suma sin convertir (concatenación):", num1Texto + num2Texto);

let num1 = Number(num1Texto);
let num2 = Number(num2Texto);

console.log("Suma convirtiendo a Number:", num1 + num2); */

/*Ejercicio 4
Pide al usuario que te indique su nombre, apellidos ,  edad y un número del 1 al 10. Almacena cada dato en una variable diferente.  A continuación muestra la siguiente información.
Por consola una frase que incluya su nombre , apellidos y la edad.
En el documento html incluye con formato h3 la misma información.
En un alert muestra la siguiente información “Dentro de número años tendras x años”. Ayuda: usa los backticks para crear un template literal que te permita hacer este ejercicio*/
/* let nombre = prompt("Introduce tu nombre:");
let apellidos = prompt("Introduce tus apellidos:");
let edad = Number(prompt("Introduce tu edad:"));
let anyosFuturo = Number(prompt("Introduce un número del 1 al 10:"));

console.log(`Nombre: ${nombre}, Apellidos: ${apellidos}, Edad: ${edad}`);
document.write(`<h3>Nombre: ${nombre}, Apellidos: ${apellidos}, Edad: ${edad}</h3>`);
alert(`Dentro de ${anyosFuturo} años tendrás ${edad + anyosFuturo} años`);
 */
/* Ejercicio 5
Pide al usuario su nombre, una afición y si le gusta programar usando confirm(). 
Muestra en un párrafo del documento un texto que combine los tres datos 
usando un único template literal.*/

/* let nombreUsuario = parseInt(prompt("¿Cómo te llamas?"));
let aficion = prompt("¿Cuál es tu afición favorita?");
let leGustaProgramar = confirm("¿Te gusta programar?");

document.write(`<p>${nombreUsuario} tiene como afición ${aficion} y es ${leGustaProgramar} que le guste programar.</p>`);
 */
/*Ejercicio 6Pide al usuario un string, 
Muestra en el documento la posición que ocupa la primera “a”*/
/* 
let textoBuscarA = prompt("Introduce un texto:");
let posicionA = textoBuscarA.indexOf("a");

document.write(`<p>La primera "a" está en la posición: ${posicionA}</p>`); */
/* Ejercicio 7 
Pide al usuario un string con espacios de más al principio o al final.
 Muestra por consola: el string sin esos espacios, 
el mismo string en mayúsculas y los 3 primeros caracteres.*/

/* let textoConEspacios = prompt("Introduce un texto (con espacios de más si quieres):");

console.log(`Sin espacios: ${textoConEspacios.trim()}`);
console.log("En mayúsculas:", textoConEspacios.toUpperCase());
console.log("3 primeros caracteres:", textoConEspacios.trim().slice(0, 3)); */

/*Pide al usuario tres strings, debes sustituir en el primer string la primera ocurrencia del segundo string por el contenido del tercer string. ejemplo
string 1 “Hola caracola”
string 2 “cara”
string 3 “era”
resultado a mostrar con un alert “Hola eracola”.*/

/*let cadenaOriginal = prompt('Introduce la cadena original (ej: "Hola caracola"):');
let cadenaBuscar = prompt('Introduce la cadena a buscar (ej: "cara"):');
let cadenaSustituir = prompt('Introduce la cadena de sustitución (ej: "era"):');

let resultadoUnaVez = cadenaOriginal.replace(cadenaBuscar, cadenaSustituir);
alert(resultadoUnaVez);

/* ---------- Ejercicio 9 ----------
   Igual que el anterior pero sustituyendo todas las ocurrencias
------------------------------------------------- */
/* let cadenaOriginal2 = prompt('Introduce la cadena original:');
let cadenaBuscar2 = prompt('Introduce la cadena a buscar:');
let cadenaSustituir2 = prompt('Introduce la cadena de sustitución:');

let resultadoTodas = cadenaOriginal2.replaceAll(cadenaBuscar2, cadenaSustituir2);
alert(resultadoTodas); */

/* ---------- Ejercicio 10 ----------
   Número de veces que string2 está contenido en string1
------------------------------------------------- */
/* let cadenaPrincipal = prompt("Introduce el primer texto:");
let cadenaBuscada = prompt("Introduce el texto a buscar:");

let numeroOcurrencias = cadenaPrincipal.split(cadenaBuscada).length - 1;

console.log(`"${cadenaBuscada}" aparece ${numeroOcurrencias} veces en "${cadenaPrincipal}"`); */

/*Ejercicio 11 ver javascript.info/operators#tasks
Solucion. 
La suma con una cadena "" + 1 convierte 1 a un string: "" + 1 = "1", y luego tenemos "1" + 0, la misma regla se aplica.
La resta - (como la mayoría de las operaciones matemáticas) sólo funciona con números, convierte una cadena vacía "" a 0.
La suma con una cadena concatena el número 5 a la cadena.
La resta siempre convierte a números, por lo tanto hace de " -9 " un número -9 (ignorando los espacios que lo rodean).
null se convierte en 0 después de la conversión numérica.
undefined se convierte en NaN después de la conversión numérica.
Al convertir una cadena en número, se ignoran los espacios en blanco al principio y al final (espacio común " ", tabulador \t, salto de línea \n, etc.). Si la cadena contiene solo ellos, queda vacía y se con∫

/* Ejercicio 12 ver javascript.info/operators#tasks

simplemente convertir a numero con Number o parseInt. */

/* Ejercicio 13
¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ? */

// el resultado es : a=2,b=2,c=2 d=1. Como ya comente en clase lo importante es ver la precedencia del operador ++ segun donde este puesto
//let a ="Pepito";
//console.log(a==NaN) //da false Mon dieu. Hay que utilizar isNaN()
//console.log(isNaN(a)); 
//isNaN(a)?error:accion;

/*  ejercicio 15 
Escribe en un comentario el resultado que esperas de cada expresión y el tipo de dato del resultado. Después compruébalo por consola usando typeof.
"5" + 3
"5" - 3
"5" * "2"
true + 1
"3" + 4 + 5
3 + 4 + "5" */

// Similar al anterior

/* Ejercicio 16 Dado el siguiente código, muestra por consola el resultado de cantidad || 10 y de cantidad ?? 10 para cada una de las variables. ¿En qué casos dan resultados distintos? Si el valor 0 fuera una cantidad válida, ¿qué operador usarías? Razona la respuesta.
let cantidad1;
let cantidad2 = null;
let cantidad3 = 0;
let cantidad4 = "";
let cantidad5 = 5; */

/*let cantidad1;
let cantidad2 = null;
let cantidad3 = 0;
let cantidad4 = "";
let cantidad5 = 5;

console.log(cantidad1 || 10, cantidad1 ?? 10); // 10 10
console.log(cantidad2 || 10, cantidad2 ?? 10); // 10 10
console.log(cantidad3 || 10, cantidad3 ?? 10); // 10 0
console.log(cantidad4 || 10, cantidad4 ?? 10); // 10 ""
console.log(cantidad5 || 10, cantidad5 ?? 10); // 5 5 */

/* Difieren con 0 y con "". || devuelve el valor por defecto con cualquier valor falsy; ?? solo con null o undefined.
 Si 0 es una cantidad válida hay que usar ??. */

/* Ejercicio 17  Crea un programa que pida al usuario un número entero de minutos y muestre cuántas horas y minutos son. 
 Por ejemplo, para 135 debe mostrar "2 horas y 15 minutos". Solo puedes usar los operadores aritméticos. 
 Antes de programarlo, comprueba por consola cuánto vale 135 / 60. ¿Qué diferencia hay con Java? */
/*let minutos = Number(prompt("Introduce un número de minutos"));
let resto = minutos % 60;
let horas = (minutos - resto) / 60;
alert(`${horas} horas y ${resto} minutos`); */

/* Ejercicio 18 Escribe en un comentario qué crees que mostrará cada console.log. Después ejecútalo. Si alguna línea produce un error, 
explica por qué y coméntala para que el resto del código pueda ejecutarse.*/
	
/* console.log(a);
var a = 5;
 
if (true) {
  		var x = 1;
  		let y = 2;
}
console.log(x);
console.log(y);
 
for (var i = 0; i < 3; i++) {

}
console.log(i);
 
for (let j = 0; j < 3; j++) {
    
}
console.log(j); */

//FALTANNNN

/*Ejercicio 28:
Escribe una función que acepte un número indeterminado de argumentos numéricos y devuelva su suma.
 Si no recibe ningún argumento, debe devolver 0 (compruébalo con una llamada sin argumentos). 
 Escribe la función de las tres formas vistas en clase:
1. suma1: declaración tradicional.
2. suma2: función como expresión.
3. suma3: función flecha.*/

/* 
function suma1(a=0,b,...num){

   let suma=a+b;
   for(let i=0;i<num.length;i++){
      suma+=num[i];
   }
   return suma;
}

const suma2= function(a=0,b,...num){
    let suma=a+b;
   for(let i=0;i<num.length;i++){
      suma+=num[i];
   }
   return suma;
}

const suma3 = (a=0,b,...num)=>{
    let suma=a+b;
   for(let i=0;i<num.length;i++){
      suma+=num[i];
   }
   return suma;
}
console.log(suma1(2,3,5));
console.log(suma2(2,3,5));
console.log(suma1); */

/* Ejercicio 29 */

const suma= (a,b)=> a+b;
const multiplicacion =(a,b)=> a*b;

function operacionesEncadenadas(a, b, op1, op2, mostrar){
   let result1=op1(a,b);
   let result2=op2(result1,b);
   mostrar(result1,result2);
}

operacionesEncadenadas(3, 4, suma, multiplicar, (r1, r2) => console.log(r1,r2));
operacionesEncadenadas(3,6,suma,(x,y)=>y==0?"":x/y,(r1, r2) => console.log(r1,r2))
