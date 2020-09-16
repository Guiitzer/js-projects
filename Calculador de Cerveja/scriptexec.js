//alert("Utilize .(Ponto) para valores quebrados e coloque a quantidade em MLS.")
    let mlsLitro = Number(1000)
    let precoElement = document.getElementById("preco")
    let mlsElement = document.getElementById("mls")
    let lataElement = document.getElementById("nomeLata")

    let calcularElement = document.getElementById("calcular")
    calcularElement.addEventListener('click', function () {

      let precoValue = (precoElement.value)
      precoValue = Number(precoValue)
      let precoValueReal = precoValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      let mlsValue = (mlsElement.value)
      console.log(precoValueReal)

     //Regra de Tres:

     
     let resultPrecoLitro = mlsLitro * precoValue / mlsValue
     resultPrecoLitro = Number(resultPrecoLitro).toFixed(2)

     let resultElement = document.getElementById('Resultado')
    resultElement.innerHTML += (`<div class="printResult"><p>O preço da ${lataElement.value} de ${mlsElement.value} Mls, pago por litro é de R$ ${resultPrecoLitro}</div>`)
    });


    let limparElement = document.getElementById("Limpar");
    limparElement.addEventListener('click', function(){
        let resultElement = document.getElementById('Resultado')
        resultElement.innerHTML = ''
    })

   