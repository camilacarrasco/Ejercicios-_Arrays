//imprimiendo posiciones Pares
var numero = [1,"a","b","vale",5, "cami", 88, "aury", 42, 69];
for(var i = 1; i <= 9; i = i+2){
	posiciones_pares = console.log(numero[i]);

//calcular el dni ,pedir un numero y una letra
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 
var numero = prompt("Introduce tu número de DNI (sin la letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
letra = letra.toUpperCase();
 
if(numero < 0 || numero > 99999999) {
  alert("El número proporciona cdo no es válido");
}
else {
  var letraCalculada = letras[numero % 23];
  if(letraCalculada != letra) {
    alert("La letra o el número proporcionados no son correctos");
  }
  else {
    alert("El número de DNI y su letra son correctos");
  }
}