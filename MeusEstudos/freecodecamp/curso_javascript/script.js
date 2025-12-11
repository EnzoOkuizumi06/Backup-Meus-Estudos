//Seletores de Elementos

//5 maneiras para selecionar um elemento no html
//document (é um objeto especial) que se refere ao próprio documento, que neste caso é o pagina.html

//1. document.getElementById

//2. document.getElementsByTagName

//3. document.getElementByClassName

//4. document.querySelector -> Mais usado

//5. document.querySelectorAll -> Mais usado também


//1. document.getElementById - só retorna um elemento
//get -> pegar, Element -> elemento, By -> através de, Id -> Identificador

console.log(document.getElementById("meu-formulario"));


//2. document.getElementsByTagName
//get -> pegar, Element -> elementos, By -> através de, TagName -> Nome da Tag

console.log(document.getElementsByTagName("li"));


//3. document.getElementByClassName 
//get -> pegar, Element -> elemento, By -> através de, ClassName -> Nome da Classe

console.log(document.getElementsByClassName("item"));


//4. document.querySelector -> Pode selecionar através do Id, TagName, ClassName e vai retornar o primeiro elemento
//query -> consultar, Selector -> seletor

console.log(document.querySelector("li")); //Selecionando por TagName

//5. document.querySelectorAll -> Pode selecionar através do Id, TagName, ClassName e vai retornar todos os elementos
//query -> consultar, Selector -> seletor

console.log(document.querySelectorAll("#meu-formulario")); //Selecionando por Id


// document.querySelectorAll e forEach

const itens = document.querySelectorAll(".item"); //Selecionando por ClassName

itens.forEach((item) => console.log(item));

console.log("\nAgora vai ser sobre Manipulação do DOM")


//==============================================================
//Manipulação do DOM

const ul = document.querySelector(".itens");

console.log(ul);


//1. Remover um elemento via DOM
// ul.remove()


//2. Remover o último Elemento Filho 
//last -> último, element -> elemento, child -> filho

/*
Ou nesse caso, o último elemento filho do ul

<ul class="itens">
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
    <li class="item">Item 3</li>

   -> <li>Item 4</li> <- Último Elemento Filho do UL
</ul>
*/

ul.lastElementChild.remove();


//3. Alterando o primeiro Elemento Filho (Segue a mesma lógica do anterior)
//first -> primeiro, element -> elemento, child -> filho

/*
Ou nesse caso, o primeiro elemento filho do ul

<ul class="itens">
    -> <li class="item">Item 1</li> <- Primeiro Elemento Filho do UL
    <li class="item">Item 2</li>
    <li class="item">Item 3</li>
</ul>
*/


//Definindo o conteúdo de texto de um elemento - textContent (Ideal para ler ou alterar texto puro)
ul.firstElementChild.textContent = "Olá"; //Alterando o texto do li / text -> texto, content -> conteúdo


//Acessando todos os filhos diretos de um elemento - children
console.log(ul.children) // Children -> Filhos

//Acessando e alterando via Children e innerText (Ele faz o mesmo que o textContent, mas respeita os estilos CSS)
ul.children[1].innerText = "Oi"; //Inner -> Interno, text -> texto

//Alterando conteúdo HTML de um elemento - innerHTML (Permite inserir tags HTML)
ul.lastElementChild.innerHTML = "<h1>Olá</h1>"; //Inner - Interno, HTML -> HTML




//Alterando o botão
const botao = document.querySelector(".botao");

console.log(botao);

//Alterar os estilos de um elemento de forma dinâmica
//Alterando o estilo do botao 
botao.style.background = "red";



//==============================================================
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

//Vou fazer um outro projeto...