nota100 = 2

notas(100)

function notas(){
    let notasDescr = ''
     while(nota100!== 0)
         notasDescr += (`$ 100 x ${nota100}`)
     while(nota50!== 0)
         notasDescr += (`$ 50 x ${nota50}`)
     while(nota20!== 0)
         notasDescr += (`$ 20 x ${nota20}`)
     while(nota10!== 0)
         notasDescr += (`$ 10 x ${nota10}`)
}