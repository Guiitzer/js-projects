
let pais = 'srasil'
if (pais == 'Brasil'){
    console.log('Você é Brasileiro')
}else if (pais == 'brasil'){
    console.log('Você é Brasileiro')
}else {
    console.log('Você é Estrangeiro')
}

// Utilizando Switch
let data = new Date()
dia = data.getDay()
switch (dia) {
    
    case 0:{
        console.log ("Domingo")
        break;
    }

    case 1:{
        console.log ("Segunda")
        break;
    }
    case 2:{
        console.log ("Terça")
        break;
    }
    case 3:{
        console.log ("Quarta")
        break;
    }
    case 4:{
        console.log ("Quinta")
        break;
    }
    case 5:{
        console.log ("Sexta")
        break;
    }
    case 6:{
        console.log ("Sabado")
        break;
    }
    default:{
        console.log ("Dia invalido")
    }
        break;
}

