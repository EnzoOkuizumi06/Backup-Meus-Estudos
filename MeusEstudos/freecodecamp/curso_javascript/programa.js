//Variáveis, constantes e outros tipos de dados

//number
const x = 10;
const y = 2.5;

//String (sequência de caracteres)
const nome = "Enzo";
const sobrenome = "Okuizumi";

//Boolean
const verdadeiro = true;
const falso = false;

// null - nulo
const nulo = null;

// undefined - não definido
const nao_definido = undefined;

console.log(typeof x) //number
console.log(typeof verdadeiro) //boolean
console.log(typeof nulo) //objeto

//=======================================================
//let podemos mudar os valores das variáveis
let nome2 = "Pedro";
nome2 = "mario";
console.log(nome2)

let d = 90;
d /= 3;
console.log(d);


const a = 1;
const b = 2;

//Operador e &&
console.log(a < b && a > b);
console.log(a < b && a != b);

//Operador Ou ||

console.log(a < b || a > b);
console.log(a == b || a != b);
console.log(a == b || a > b);

//Operador não !
console.log(!(a == b)); //Era para dar falso, mas o ! inverteu e colocou true


//==============================================================
//String

const nome3 = "Enzo";
const sobrenome3 = "Okuizumi";
const idade = 18;

apresentacao = "Meu nome é " + nome3 + " " + sobrenome3 + " e eu tenho " + idade + " anos.";
console.log(apresentacao);

