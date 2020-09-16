//
let num = ['e','b','d','a','c']
//console.log(num)
// console.log(num.sort()) Ordena
//num.push('Oi') Cria e adiciona 'Oi' no final do vetor
/*

console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])


for (let pos=0;pos<num.length;pos++){
        console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

let pos = 0


while (pos <= 5) {
    let randomNumber = Number(Math.random() * 10).toFixed(
        
    );
    num.push(randomNumber)
    pos++
}

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
