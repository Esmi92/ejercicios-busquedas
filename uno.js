// Crear una función que encuentre el número más repetido en un array
// 	Ej. Input -[6,1,8,2,3,6,3,2,5,6]
// 	Salida -> 6

var miArray = [6, 1, 8, 2, 3, 6, 3, 2, 5, 6]
var otro = [4,5,4,6,3,2,4,5,6,7,8,4,6,1]

function contar(array) {
    var contador = 0 // en contador
    var max = 1  // el maximo inicial 
    var elMayor; // el elemento mayo 
    for (var i = 0; i < array.length; i++) {    
        for(var j = 0; j<array.length; j++){
           if(array[i]==array[j]){ // va a recorrer 1 x 1 y si es es = va a sumarlo al contador
               contador++; 
               if(contador>max){
                   max = contador
                   elMayor = array[i] //va a agregar el que cumpla con la condición mayor > max 
               }
           }
        
        }
        contador = 0 
    }
    console.log(elMayor) 
}

contar(miArray)

contar(otro)