apresentacao2 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`;
console.log(apresentacao2);

const string = "Olá mundo!";
console.log(string.length); //Pra ver quantos caracteres tem a string

console.log(string.toLowerCase()); //Deixar tudo minúsculo
console.log(string.toUpperCase()); //Deixar tudo maiúsculo
console.log(string.substring(0, 4)); //Para selecionar uma parte do texto
console.log(string.split("u")); // É um divisor... [ 'Olá m', 'ndo!' ]

//==============================================================

//Arrays - [Vetores] / Listas em python

const vetor = ["A", 10, "oi", 1.5, true];
console.log(vetor);

const numeros = [1, 2, 3, 4, 5];
const frutas = ["maçãs", "laranjas", "peras", "uvas"];

//Obter/Acessar um valor do Array - (Index)
console.log(frutas[0]);
console.log(frutas[1]);

//Adicionar um valor ao vetor frutas
frutas[4] = "melancia";
console.log(frutas);

//Alterar um valor do vetor frutas
frutas[1] = "limão";
console.log(frutas);

//Adicionando um elemento no final do vetor frutas
frutas.push("morangos"); //push significa empurrar
console.log(frutas);

//Adicionando um elemento no inicio do vetor frutas
frutas.unshift("mangas"); //unshift significa inserir no início
console.log(frutas);

//Remover último elemento de um vetor
const fruta_removida = frutas.pop(); //Removeu morango do vetor frutas - pop significa estouro
console.log(frutas);
console.log(fruta_removida); //Conseguimos adicionar em uma const o valor do item removido do array

//Remover do inicio do vetor frutas
const fruta_removida2 = frutas.shift(); //Remover fruta do inicio, no caso mangas - shift significa alteração, mudança, deslocamento
console.log(frutas);
console.log(fruta_removida2);

//Procurar qual o índice de um elemento
console.log(frutas.indexOf("melancia"));

//Como verificar se determinada constante ou variável é um vetor (array)
console.log(Array.isArray(frutas)); //É um vetor
console.log(Array.isArray("Olá mundo!")); //Não é um vetor

//==============================================================

//Objetos - É uma estrutura de dados que agrupa propriedados, que são pares chave-valor.

//Isso não é um objeto vv
const nome4 = "João";
const sobrenome4 = "Silva";
const idade4 = 18;
const passatempos = ["músicas", "filmes"];
const enderecoRua = "Avenida dos Cravos";
const enderecoCidade = "Vitória";
const enderecoEstado = "ES";

//Objeto Pessoa vv (isso é um objeto, parece um dicionário né) - basicamente um DICIONÁRIO em python
const pessoa = {
    nome4: "João", 
    sobrenome4: "Silva", 
    idade4: 18, 
    passatempos: ["músicas", "filmes", "esportes"], //Isso seria um Array em JS ou lista em python
    endereco: {
        enderecoRua: "Avenida dos Cravos",
        enderecoCidade: "Vitória",
        enderecoEstado: "ES"
    }
}

//Acessar uma propriedade do objeto
console.log(pessoa.nome4);
console.log(pessoa.passatempos);

//Acessar um elemento de uma propriedade vetor
console.log(pessoa.passatempos[0]);

//Acessar a propriedade endereco e também um elemento específico
console.log(pessoa.endereco);
console.log(pessoa.endereco.enderecoCidade);

//Definir uma nova propriedade
pessoa.email = "joão@gmail.com"
console.log(pessoa)

//Criando um array [array] de objetos {objetos}
const tarefas = [
    {
        id: 1,
        texto: "Tirar o lixo",
        completo: false
    },
    {
        id: 2,
        texto: "Varrer o chão",
        completo: true
    },
    {
        id: 3,
        texto: "Lavar o carro",
        completo: false
    }
]

//Acessar uma propriedade de um elemento específico
console.log(tarefas[1].texto);

//Formatar um objeto em formato JSON 
JSON.stringify(tarefas);


//==============================================================

//Estruturas Condicionais
const x2 = 30; 
const y2 = 10;

if(x2 == y2 ) {
    console.log("x é igual a y");
} else {
    console.log("x não é igual a y");
}

if( x2 < y2){
    console.log("X é menor do que y");
} else if(x2 > y2) {
    console.log("X é maior que y");
} else if(x == y){
    console.log("x é igual a y");
} else {
    console.log("todo mundo morreu");
}

//switch
const cor = "azul";

switch (cor) {
    case "vermelho":
        console.log("A cor é vermelho");
        break;
    case "verde":
        console.log("A cor é verde");
        break;
    case "azul":
        console.log("A cor é azul");
        break;
    default:
        console.log("A cor não é vermelho, nem verde, nem azul.")
        break;
}

const sexo = "M";

switch (sexo) {
    case "M":
    case "m":
        console.log("Masculino");
        break;
    case "F":
    case "f":
        console.log("Feminino");
        break;
    default:
        console.log("Inválido");
        break;
}


//Operador ternário...

//Normal v
let numero;
if (cor == "vermelho") {
    numero = 10;
} else {
    numero = 20;
}
console.log(numero);

//Com operador ternário vv
// let variável = Condição ? valor caso seja retornado vdd : valor caso seja retornado falso
let numero2 = cor == "azul" ? 35 : 50;
console.log(numero2);



//==============================================================
//Estruturas de Repetição

//convenção de programação: i - índice
let i = 0;

//While - enquanto
while (i < 3) {
    console.log("miau");
    i++;
}


//for - para
// for (/*inicialização*/;/*condição*/; /*atualização*/){ 
//     //bloco executado
// }

for(let i = 0;  i < 10; i++) {
    console.log(`Número da repetição for: ${i}`);
}

//Usando for em uma lista

//tarefas2 é um vetor (array)
const tarefas2 = [
    {
        id: 1,
        texto: "Tirar o lixo",
        completo: false
    },
    {
        id: 2,
        texto: "Jantar com esposa",
        completo: false
    },
    {
        id: 3,
        texto: "Reunião com chefe",
        completo: true
    }
]

for (let i = 0; i < tarefas.length; i++) {
    console.log(`Tarefa ${i + 1}: ${tarefas2[i].texto}`);
}


//Vamos percorrer o vetor tarefas2
let y3 = 0;
for (let tarefa of tarefas2 ) {
    y3++;
    console.log(`Tarefa ${y3}: ${tarefa.texto}`);
}


//Revisando 
/*
while (condição) {
    //bloco de código a ser executado
}

for( inicialização; condição; incremento) { 
    //Bloco de código a ser executado
}
*/

//Também temos o For...of: 

//Não tem inicialização, condição ou incremento explícitos.

// Ele simplesmente percorre cada item do array tarefas2, um por um.

for (let tarefa of tarefas2) {
    console.log(tarefa.texto);
}

console.log("\n")

//Também temos o for...in: 

//Iterar sobre as propriedades de um objeto
//Percorre as chaves (nomes de propriedades), não os valores diretamente

const pessoa2 = {
    nome: "Enzo",
    idade: 20,
    cidade: "Caieiras"
}

for (let chave in pessoa2) {
    console.log(`${chave}: ${pessoa2[chave]}`);
}

/* Quando usar?
-Quando você quer acessar todas as propriedades de um objeto.

-Ideal para objetos literais (tipo { chave: valor }).

   Atenção:
-Não use for...in com arrays, pois ele percorre os índices como strings e pode causar confusão.

-Para arrays, prefira for...of ou for tradicional.
*/

console.log("\n")

//==============================================================

//Function - Funções

function dizer_ola(nome = "pessoa") {
    console.log(`Olá ${nome}`)
}

dizer_ola("Enzo");
dizer_ola("Pedro");
dizer_ola("Carlos");
dizer_ola();

function se_apresentar(nome = "Fulano", idade = "00"){
    console.log(`Meu nome é ${nome} e minha idade é ${idade} anos`);
}

se_apresentar("Enzo", 18);
se_apresentar("José", 57);
se_apresentar("Fulano", 19);

function criar_nome_completo(nome, sobrenome, sexo){
    sexo = sexo.toUpperCase();
    if(sexo == "M") {
        return `Sr. ${nome} ${sobrenome}`;
    } else if (sexo == "F") {
        return `Sra. ${nome} ${sobrenome}`;
    } else {
        return `${nome} ${sobrenome}`;
    } 
}

const nomeCompleto = criar_nome_completo("Pedro", "Silva", "m");
const nomeCompleto2 = criar_nome_completo("Maria", "Cunha", "F");


dizer_ola(nomeCompleto);
dizer_ola(nomeCompleto2);

//Arrow Function - Funções Seta funcionam exatamente como uma função criado com function
const dizer_oi = () => console.log("oi!");
let dizer_algo = () => console.log("algo");

dizer_oi();
dizer_algo();

//Somando dois valores usando Arrow Function
const somar = (x, y) => { 
    return x + y;
}

//resultado vai receber o valor de retorno da função somar
const resultado = somar(5, 10);

console.log(resultado);

//Ou...

console.log(somar(10, 10));

console.log("\n")
//==============================================================
//Funções de Ordem Maior - para manipular vetores [array]
//São funções que recebem outras funções como argumento ou retornam uma função como resultado

//Isso tem a ver com Array - Lista de valores. Ex: const frutas = ["maçã", "banana", "laranja"];

/*
    .map() - Transforma cada item do array com base em uma função. Retorna novo array (Transforma em dados)
        const numbers = [1, 2, 3];
        const dobrar = numeros.map(n => n * 2); //RES: [2, 4, 6]

    .filter() - Filtra os itens do array com base em uma condição (vdd ou falso)
        const pares = numeros.filter(n => n % 2 === 0); //RES: [2]

    .reduce() - Reduz o array a um único valor, acumulando com base em uma função
        const soma = numeros.reduce((acc, n) => acc + n, 0) //RES: 6


    .forEach() - É um método de array que executa uma função para cada item da lista.
    Ele não retorna nada, só faz uma ação com cada elemento.
        const contatos = ["Enzo", "Maria", "João"]

        contatos.forEach((nome, i) => {
            console.log(`Enviando mensagem para ${nome} (contato ${i + 1})`);    
        })

        RES:
        Enviando mensagem para Enzo (contato 1)
        Enviando mensagem para Maria (contato 2)
        Enviando mensagem para João (contato 3)
*/

//forEach
const numeros2 = [1, 2, 3, 4, 5];

numeros2.forEach(function (numero2) {
    console.log(numero2);
});

const letras = ["A", "B", "C", "D", "E"];

letras.forEach(function (letra, indice) {
    console.log(`${indice}: ${letra}`);

});

//Criando um Array ou vetor objeto [] de tarefas
const tarefas3 = [
    {
        id: 1,
        texto: "Estudar",
        completo: false
    },
    {
        id: 2,
        texto: "Trabalhar",
        completo: false
    },
    {
        id: 3,
        texto: "Limpar casa",
        completo: true
    }
]

tarefas.forEach(function (tarefa3, indice, minhasTarefas) {
    console.log(`${indice + 1}: ${tarefa3.texto}`);
    console.log(minhasTarefas);
});


//map()
const vetorDeTextosDasTarefas = tarefas3.map(function (tarefa3) {
    return `Tarefa ${tarefa3.id}: ${tarefa3.texto}`;
});
console.log(vetorDeTextosDasTarefas);


//filter()
const tarefas4 = tarefas3.filter(function (tarefa) {
    return tarefa.id === 1;
});
console.log(tarefas4)


//reduce()
const listaDeNumeros = [1, 2, 3, 4];

const totalSomado = listaDeNumeros.reduce((somaAtual, numeroAtual) => {
    return somaAtual + numeroAtual;
}, 0);

console.log("\nO total somado é", totalSomado);

/* Basicamente:

    const listaDeNumeros = [1, 2, 3, 4];

    const totalSomado = listaDeNumeros.reduce((somaAtual, numeroAtual) => {
        return somaAtual + numeroAtual;

        Passo a passo:
        // 0 + 1 → 1 
        // 1 + 2 → 3 
        // 3 + 3 → 6 
        // 6 + 4 → 10
    }, 0);

    RES: 10
*/

//==============================================================
//Orientação a objetos

//Criar um programa que vai representar uma pessoa

const nome5 = "Enzo";
const sobrenome5 = "Okuizumi";
const dataDeNascimento = "30/10/2006";

const pessoaA = {
    nome: "Enzo",
    sobrenome: "Okuizumi 05",
    dataDeNascimento: new Date("10-30-2006"),
    //Quando temos uma função associada a um objeto chamamos isso de método
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
}

const pessoaB = {
    nome: "Luiz",
    sobrenome: "Souza",
    dataDeNascimento: new Date("1-1-99"),
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear();
    }
}

console.log(pessoaA.nome);
console.log(pessoaA.sobrenome);
console.log(pessoaA.obterNomeCompleto())
console.log(pessoaA.obterAnoNascimento());

console.log(pessoaB.nome);
console.log(pessoaB.sobrenome);
console.log(pessoaB.obterNomeCompleto())
console.log(pessoaB.obterAnoNascimento());

console.log("\nFunção Construtora:\n")

//Comente isso para fazer funcionar a parte de Classes ES6

// //Função construtora
// function pessoa3(nome, sobrenome, dataDeNascimento) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.dataDeNascimento = new Date(dataDeNascimento);
//     this.amigos = [];

//     this.obterAnoNascimento = () => this.dataDeNascimento.getFullYear(); //Função só que de forma reduzida

//     this.adicionarAmigo = function (amigo) {
//         if (!this.amigos.includes(amigo)) {
//             this.amigos.push(amigo);
//             amigo.amigos.push(this);
//         }
        
//     };
//     this.selecionarAmigos = function () {
//         return this.amigos.map(function (amigo){
//             return amigo.obterNomeCompleto();
//         });
//     }
// }

// pessoa3.prototype.obterNomeCompleto = function() {
//     return `${this.nome} ${this.sobrenome}`
// }

// const pessoaA1 = new pessoa3("João", "Silva", "7-8-80");
// const pessoaA2 = new pessoa3("Maria", "Santos", "8-1-90");
// const pessoaA3 = new pessoa3("Carlos", "Pereira", "5-2-95");



// console.log(`Sobrenome do João: ${pessoaA1.sobrenome}`);
// console.log(`Nome completo: ${pessoaA1.obterNomeCompleto()}`);
// console.log(`Ano de nascimento da ${pessoaA2.nome}: ${pessoaA2.obterAnoNascimento()}`);

// console.log("\nAdicionando amigos - vai exibir os amigos das Pessoas");
// pessoaA1.adicionarAmigo(pessoaA2);
// pessoaA1.adicionarAmigo(pessoaA3);

// console.log(`Amigos do ${pessoaA1.nome}`, pessoaA1.selecionarAmigos());
// console.log(`Amigos da ${pessoaA2.nome}`, pessoaA2.selecionarAmigos());
// console.log(`Amigos do ${pessoaA3.nome}`, pessoaA3.selecionarAmigos());

//Comente até aqui

console.log("\nDuas formas de criar function (function e function seta () => {...})")
//Duas formas de criar Function

function dizerOla () {
    console.log("Olá");
}

const dizerOi = () => {
    console.log("Oi");
}

dizerOla();
dizerOi();



//Construtores internos

console.log("\nCom string")
const nome6 = new String("Pedro")
console.log(typeof nome6) //RES: Object
console.log(typeof "Pedro") //RES: string

console.log("\nAgora com números")
const numero3 = new Number(5);
console.log(typeof numero3) //RES: Object
console.log(typeof 5) //RES: number



//Orientação a objetos com Classes ES6

//Função Construtora normal vv
function pessoa3(nome, sobrenome, dataDeNascimento) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataDeNascimento = new Date(dataDeNascimento);
    
    this.obterNomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log("\n")

//Função com Classes ES6
class PessoaClasses {
    constructor(nome, sobrenome, dataDeNascimento){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDeNascimento = new Date(dataDeNascimento);
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa6 = new PessoaClasses("João", "Silva", "7-7-99");
console.log(pessoa6);

console.log("\n")

//Usando extends no JS
class Cliente extends PessoaClasses {
    constructor(nome, sobrenome, dataDeNascimento, saldo) {
        super(nome, sobrenome, dataDeNascimento);
        this.saldo = saldo;
    }
}

const cliente1 = new Cliente("Pedro", "Souza", "1-1-90", 1000);
console.log(cliente1)
console.log(`Nome completo do cliente: ${cliente1.obterNomeCompleto()}`);


//==============================================================
