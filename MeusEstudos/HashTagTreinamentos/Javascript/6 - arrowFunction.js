//Usando ArrowFunction 

const consoleLogOi = () => {
    console.log("Oi")

    return "Oi de novo";
}

//Posso fazer tudo em uma única linha também

const segundaFuncao = () => console.log("\nSegunda Função!");

const retornoDaFuncao = consoleLogOi();
console.log(retornoDaFuncao)

segundaFuncao(); //Executando a Segunda Função