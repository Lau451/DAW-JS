//5A
var array = ["papa", "cebolla", "zapallo", "zanahoria", "lechuga"];
for (var index = 0; index < array.length; index++) {
  var element = array[index];
  alert(element);
}

//5B
var arrayMayu = ["papa", "cebolla", "zapallo", "zanahoria", "lechuga"];
for (var index = 0; index < arrayMayu.length; index++) {
  var element = arrayMayu[index];
  letra = element.substring(0, 1);
  resto = element.substring(1);
  alert(letra.toUpperCase() + resto);
}
//5C
var sentence = "";
for (var index = 0; index < array.length; index++) {
  sentence += array[index] + " ";
}
alert(sentence);

//5D
var arrayVacio = [];
for (let index = 0; index < 10; index++) {
  arrayVacio.push(index);
}
console.log(arrayVacio);
