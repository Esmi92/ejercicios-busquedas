// 2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras
// 	Ej input -> [8,'e',7,2,'a','d','f',2,3,1,4,3]
// 	Salida → ['e','a','d','f']

const miArray = [8,'e',7,2,'a','d','f',2,3,1,4,3]

function getLetter(array){
    let letters = []
    for( let i = 0; i< array.length; i++){
        if(typeof array[i] == 'string'){
            letters.push(array[i])
        }
    }

    console.log(letters)
}

getLetter(miArray)
 