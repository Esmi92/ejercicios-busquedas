// 4.- Crear una función que busque el numero más pequeño en el arreglo
// 	Ej. [1,4,5,-1,-7,2,3,9]
// 	Salida -->  -7

const miArray = [1, 4, 7, 2, 4, 1, 9, 4, 2, 4, 5, 12]

function contar(array) {
    var elMenor = array[0] 
    for (var i = 0; i < array.length; i++) {
        
            if (array[i] < elMenor) {
                elMenor = array[i]
            }
        
    }
    
    console.log(elMenor) // se imprime desde la función 
}

contar(miArray)

const otherArray = [35,40,4,2,5,7,65,7,8,3,10,15]

contar(otherArray)