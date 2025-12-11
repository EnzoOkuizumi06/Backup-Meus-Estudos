//Tipos de Variáveis => Tipos primitivos e Tipos de referência

//Tipos Primitivos
const numero = 5;
const numerosDecimais = 9.5;
const texto = "Olá mundo!";

//Outro ponto, as variáveis do tipo primitivo guardam os seus valores

console.log("\n")

//Tipos de Referências

//Array - vetor
const array = [5, 25, "texto1", "texto2", [5, 92]] //Os array só possuem valores. Também podemos colocar um array dentro de outro array

//Object - objeto
const object = {
    chave1: "valor1", 
    chave2:5, 
    chave3: 5.3, 
    vetor:[5, 97],
    chave5: {
        novaChave1:5,
        novaChave2: 10
    }
} 

//As variáveis do tipo de Referência não está guardando o valor, mas sim o "espaço"... Guarda o endereço, exemplo: acessar um array: array[2] //RES: texto2... Você não está acessando o valor dele

//Já os objetos conseguem atribuir um valor em uma chave. Também posso colocar um array dentro do objeto


//Para acessar o array, digite o índice dele, por exemplo, acessar o índice 1 / console.log(array[0]) //RES: 5
console.log("Acessando um Array\nValor do Array na posição 0:",array[0])

//Para acessar o objeto, digite a chave dele, exemplo, acessar a chave2 / console.log(object.chave2) //RES: valor3
console.log("\nAcessando um Object\nValor do Object na chave 3:", object.chave1)

//Ou também podemos acessar o Object assim: Usando chaves
console.log("Valor do Object na chave 1(usando outro método):", object["chave1"])



//Vou fazer o exemplo do Endereço do array aqui:
console.log("\nTestando os Endereços no array:")

const arrayTeste = ["Casa Verde", 2, "Rua Dominicana", 110]

//Agora vamos pegar e colocar esse arrayTeste em outro array e modificar o seu valor:
const arrayTeste2 = arrayTeste;

//Modificando...
arrayTeste2[1] = 3;

console.log("Exibindo arrayTeste2:",arrayTeste2, "\nExibindo arrayTeste:", arrayTeste);
//Resultado: 
// Exibindo arrayTeste2: [ 'Casa Verde', 3, 'Rua Dominicana', 110 ]
// Exibindo arrayTeste: [ 'Casa Verde', 3, 'Rua Dominicana', 110 ]

//arrayTeste2 modificou o arrayTeste, pois você não está copiando o valor, mas sim o ENDEREÇO

//Já devo ter dito, mas TIPO DE REFERÊNCIA NÃO GUARDA VALOR, MAS SIM O ENDEREÇO. Não é igual as Variáveis





