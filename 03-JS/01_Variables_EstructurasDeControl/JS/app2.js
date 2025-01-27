//veamos otro tipo de formas de crear variables de tipo constante. const.
//existen pocas diferencias entre let y const, cando hablamos de datos primitivos: en una variable con const su valor no puede ser reasignado, debe iniciarlizarse con un valor, nunca undefined, suele escribirse en UPPERCASE.

/* const precio */

const PRECIO = 20;
console.log(precio);

const mo = "pantalla 19pulgadas";
console.log(mo);

/* mo = "monitor 23 pulgadas"; no puede reasignarse */
console.log(mo);

//existen otras diferencias entre const y let especialmente cuando se trabaja con arrays y objetos, osea, con datos complejos. Mientras mantengan la estrucutura del contenido: Refencia, pueden sufrir modificiaciones en los valores. Recuerda las variabls con const, no se pueden reasignar, y tampoco peden iniciar sin un valor.
