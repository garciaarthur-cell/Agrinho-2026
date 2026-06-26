    // Google falou que ficaria mais fácil com uma variável 
let resposta = " ";

function verificar() {
    // se não clicar em nada
    if (resposta == " ") {
        alert("escolha uma opção primeiro");
    }

    else if (resposta == "verdadeiro") {
        alert("parabéns!");
    }
    else {
        alert("resposta errada");
    }
}