//Vão iterar o meu array - map() e Filter()

//Map - vai percorrer cada um dos itens do meu array e vai retornar um novo array do mesmo tamanho fazendo algum tipo de modificação para cada item

const array1 = [5, 25, "texto1", "texto2"];


const array2 = array1.map((elementoAtual) => elementoAtual + "Okuizumi"); 

console.log(array2);


//Filter - Filtra um array com base em uma condição e retorna um array apenas com os elementos que respeitarem a condição do filtro

//Só vai filtrar e retornar os elementos que forem números na array1
const array3 = array1.filter((elementoAtual) => typeof elementoAtual === "number"); //Fizemos de forma manual, utilizamos typeof, os valores do array foram jogadas para elementoAtual e depois os valores recebidos do array1 são comparados estritamente para ver se são números... Então o filter só vai retornar aqueles valores que forem verdadeiros
//(elementoAtual) => isNumber(elementoAtual) / isNumber -> é número? Retorna o valor se ele for um número
console.log(array3)