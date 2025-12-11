//Estrutura de comparação - If

// == comparação não estrita - comparando somente valores
// === comparação estrita - comparando valores e tipos
if (5 === "5") {
    console.log("Show, é Igual. Comparação estrita")
} else if (5 == "5"){
    console.log("É igual sem comparar os tipos. Comparação não estrita")
} else {
    console.log("É diferente")
}


//Operador Ternário - forma eficiente do if
5 === "5" ? console.log("Show, é Igual. Comparação estrita") : console.log("É diferente")

//Recomendado usar só quando precisar fazer uma comparação... Se for igual a outra de cima, é melhor fazer do jeito normal

