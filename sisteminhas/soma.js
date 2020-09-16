let tela = document.getElementById('tela')

        function verificarNumero(result){
           
            if (isNaN(result)){
                tela.innerHTML = `Digite um Numero valido!`
                
            }
        }

        let n1 = document.getElementById('input1')
        let n2 = document.getElementById('input2')
        
        //soma
        somar.addEventListener('click', function(){
           let result = Number(n1.value)+Number(n2.value)
          verificarNumero(result)
          
          tela.innerHTML = `O Resultado da Soma é  ${result}`
        })
        //Multipicação
        mult.addEventListener('click', function(){
           let result = Number(n1.value)*Number(n2.value)
          
           tela.innerHTML = `O Resultado da Multipicação é  ${result}`
        })
        //Divisão
        dividir.addEventListener('click', function(){
           let result = Number(n1.value)/Number(n2.value)
           
           tela.innerHTML = `O Resultado da Divisão é  ${result}`
        })
        //Subtração
        subtrair.addEventListener('click', function(){
           let result = Number(n1.value)-Number(n2.value)
       

           tela.innerHTML = `O Resultado da Subtração é  ${result}`
        })
