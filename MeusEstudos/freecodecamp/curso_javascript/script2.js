//Eventos

/*
Exemplos de Eventos:

- Clicar com o sobre um elemento
- Passar o ponteiro do mouse sobre um elemento
- Pressionar uma tecla do teclado
- Redimensionar ou fechar a janela do navegador
- Uma página web terminando de carregar
- Enviar um formulário
- Um vídeo sendo reproduzido, interrompido, ou terminando sua reprodução
- Um erro ocorrendo

*/

const titulo = document.querySelector("#titulo");

function imprimirTitulo() {
    console.log(titulo);
}

//addEventListener(evento, funçãoDeRetorno), add -> adicionar, Event -> Evento, Listener - Detector / escutador
titulo.addEventListener("click", imprimirTitulo);

const botao = document.querySelector(".botao");


//Podemos declarar uma function vv
/*
Criei como function (evento) {...}

Mas podemos otimizar: (evento) => {...}

também posso substituir o (evento) para (e), mas prefiro evento
*/

botao.addEventListener("click", (evento) => {
    evento.preventDefault(); //Prevenir comportamento padrão de recarregar a página
    console.log(botao);

    //Alterando a cor do formulário quando o botão é clicado
    document.getElementById("meu-formulario").style.background = "aqua";

    //Alterando o fundo da página
    document.querySelector("body").style.background = "rgb(24, 163, 24)";

    //Selecionando elemento via [colchetes], pois o getElementsByClass retorna uma lista
    document.getElementsByClassName("itens")[0].lastElementChild.innerHTML = "<h1>Alterando Item 4</h1>"
});


//Selecionar elemento nome 
const inputNome = document.querySelector("#nome");

//input - entrada
inputNome.addEventListener("input", (e) => {

    console.log(e.data); //Exibe uma única letra por vez
    console.log("\n")
    console.log(inputNome.value); //Exibe uma letra por vez e adicionando conforme o uso

    //Isso aqui vai inserir as teclas que digitou no inputNome no final do section .container
    //A exibição vai ficar horrível... Prefiro com console.log
    document.querySelector(".container").append(inputNome.value);
})