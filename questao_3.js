// Input do usuário
var string = "Eu sou uma string.";

// Função para inverter a string
function invertString(str) {
    // Define variável inicial vazia
    var inverted = "";
    
    // Loop para ler e gravar a string invertida
    for (var i = 1; i <= str.length; i++) {
        inverted += str[str.length - i];
    }
    
    // Retorna string invertida
    return inverted;
}

// Executa função e imprime resultado no console
var result = invertString(string);
console.log(result);
