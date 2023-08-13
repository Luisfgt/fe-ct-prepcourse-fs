/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
 
   return (Object.keys(objeto).map((item) => [item, objeto[item]]))

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   // return String.keys(string).map((item) => {item: item})

   //1. crear un objeto vacío
   var objeto = {}
   //2. Recorrer el parámetro "string" 
   for (var i = 0; i < string.length ; i++) {
      //2.1 Si la propiedad del caracter existe en el objeto
      if (Object.hasOwn(objeto, string.charAt(i))) {
         //2.1.1 aumento el valor de la propiedad en 1
         objeto[string.charAt(i)] += 1
      }
      //2.2 caso contrario
      else {
         //2.2.1 crear la propiedad con el nombre del caracter y el valor 1
         objeto[string.charAt(i)] = 1
      }
   }
   
   //3. ordenar alfabeticamente
   
   var array = deObjetoAarray(objeto)
   array.sort((a, b) => {
      if (a[0] <= b[0]) {
         return -1
      }
      else {
         return 1
      }
   })
   // console.log(array);
   
   const arrayAObjeto = Object.fromEntries(array);
   console.log(arrayAObjeto);
   return arrayAObjeto;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código
   //0. Tener donde ingresar los valores de las variables
   var mayusculas = '';
   var minúsculas = '';
   //1. Recorrer el string
   for (var i = 0; i < string.length; i++) {
      //1.1 Si el caracter del string está es mayúsculas será acomodado delante
      if (string[i] === string[i].toUpperCase()) {
         mayusculas += string[i] 
      } 
      //1.2 caso contrario el string irá de último
      else {
         minúsculas += string[i]
      }
      
   }
   console.log(minúsculas + mayusculas);
return mayusculas + minúsculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var palabra = frase.split(' ');
   var fraseFinal = '';

   for (var i = 0; i < palabra.length; ++i) {
      var separarCadena = palabra[i].split('');
      var cadena = separarCadena.reverse();
      var invertida = cadena.join('');
      fraseFinal += (i === 0 ? '' : ' ') + invertida;
   }

   return fraseFinal;

   
}

function capicua(numero) {

   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numero = numero.toString();
   var numeroInverso = numero.split('').reverse().join('')
   var stringTamano = numeroInverso.length;
   var stringMitadSuperior = Math.ceil(stringTamano/2)
   console.log(numero.substring(0,stringMitadSuperior), numeroInverso.substring(0,stringMitadSuperior));
   return (numero.substring(0,stringMitadSuperior) === numeroInverso.substring(0,stringMitadSuperior)) ? "Es capicua" : "No es capicua" 



   //1.Convertir el número en un string
   var numeroToString = numero.toString();
   
   //2.Recorrer el string hasta la mitad más uno
   var stringTamano = numeroToString.length;
   var stringMitadSuperior = (stringTamano % 2) === 0 ? stringTamano / 2 : Math.floor(stringTamano/2) + 1  ;
   var stringMitadInferior = (stringTamano % 2) === 0 ? (stringTamano / 2) - 1 : Math.floor(stringTamano/2) - 1  ;
   console.log(stringMitadInferior, stringMitadSuperior);
   var primeraParte = '';
   var segundaParte = '';
   

   for (var i = 0  ; i < stringMitadSuperior; ++i) { //el 0 y el 1, el 0, el 1, el 2
      
         primeraParte += numeroToString.charAt(i);
   }
   
   //2.Recorrer el string hasta la mitad más uno alrevés
   for (var i = stringTamano - 1; i > stringMitadInferior; i--) { //3 y el 2, 4, 3, 2
      segundaParte += numeroToString.charAt(i);
   }
   //3. Si son iguales: Es capicula
   console.log(primeraParte, segundaParte);
   if (primeraParte === segundaParte) {
      return 'Es capicua'
   }
   
   //3.1 Si no: No es capicula
   return 'No es capicua'
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   //1. convertir el string en un array

   string = string.split('');

   var nuevoString = string.filter((stringNuevo) => {return stringNuevo != "a" && stringNuevo != "b" && stringNuevo != "c"})
   return nuevoString.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
