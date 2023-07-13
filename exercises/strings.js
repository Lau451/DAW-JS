// EJERCICIO 2A:
var holaM = "hola buenas";
console.log(holaM.toUpperCase());

// EJERCICIO 2B:
var palabra1 = "Buenos dias";
var palabra2 = palabra1.substring(0, 5);
console.log(palabra2);

// EJERCICIO 2C:
var frase1 = "Buenas noches";
var frase2 = frase1.substring(10);
console.log(frase2);

// EJERCICIO 2D:
var nombre1 = "lucas";
var primeraLetra = nombre1.substring(0, 1);
var restoDelNombre = nombre1.substring(1, 5);
var nombreModificado =
  primeraLetra.toUpperCase() + restoDelNombre.toLowerCase();
console.log(nombreModificado);

// EJERCICIO 2E:
var oracion1 = "Buen dia";
var indiceEspacio = oracion1.indexOf(" ");
console.log(indiceEspacio);

// EJERCICIO 2F:
var palabralarga = "Hola Mundo";
var espacio = palabralarga.indexOf(" ");
var palabralarga1 = palabralarga.substring(0, espacio);
var palabralarga2 = palabralarga.substring(espacio + 1);

palabralarga3 =
  palabralarga1.substring(0, 1).toUpperCase() +
  palabralarga1.substring(1, 5).toLowerCase() +
  " " +
  palabralarga2.substring(0, 1).toUpperCase() +
  palabralarga2.substring(1, 7).toLowerCase();

console.log(palabralarga3);
