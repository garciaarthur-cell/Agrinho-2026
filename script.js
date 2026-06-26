    // Google falou que ficaria mais fácil com uma variável, já a variável nome eu fiz a partir das minhas aulas de youtube do python kkkkk
let resposta = " ";
let nome = prompt("Qual é o seu nome?");

function verificar() {
    // se não clicar em nada
    if (resposta == " ") {
        alert(nome + ", escolha uma opção primeiro");
    }

    else if (resposta == "verdadeiro") {
        alert("parabéns, " + nome + "!");
    }
    else {
        alert(nome + ", resposta errada");
    }
}