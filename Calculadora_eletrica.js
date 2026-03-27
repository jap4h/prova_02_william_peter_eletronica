function menu(){
    let pergunta = parseInt(prompt("Qual função deseja utilizar: \n1-Calculadora de consumo \n2-Calculadora de Mult/submult \n3-Calculadora de resistores \n4-Calculadora de Ohns"))
    if( pergunta == 1 ){
        CalcConsu()
    }

    if( pergunta == 2 ){
     CalcMultSubmult()
    } 

    if( pergunta == 3 ){
        CalculadoraDeResistores()
    }

    if( pergunta == 4 ){
        CalculadoraDeOhms()
    }
}


function CalcConsu(){
    let conversao = parseInt(prompt("Em qual medida deseja converter?: \n1-KiloWatts \n2-Watts"))
    let horas = parseInt(prompt("\nDigite o total de horas de uso: "))
    let nome = prompt("\nDigite o nome do item: ")
    let taxa = parseFloat(prompt("\nDigite o valor da taxa por Watts: "))

    switch ( conversao ){
        case 1 :
            let gastokw = parseInt(prompt("\nDigite o gasto em KiloWatts: "))
            let calculokw = ( gastokw * horas ) * taxa
            console.log("Seu gasto em reais com " , nome , " diario é " , calculokw , "\
            \n Gasto mensal : " , (calculokw * 30))
            break;

        case 2 :
            let gastow = parseInt(prompt("\nDigite o gasto em Watts: "))
            let calculow = ((gastow / 1000) * horas ) * taxa
            console.log("Seu gasto em reais com " , nome , " diario é " , calculow , "\
            \n Gasto mensal : " , (calculow * 30))
            break;
    }
}   


function CalcMultSubmult(){
    const fatores = {
        1:  1e9,   // 1.000.000.000
        2:  1e6,   // 1.000.000
        3: 1000,  // 1.000
        4: 1,   // 1
        5:  1e-3,  // 0.001
        6: 1e-6,  // 0.000001
        7:  1e-9,  // 0.000000001
        8:  1e-12  // 0.000000000001
    };


    let tipoconversao = prompt("\nEscolha a unidade de conversão : \
    \n ampere \n volt \n ohm \n watt: ")
    let escala = parseInt(prompt("Digite a escala \
    - \n1-Giga \n2-Mega \n3-kilo \n4-Unidade \
     \n5-Mili \n6-Macro \n7-Nano \n8-Pico"))
    let valor = parseFloat(prompt("\nDigite o valor da conversão: "))
    let multiplicador =  fatores[escala]
    let calculo = valor * multiplicador

    console.log("Seu resultado é: " , calculo , tipoconversao)
}



