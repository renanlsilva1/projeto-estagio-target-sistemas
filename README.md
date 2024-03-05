# Teste - Estágio Target Sistemas

Nesse repositório estão todas as minhas resoluções para os exercícios do teste. Utilizei a linguagem JavaScript para resolver os exercícios.


## Soluções

### Questão 1 

Observe o trecho de código abaixo:

    int INDICE = 13, SOMA = 0, K = 0;

    enquanto K < INDICE faça
    {
    	K = K + 1;
    	SOMA = SOMA + K;
    }

    imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
<img align="right" src="https://github.com/renanlsilva1/projeto-estagio-target-sistemas/blob/main/outputs/ex01.png" width=""/>
### Solução: [Resultado da Soma](https://github.com/renanlsilva1/projeto-estagio-target-sistemas/blob/main/soma.js)

### Questão 2 

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
<img align="right" src="https://github.com/renanlsilva1/projeto-estagio-target-sistemas/blob/main/outputs/ex02.png" width=""/>
### Solução: [Fibonacci](https://github.com/renanlsilva1/projeto-estagio-target-sistemas/blob/main/fibonacci.js)

### Questão 3
Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____

### Solução:
a) 9 </br>

b) 128 </br>

c) 49 </br>

d) 100 </br>

e) 13 </br>

f) 200 </br>

### Questao 4 
Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

### Solução:
Supondo que em cada ida eu possa visitar somente uma das salas, eu primeiramente deixaria o interruptor número 1 ligado por 15 minutos, e após desligá-lo, ligaria o interruptor número 2, e faria minha primeira ida até uma das salas, a Sala A, se ela estiver deligada e fria, ela representa o interruptor número 3, caso estiver desligada mas ainda quente, ela representa o interruptor número 1, se estiver ligada ela representa o interruptor número 2. Supondo que na minha primeira ida, a lâmpada da sala A estava desligada, porém quente, já sei que a lâmpada da Sala A é acionada pelo interruptor número 1, em minha segunda ida, fui a Sala B, e a lâmpada estava desligada e fria, sendo assim, ela é acionada pelo interruptor número 3, e consequentemente sei que a última sala, que seria a Sala C, a qual deixei acionada durante as duas idas, é acionada pelo interruptor número 2.

### Questão 5
Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

<img align="right" src="https://github.com/renanlsilva1/projeto-estagio-target-sistemas/blob/main/outputs/ex05.png" width=""/>
### Solução: [Reverse String](https://github.com/renanlsilva1/projeto-estagio-target-sistemas/blob/main/reverseString.js)

