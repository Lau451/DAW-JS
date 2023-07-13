//6A
function suma(a, b) {
  return a + b;
}
var resultado1 = suma(1, 3);
var resultado2 = suma(-4, -4);
var resultado3 = suma(1, "1");
var resultado4 = suma(1, true);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

//6B
function sumaVerificada(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parametros tiene un error");
    return NaN;
  }
}
var resultado = sumaVerificada("s", 3);
console.log(resultado);

//6C
function validateInteger(a) {
  if (Number.isInteger(a)) {
    return console.log("Verdadero");
  } else console.log("Falso");
}
var numero = validateInteger(4.5);
/**/
//6D
