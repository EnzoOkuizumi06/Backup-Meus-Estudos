function consoleLogOi(usuario) {
    console.log("Oi", usuario)

    //Pode ou não retornar uma informação
    return "Oi de novo";
}

consoleLogOi("Enzo")

const retornoDaFuncao = consoleLogOi("Mr. Enzo");
console.log(retornoDaFuncao)