function CalculadoraDeResistores(){
    let quantidadesdefaixas = prompt("O resistor possui 4 ou 5 faixas: ")
    
    let cordafaixa1 = prompt("\nCor da 1° faixa: ")
    let cordafaixa2 = prompt("\nCor da 2° faixa: ")
    let cordafaixa3 = prompt("\nCor da 3° faixa: ")
    let cordafaixa4 = prompt("\nCor da 4° faixa: ")
    let cordafaixa5 = ""

    if ( quantidadesdefaixas == "5" ){
        cordafaixa5 = prompt("\nCor da 5° faixa: ")
    }


    let primeirodigito = ""
    if ( cordafaixa1 == "preto") { primeirodigito = "0" }
    if ( cordafaixa1 == "marrom") { primeirodigito = "1" }
    if ( cordafaixa1 == "vermelho") { primeirodigito = "2" }
    if ( cordafaixa1 == "laranja") { primeirodigito = "3" }
    if ( cordafaixa1 == "amarelo") { primeirodigito = "4" }
    if ( cordafaixa1 == "verde") { primeirodigito = "5" }
    if ( cordafaixa1 == "azul") { primeirodigito = "6" }
    if ( cordafaixa1 == "violeta") { primeirodigito = "7" }
    if ( cordafaixa1 == "cinza") { primeirodigito = "8" }
    if ( cordafaixa1 == "branco") { primeirodigito = "9" }
    

    let segundodigito = ""
    if ( cordafaixa2 == "preto") { segundodigito = "0" }
     if ( cordafaixa2 == "marrom") { segundodigito = "1" }
    if ( cordafaixa2 == "vermelho") { segundodigito = "2" }
    if ( cordafaixa2 == "laranja") { segundodigito = "3" }
    if ( cordafaixa2 == "amarelo") { segundodigito = "4" }
    if ( cordafaixa2 == "verde") { segundodigito = "5" }
    if ( cordafaixa2  == "azul") { segundodigito = "6" }
    if ( cordafaixa2 == "violeta") { segundodigito = "7" }
    if ( cordafaixa2 == "cinza") { segundodigito = "8" }
    if ( cordafaixa2 == "branco") { segundodigito = "9" }

    let valordosdigitosagrupados = ""
    let corparamultiplicar = ""
    let corparatolerancia = ""

    if ( quantidadesdefaixas == "4" ){
        valordosdigitosagrupados = primeirodigito + segundodigito
        corparamultiplicar = cordafaixa3
        corparatolerancia = cordafaixa4
    }
    else {
        let terceirodigito = ""
        if ( cordafaixa3 == "preto") { terceirodigito = "0" }
        if ( cordafaixa3 == "marrom") { terceirodigito = "1" }
        if ( cordafaixa3 == "vermelho") { terceirodigito = "2" }
        if ( cordafaixa3 == "laranja") { terceirodigito = "3" }
        if ( cordafaixa3 == "amarelo") { terceirodigito = "4" }
        if ( cordafaixa3 == "verde") { terceirodigito = "5" }
        if ( cordafaixa3 == "azul") { terceirodigito = "6" }
        if ( cordafaixa3 == "violeta") { terceirodigito = "7" }
        if ( cordafaixa3 == "cinza") { terceirodigito = "8" }
        if ( cordafaixa3 == "branco") { terceirodigito = "9" }
        
        valordosdigitosagrupados = primeirodigito + segundodigito + terceirodigito
        corparamultiplicar = cordafaixa4
        corparatolerancia = cordafaixa5

    }


    let multiplicadornumerico = 1
    if ( corparamultiplicar == "preto" ) { multiplicadornumerico = 1 }
    if ( corparamultiplicar == "marrom" ) { multiplicadornumerico = 10 }
    if ( corparamultiplicar == "vermelho" ) { multiplicadornumerico = 100 }
    if ( corparamultiplicar == "laranja" ) { multiplicadornumerico = 1000 }
    if ( corparamultiplicar == "amarelo" ) { multiplicadornumerico = 10000 }
    if ( corparamultiplicar == "verde" ) { multiplicadornumerico = 100000 }
    if ( corparamultiplicar == "azul" ) { multiplicadornumerico = 1000000 }
    if ( corparamultiplicar == "violeta" ) { multiplicadornumerico = 10000000 }
    if ( corparamultiplicar == "dourado" ) { multiplicadornumerico = 0.1 }
    if ( corparamultiplicar == "pratedo" ) { multiplicadornumerico = 0.01 }

    let valordatoleranciaporcentagem = ""
    if ( corparatolerancia == "marrom" ) {valordatoleranciaporcentagem = "1%"}
    if ( corparatolerancia == "vermelho" ) {valordatoleranciaporcentagem = "2%"}
    if ( corparatolerancia == "verde" ) {valordatoleranciaporcentagem = "0.5%"}
    if ( corparatolerancia == "azul" ) {valordatoleranciaporcentagem = "0.25%"}
    if ( corparatolerancia == "violeta" ) {valordatoleranciaporcentagem = "0.1%"}
    if ( corparatolerancia == "cinza" ) {valordatoleranciaporcentagem = "0.05%"}
    if ( corparatolerancia == "dourado" ) {valordatoleranciaporcentagem = "5%"}
    if ( corparatolerancia == "prateado" ) {valordatoleranciaporcentagem = "10%"}

    let resultadocalculadoemohms = Number(valordosdigitosagrupados) * multiplicadornumerico
    let textofnalformatado = resultadocalculadoemohms + " Ω"

    if ( resultadocalculadoemohms >= 1000000){
        textofnalformatado
    }
    else if( resultadocalculadoemohms >= 1000000 ){
        textofnalformatado = ( resultadocalculadoemohms / 1000 ) + " kΩ" 
    }

    document.write("<h1>Resultado do Calculo</h1>")
    document.write("O valor da resistencia é: " + textofnalformatado)
    document.write("<br>Tolerancia: " + valordatoleranciaporcentagem)
}   

function CalculadoraDeOhms(){
    let pergunta = parseInt(prompt("O que você deseja calcular: \n1-Tensão(Volts) \n2-Corrente(Amperes) \n3-Resistencia(Ohms)"))

    let v , i , r

    switch ( pergunta ){
        case 1 :
            r = parseInt(prompt("Digite o valor da restencia: "))
            i = parseFloat(prompt("Digite o valor da corrente: "))
            console.log("A tensão é " , ( r * i ) , " Volts")
        break;

        case 2 :
            v = parseInt(prompt("Digite o valor da tensão: "))
            i = parseFloat(prompt("Digite o valor da resistencia: "))
            console.log("A corrente é " , ( v * i ) , " A")
        break;

        case 3 :
            v = parseInt(prompt("Digite o valor da Tensão: "))
            i = parseFloat(prompt("Digite o valor da Corrente: "))
            console.log("A resistencia é: " , ( v / i ) , " Ω")

        break;

        default :
        alert("opcão invalida")
        break;
    }

}

menu()