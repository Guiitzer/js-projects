//alert("Utilize .(Ponto) para valores quebrados e coloque a quantidade em MLS."
    //Declaração das Variaveis
    let mlsLitro = Number(1000)
    let precoElement = document.getElementById("preco")
    let mlsElement = document.getElementById("mls")
    let lataElement = document.getElementById("nomeLata")
    let moneyElement = document.getElementById("money")
    

    //Funções dos botões
    let calcularElement = document.getElementById("calcular")
    calcularElement.addEventListener('click', function () {
       
  
        //Converter Preço da lata para R$
      let precoValue = (precoElement.value)
      precoValue = Number(precoValue)
      let mlsValue = (mlsElement.value)
      
      //Converter Dinheiro da carteira para R$
      let moneyValue = moneyElement.value
      moneyValue = Number(moneyValue);

      
      
      let quantidadeQPossoComprar = (moneyValue / precoValue).toFixed();
      let dinheiroQueSobra = (moneyValue % precoValue).toFixed(2);
            
    
      let limparElement = document.getElementById("Limpar");
    limparElement.addEventListener('click', function(){
        let resultElement = document.getElementById('Resultado')
        resultElement.innerHTML = ''
    })

     //Regra de Tres:
     let resultPrecoLitro = mlsLitro * precoValue / mlsValue
     resultPrecoLitro = Number(resultPrecoLitro).toFixed(2)

     let resultElement = document.getElementById('Resultado')
    resultElement.innerHTML += (`
        <div class="result">
            <div>O preço da ${lataElement.value} de ${mlsElement.value} Mls, pago por litro é de R$ ${resultPrecoLitro}</div>
            <div>Você consegue comprar ${quantidadeQPossoComprar} e sobra R$${dinheiroQueSobra}</div>
        </div>
    `);

    });


    

   