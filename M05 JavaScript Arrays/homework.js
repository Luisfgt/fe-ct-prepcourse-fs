/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1]
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var arrayincrementa = array.map((elemento) => elemento + 1)
   return arrayincrementa
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);

   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);

   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var Separadas = palabras.join(' ');
   return Separadas
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento)) {
      return true;
   }
   else {
      return false;
   }

}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumatotal = 0;

   for (var i = 0; i < arrayOfNums.length; i++) {
      sumatotal += arrayOfNums[i]
   }
   return sumatotal;

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedio = 0;

   for (var i = 0; i < resultadosTest.length; i++) {
      promedio += resultadosTest[i]
   }
   var resultado = (promedio / resultadosTest.length);

   return resultado;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   var maximo = arrayOfNums[0]

   for (var i = 0; i < arrayOfNums.length; i++) {
      maximo = Math.max(maximo, arrayOfNums[i])
   }

   return maximo;



}
//[10, 0, 10]
//multiplicarArgumentos(0,1,2) => function multiplicarArgumentos(...argumentos)
//multiplicarArgumentos([0,1,2]) => function multiplicarArgumentos(argumentos)
function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   //1. Crear la variable resultado en 0
   var resultado = 0;

   //2.Preguntar si los argumentos tienen un tamaño mayor a 0 (length)
   if (arguments.length > 0) {
      //2.1 Recorrer el array en cada item
      for (var i = 0; i < arguments.length; i++) {
         //2.1.1 si i es igual a 0 (primer item)
         if (i === 0) {
            //2.1.1.1 resultado = item
            resultado = arguments[i];
         }
         //2.1.2 caso contrario
         else {
            //2.1.2.1 resultado = item * resultado
            resultado = arguments[i] * resultado
         }
         console.log(resultado, '------------------------------------------');
      }
   }

   //3. Retornar resultado
   return resultado
}
//1. Construir una función+
function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   //2. Crear la variable cantidad en 0
   var cantidad = 0;
   //2. Recorrer el array en cada item
   for (var i = 0; i < array.length; i++) {
      //2.2  Si el array es mayor a 18 cantidad aumenta en 1
      if (array[i] > 18) {
         cantidad += 1
      }
      //2.1 Si el array es menor a 18 la canridad queda igual

   }
   return cantidad
}

function diaDeLaSemana(numeroDeDia) {

   //1. Saco el resto el numerDeDia entre 7 para saber si el resto es 1 o 0
   var resto = numeroDeDia % 7;
   if (resto === 0 || resto === 1) {
      //1.1 retorno es fin de semana
      return "Es fin de semana"
   }
   //1.2 Caso contrario retorno es dia laboral
   else {
      return "Es dia laboral"
   }

   //return (numeroDeDia % 7 === 0 || numeroDeDia % 7 === 1) ? "Es fin de semana" : "Es dia laboral" SENIOR
   /**
    * if (numeroDeDia % 7 === 0 || numeroDeDia % 7 === 1) 
    *    return "Es fin de semana"
    * return "Es dia laboral"
    */

}


// Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
// Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
// si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
// Tu código:




//    //2. Recorrer el Array
//    for (var i = 1; i <= 7; i++) {
//       if (numeroDeDia === i) {

//          //2.1. Si el array es > a 5
//          if (i === 1 || i === 7) {
//             //2.1.1 día es igual a "Es fin de semana"
//             return 'Es fin de semana'
//          }
//          //2.2  caso contrario, es "día laboral"}
//       }

//    }

//    return 'Es dia laboral'
// }


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   //1.pasar el parámetro num a string
   // var numToString = num.toString();
   // //2. Recorrer el string y si tiene 9
   // if(numToString.charAt(0) === "9") {
   //    //2.1 retornar true
   //    return true;
   // }
   // return false
   //2.2 caso contrario retornar false

   // return num.toString().charAt(0) === "9" ? true : false;  
   return num.toString().charAt(0) === "9"; // Cristian Senior


   //    for (i = 0; i < num.lenght; i++) {
   //       if (i === 0 && (num[0] = 9)) {
   //          return true
   //       }
   //    }

   //    return false

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   //1.Recorrer array

   // for (i = 0; i<array.length ; i++){
   //    //2. Comparar array
   //    if(array[i] !== array[0]){
   //       return false
   //    }
   // }
   // return true

   // return array.every(currentItem => currentItem === array[0])
   // return !array.find(currentItem => currentItem !== array[0])
   return !array.some(currentItem => currentItem !== array[0]) //El .some me permite elegir del conjunto de array solo los ítems que sean diferentes de la posición 0

   //2.1 si los array son iguales retornar true 
   //2.2 caso contrario retornar false



}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   //1. 
   var respuesta = [];


   for (var i = 0; i < array.length; i++) {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
         respuesta.push(array[i])
      }

   }

   if (respuesta.includes("Enero", "Marzo", "Noviembre")) {

      return respuesta
   }

   return "No se encontraron los meses pedidos"

   // var noOk = "No se encontraron los meses pedidos";

   // return array.filter(currentMes => ["Enero","Marzo","Noviembre"].includes(currentMes)).includes("Enero","Marzo","Noviembre") ? array.filter(currentMes => ["Enero","Marzo","Noviembre"].includes(currentMes)) : noOk

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   // var tablaDel6 = [];
   // for(var i = 0; i <= 10; i++){
   //    var multi = i * 6
   //    tablaDel6.push(multi)
   // }

   // return tablaDel6

   return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((currentItem) => currentItem * 6)

}




function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   return array.filter((masDe100) => masDe100 > 100)
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   var arrayNum = [];

   for (var i = 0; i < 10; i++) {
      if(num === i) {
         return "Se interrumpió la ejecución";
      }
      else {
         num += 2;
         arrayNum.push(num);
      }
   }

   return arrayNum;

}


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   var arrayNum = [];

   for (var i = 0; i < 10; i++) {
      
      if(i === 5) {
         continue;
      }

      num += 2;
      arrayNum.push(num);

   }

   return arrayNum;


}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
