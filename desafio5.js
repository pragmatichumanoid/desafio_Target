//Escreva um programa que inverta os caracteres de um string.
//primeira solução proposta:
function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1 ; i >= 0; i--) {
      invertedString += str[i];
      
    }
    return invertedString;
  }
  
  // Exemplo de uso:
  const stringOriginal = 'Olá, mundo!';
  const stringInvertida = inverterString(stringOriginal);
  console.log(stringInvertida); // Saída deverá ser "!odnum ,álO"
  //solução proposta com método reduce:
  function inverterStringReduce(str) {
    return str.split('').reduce((inverted, char) => char + inverted, '');
  }
  
  // Exemplo de uso:
  const string = 'Olá, mundo!';
  const stringInvert = inverterStringReduce(string);
  console.log("Utilizando o método reduce: " +stringInvert); // Saída: "!odnum ,álO"
  
  