function menu(){
    let pergunta = parseInt(prompt("Qual função deseja utilizar: \n1-Calculadora de consumo \n2-Calculadora de Mult/submult \n3-Calculadora de resistores \n4-Calculadora de Ohns"))
    if( pergunta == 1 ){
        CalcConsu()
    }
    if( pergunta == 2 ){
        CalcMultSubmult()
    }
    if( pergunta == 3 ){
        
    }
    if( pergunta == 4 ){
        
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
function CalculadoDeResistores(){
    
}


menu()