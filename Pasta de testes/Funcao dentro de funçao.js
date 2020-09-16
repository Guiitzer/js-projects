// const numbers = [1,2,3,4,5]

// let filter = numbers.filter(function(number) {
//     if (number % 2 === 0) {
//         return true;
//     }

//     return false;
// })

// let map = numbers.map(function(number) {
//     if (number % 2 === 0) {
//         return true;
//     }

//     return false;
// })

// console.log({ filter, map })

function filter(lista, numero) {
    const valoresFiltrados = [];

    for(let i = 0; i < lista.length; i++) {
        const currentNumber = lista[i];
        console.log('Numero no array', currentNumber);

        const isValidNumber = numero(currentNumber);
        if (isValidNumber === true) {
            valoresFiltrados.push(currentNumber);
        }
    }

    return valoresFiltrados;
}

const result = filter([0,1,2,3,4,5], function(n) {
    if (n %2 == 0) {
        return true;
    }

    return false;
})
console.log(result)