//coercion implicita: cuando el sistema cambia el valor por nosotros
var a = 4 + "7";
undefined
typeof a
"string"
a
"47"

//coercion explicita: cuando nosotros obligamos el cambio del valor
var a = 20;
var b = a + "";

console.log(b);

typeof b
"string"
var c = String(a);  //aquí estamos haciendo el cambio nosotros con String

typeof c
"string"

console.log(c);

var d = Number(c); //aquí lo estamos haciendo numero

typeof d
"number"