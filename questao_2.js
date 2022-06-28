// Input do usuário
var input = 33;

// Função para verificar se o número pertence a sequência de Fibonacci
function isFibonacci(number) {
  // Variáveis iniciais
  var num1 = 0;
  var num2 = 1;
  var next;

  // Loop para gerar a sequência até alcançar o número informado
  while (num1 <= number) {
    // Caso número esteja na sequência, retorna true
    if (num1 === number) {
      return true;
    }

    // Cálcula próximo número e atualiza o anterior
    next = num1 + num2;
    num1 = num2;
    num2 = next;
  }

  // Caso número não esteja na sequência, retorna false
  return false;
}

// Executa função com número informado e imprime resultado
if (isFibonacci(input)) {
  console.log("O número " + input + " pertence a sequência de Fibonacci");
} else {
  console.log("O número " + input + " não pertence a sequência de Fibonacci");
}
