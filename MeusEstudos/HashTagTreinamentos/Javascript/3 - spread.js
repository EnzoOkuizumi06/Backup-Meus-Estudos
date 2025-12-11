//Usando spread - basicamente é um ctrl + c e ctrl + v no array e no Object... Já que não é possível a gente pegar arrayTeste2 e atribuir direto os dados do arrayTeste
const arrayTeste = ["Casa Verde", 2, "Rua Dominicana", 110]

const arrayTeste2 = [...arrayTeste]; //Estou pegando o meu array e espalhando (ou colocando) as mesmas informações do arrayTeste
arrayTeste2[1] = 523; //Lembrando, para mudar o valor de um Array é com [chaves] e atribuindo um valor novo

console.log("Exibindo arrayTeste: ",arrayTeste);
console.log("Exibindo arrayTeste2: ",arrayTeste2);


//Também podemos fazer com Objetos
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

export const object2 = {...object}; //Estamos exportando para o arquivo 7

object2.chave2 = 64; //Lembrando, para acessar um object é via PONTO e atribuindo um valor novo

console.log(object2);