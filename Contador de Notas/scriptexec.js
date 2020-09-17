valorSaldoR = Number(150)
let nota100 = 0
let nota50 = 0
let nota20 = 0
let nota10 = 0
let nota5 = 0
let nota2 = 0

while (valorSaldoR>=100){
        nota100 += 1 
        valorSaldoR-=100
}
while(valorSaldoR>=50){
        
        nota50 +=1
        valorSaldoR-=50
}
while(valorSaldoR>=20){
        
        nota20 +=1
        valorSaldoR-=20
}
while(valorSaldoR>=10){
        
        nota10 +=1
        valorSaldoR-=10

}
while(valorSaldoR>=5){
        
        nota5 +=1
        valorSaldoR-=5
}
while(valorSaldoR>=2){
        
        nota2 +=1
        valorSaldoR-=2
}    

if (nota100 !== 0){
    console.log(`a quantidade de notas 100 é ${nota100}`)
}
if(nota50 !== 0){
    console.log(`a quantidade de notas 50 é ${nota50}`)
}
