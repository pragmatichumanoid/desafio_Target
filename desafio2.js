/*Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/



/*Exemplo clássico de recursividade, aqui está uma solução proposta para o desafio:*/ 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
function pertenceSequenciaFibonacci(numero) {
    let a = 0; 
    let b = 1;
    let soma;
  
    while (a <= numero) {  //enquanto  "a" for menor ou igual ao número, caso a seja exatamente igual ao número, teve retornar true.
      if (a === numero) {    
        return true;
        
      }
    
      soma = a + b; //se o if for verdadeiro, somamos a+b, o a passa a ser b, e b o resultado da soma, conforme a regra da sequência.
      a = b;
      b = soma;
    }
  
    return false; 
  }
  
  rl.question("Informe um número para verificar se pertence à sequência de Fibonacci: ", function(numeroInformado) { //entrada do user mais funçao callback que será chamada com a entrada do user como argumento.
    const numero = parseInt(numeroInformado);
  
    if (!isNaN(numero)) { //isNaN nos diz se o número é válido, se for, o programa segu o fluxo, se não, havéra mensagem de erro.
      const pertence = pertenceSequenciaFibonacci(numero);
  
      if (pertence) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
      } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
      }
    } else {
      console.log("Por favor, informe um número válido.");
    }
  
    rl.close();
  });
