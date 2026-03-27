Calculadora Eletrica 

Funcionalidades: 
O script possui varias funcões como:

1- Calculadora De Consumo: Calcula o gasto de energia eletrica diaria/mensal.

2- Calculadora De Mult/Submult: Calcula valores entre escalas(g=giga , mega , quilo , unidade , mili , micro , nano , pico ).

3- Calculadora De Resistores: Identifica valor de resistencia e tolerancia para resistores de 4 ou 5 faixas.

4- Calculadora Da Lei De Ohm: Calcula tensão(V),Corrente(I) ou Resistencia(R) com base em dois valores conhecidos.

5- Resistencia Equivalente(Req): Calcula a resistencia total em circuitos associados em série ou paralelo.

Estrutura do Código
menu(): Gerencia a navegação principal entre as ferramentas.
CalcConsu(): Realiza o cálculo de custo de energia baseado em horas de uso e taxa da concessionária.
CalcMultSubmult(): Utiliza um objeto de fatores multiplicadores para converter escalas técnicas.
CalculadoraDeResistores(): Processa strings de cores para converter em valores numéricos de Ohm.
CalculadoraDeOhms(): Aplica as fórmulas da Lei de Ohm (V = R * I).
CalculadoraDeReqResistores(): Processa múltiplos resistores em circuitos série ou paralelo.