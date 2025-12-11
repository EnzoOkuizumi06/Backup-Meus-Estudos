/* Desestruturação é uma forma de extrair VALORES de objects ou arrays e ATRIBUIR diretamente a variáveis, sem precisar acessar cada valor manualmente com object.chave ou array[índice]*/

//Desestruturando um Object

const object = {
    chave1: "valor1", 
    chave2:5, 
    chave3: 5.3, 
    vetor:[5, 92],
    chave5: {
        novaChave1:5,
        novaChave2: 10
    }

} 

//const valorChave3 = object.chave3; -> como a gente faria normalmente no JS

//Um jeito melhor para fazer no react
const { chave1 } = object; //Estou pegando a chave com o nome "Chave3" dentro do objeto chamado "object"
const { chave2, chave3 } = object;

console.log("\nExibindo um Object desestruturado:")
console.log("Valor da chave1:",chave1)
console.log("Valor da chave2:", chave2, "\nValor da chave3:",chave3)


//Desestruturando um Array
const array = [5, 25, "texto1", "texto2", [5, 92]]

const [valor1, valor2, valor3, valor4, valor5] = array; //valor1, por exemplo, está pegando o valor do índice 0 do array

console.log("\nExibindo um array desestruturado:", valor1, valor2, valor3)


