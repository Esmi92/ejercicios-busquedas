// 3.- Crear una función que busque el numero más grande en un arreglo
// 	Ej [1,4,7,2,4,1,9,4,0,2,4,5,12]
// 	Salida -> 12

const miArray = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12]

function contar(array) {
    var elMayor = array[0] // aqui se guarda
    for (var i = 0; i < array.length; i++) {
       
            if (array[i] > elMayor ) {
                elMayor = array[i]
        
            }
     
    }
    console.log(elMayor) // se imprime desde la función 
}

contar(miArray)

const otherArray = [35,40,4,2,5,7,65,7,8,3,10,15]

contar(otherArray)
