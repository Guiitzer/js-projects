function criarContador(valorInicial){
    let valorDoContador = valorInicial

    function add(){
        valorDoContador += 1
        return valorDoContador
    }

    function sub(){
        valorDoContador -= 1
        return valorDoContador
    }
    function reset(){
        valorDoContador = valorInicial
        return valorDoContador
    }
    return {
        add: add,
        sub:sub,
        reset:reset
        
    }
}


let contador = criarContador(10)
console.log(contador.sub())
console.log(contador.sub())
console.log(contador.sub())
console.log(contador.reset())
console.log(contador.sub())
console.log(contador.sub())
console.log(contador.sub())
console.log(contador.add())
console.log(contador.reset())