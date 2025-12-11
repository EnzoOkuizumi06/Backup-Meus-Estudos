const novoItemInput = document.querySelector("#input-novo-item");
const botaoAdicionarItem = document.querySelector(".botao-adicionar");
const listaItens = document.querySelector("ul");

//Botão para adicionar um novo Item 
novoItemInput.addEventListener("input", () => {
    if (novoItemInput.value != "") {
        botaoAdicionarItem.classList.remove("desativado"); //Selecionando o botaoAdicionarItem, selecionando a sua classe e por fim removendo a classe desativado.
        botaoAdicionarItem.disabled = false; //Definindo se o botaoAdicionar está desabilitado. No caso ele está como False, então não está desabilitado
    } else {
        botaoAdicionarItem.classList.add("desativado");
        botaoAdicionarItem.disabled = true;
    }
});

//Escutando o evento de click do botaoAdicionarItem... Motivo para isso: chamar a função adicionarItem e passar o valor digitado no input para ela
botaoAdicionarItem.addEventListener("click", (e) => { 
    e.preventDefault();
    //console.log(novoItemInput.value); O .value captura o valor que digitamos no elemento, ex: tarefa

    //Chamar função adicionarItem
    adicionarItem(novoItemInput.value); //Ele tá pegando o valor que digitamos e enviamos, e passando para a função adicionarItem(texto) {...}
});

//Função para adicionar um Item na nossa lista de tarefas
function adicionarItem(texto) {
    const item = document.createElement("li"); //Criando um novo elemento li e armazenando em uma constante
    const input = document.createElement("input");

    input.disabled = true; //Definindo a propriedade disabled do input sendo verdadeiro, ent estamos desabilitando o input
    input.value = texto; //Definindo o valor do input como texto... <input value="<- este value"> que está no HTML

    const containerBotoes = document.createElement("div"); //Criando e armazenando uma div na constante containerBotoes. Para agrupar os botões e guardar na variável containerBotoes
    const botaoEditar = document.createElement("button"); // botaoEditar está sendo usado na linha 80 a 108
    const botaoApagar = document.createElement("button"); //Criado e armazenado na constante botaoApagar 

    botaoEditar.innerText = "Editar"; //Adicionando um texto para o botaoEditar
    botaoApagar.innerText = "Apagar"; //Adicionando um texto para o botaoApagar


    //Função para remover um Item da nossa lista de tarefas vv

    //Agora precisamos fazer com que esse for com a funcionalidade de apagar um li inteiro, funcione no adicionarItem... Quando criamos uma Task via function adicionarItem(texto){...}
    //No caso, ele estava fora a function adicionarItem(), agora como colocamos dentro dela, deve funcionar. Agora ele apaga os Itens de forma dinâmica
    botaoApagar.addEventListener("click", () => {
        //Selecionando o elemento pai do botao - com parentNode
        //No caso, o elemento pai dele é o .container-botoes-editar-apagar
        //Então, selecionamos o Elemento pai do .container-botoes-editar-apagar, que é o <li>
        botaoApagar.parentNode.parentNode.remove();
    });

    botaoEditar.classList.add("botao-editar"); //classList representa a lista de classes do elemento e o método add para adicionar uma classe
    botaoApagar.classList.add("botao-apagar");//Resumindo, adicionando uma classe para o elemento

    containerBotoes.classList.add("container-botoes-editar-apagar");
    containerBotoes.append(botaoEditar); //append - acrescentar / Usado para adicionar conteúdo ao final de um elemento selecionado
    containerBotoes.append(botaoApagar);//No caso, está acrescentando o botaoApagar dentro de containerBotoes

    const containerBotoesSalvarCancelar = document.createElement("div");
    const botaoSalvar = document.createElement("button");
    const botaoCancelar = document.createElement("button");
    containerBotoesSalvarCancelar.classList.add("container-botoes-salvar-cancelar", "esconder-botoes");

    botaoSalvar.innerText = "Salvar";
    botaoCancelar.innerText = "Cancelar";

    botaoSalvar.classList.add("botao-salvar");
    botaoCancelar.classList.add("botao-cancelar");

    containerBotoesSalvarCancelar.append(botaoSalvar);
    containerBotoesSalvarCancelar.append(botaoCancelar);

    item.append(input); //Acrescentando input dentro de item (li)
    item.append(containerBotoes); //Acrescentando containerBotoes dentro de item (li)
    item.append(containerBotoesSalvarCancelar); //Acrescentando containerBotoesSalvarCancelar dentro do item (li) / Mas eles não vão aparecer, pois estão definidos por padrão como esconder-botoes

    //==============================================================================================

    //Lógica para botaoEditar funcionar na lista de tarefas - alteramos o botao para botaoEditar... Está é a lógica para funcionar quando adicionamos pelo botão-adicionar

    botaoEditar.addEventListener("click", () => {
        const input = botaoEditar.parentNode.parentNode.querySelector("input"); //Indo do botaoEditar para o pai dele (.container-botoes-editar-apagar) e indo para o dele também (li), selecionando o seu input

        input.disabled = false; //Deixando o desabled do input como falso, habilitando a escrita dele
        
        const fimInput = input.value.length;
        input.setSelectionRange(fimInput, fimInput); //Set -> Definir,Range -> extensão, Selection -> Seleção. Sim isso mesmo
        input.focus(); //Ele foca o cursor no input


        //Agora precisamos fazer com que os botõesEditar e botõesApagar sumam e apareçam os Salvar e Cancelar
        const botoesSalvarCancelar = botaoEditar.parentNode.parentNode.querySelector(".container-botoes-salvar-cancelar");
        botoesSalvarCancelar.classList.remove("esconder-botoes");
        botaoEditar.parentNode.classList.add("esconder-botoes");

        //Precisamos salvar o valor do input para não perder quando formos editar ele
        const conteudoItem = input.value;

        const botaoCancelar = botoesSalvarCancelar.querySelector(".botao-cancelar");

        //Quando o botão Cancelar for clicado, queremos restituir o valor original do input, desabilitar o input, esconder os botões Salvar e Cancelar e exibir os botões Editar e Cancelar
        botaoCancelar.addEventListener("click", () => {
            input.value = conteudoItem;
            input.disabled = true;

            botoesSalvarCancelar.classList.add("esconder-botoes");
            botaoEditar.parentNode.classList.remove("esconder-botoes");
        })

        //Lógica para o botaoSalvar
        botaoSalvar.addEventListener("click", () => {
        const input = botaoSalvar.parentNode.parentNode.querySelector("input");
        input.disabled = true;

        const botoesEditarApagar = botaoSalvar.parentNode.parentNode.querySelector(".container-botoes-editar-apagar");

        botaoSalvar.parentNode.classList.add("esconder-botoes"); //Escondendo os botoes Salvar e cancelar
        botoesEditarApagar.classList.remove("esconder-botoes"); //Removendo a classe esconder-botoes do botoesEditarApagar

    });
    })

    listaItens.append(item); //Acrescentando item dentro de listaItens (Que no caso é um ul)

    /*Então a estrutura fica: 

    <listaItens>
        <item>
            <input>
            <containerBotoes>
                <botaoEditar>
                <botaoApagar>
            </containerBotoes>
        </item>
    </listaItens>          
    */

    novoItemInput.value = ""; //Apagando o input que tinhamos digitado um texto

    botaoAdicionarItem.disabled = true; //Desabilitando o botaoAdicionarItem, pois o novoItemInput não faz dispara a função botaoAdicionarItem
    botaoAdicionarItem.classList.add("desativado") //Também precisamos adicionar a classe manualmente para o botaoAdicionarItem
    //^^^ Com isso ele não buga mais e também não conseguir adicionar mais itens vazios a lista de tarefas

}

//Função para remover um Item da nossa lista de tarefas
const botoesApagar = document.querySelectorAll(".botao-apagar");

for (let botao of botoesApagar) {
    botao.addEventListener("click", () => {
            //Selecionando o elemento pai do botao - com parentNode
            //No caso, o elemento pai dele é o .container-botoes-editar-apagar
            //Mais uma vez (+1 parentNode), selecionamos o Elemento pai do .container-botoes-editar-apagar, que é o <li>
            botao.parentNode.parentNode.remove();
    });
}


//Função para Editar o texto da lista de tarefas
const botoesEditar = document.querySelectorAll(".botao-editar");

for (let botao of botoesEditar) {
    botao.addEventListener("click", () => {
        const input = botao.parentNode.parentNode.querySelector("input"); //Indo do botaoEditar para o pai dele (.container-botoes-editar-apagar) e indo para o dele também (li)

        input.disabled = false; //Deixando o desabled do input como falso, habilitando a escrita dele
        
        const fimInput = input.value.length;
        input.setSelectionRange(fimInput, fimInput); //Set -> Definir,Range -> extensão, Selection -> Seleção. Sim isso mesmo
        input.focus(); //Ele foca o cursor no input


        //Agora precisamos fazer com que os botõesEditar e botõesApagar sumam e apareçam os Salvar e Cancelar
        const botoesSalvarCancelar = botao.parentNode.parentNode.querySelector(".container-botoes-salvar-cancelar");
        botoesSalvarCancelar.classList.remove("esconder-botoes");
        botao.parentNode.classList.add("esconder-botoes");

        //Precisamos salvar o valor do input para não perder quando formos editar ele
        const conteudoItem = input.value;

        const botaoCancelar = botoesSalvarCancelar.querySelector(".botao-cancelar");

        //Quando o botão Cancelar for clicado, queremos restituir o valor original do input, desabilitar o input, esconder os botões Salvar e Cancelar e exibir os botões Editar e Cancelar
        botaoCancelar.addEventListener("click", () => {
            input.value = conteudoItem;
            input.disabled = true;

            botoesSalvarCancelar.classList.add("esconder-botoes"); //Adicionando a classe esconder-botoes para esconder os botoesSalvarCancelar
            botao.parentNode.classList.remove("esconder-botoes"); //Removendo a classe esconder-botoes da div (O pai do botao/botaoEditar) para exibir o botaoEditar e botaoApagar
        })
    })
}


//Função para Salvar o texto da lista de tarefas
//Quando o botão Salvar for clicado, quero desabilitar o input, salvar o conteúdo alterado e esconder os botoes Salvar / Cancelar e exibir os botões Editar / Apagar
const botoesSalvar = document.querySelectorAll(".botao-salvar");

for (let botao of botoesSalvar) {
    botao.addEventListener("click", () => {
        const input = botao.parentNode.parentNode.querySelector("input");
        input.disabled = true;

        const botoesEditarApagar = botao.parentNode.parentNode.querySelector(".container-botoes-editar-apagar");

        botao.parentNode.classList.add("esconder-botoes"); //Escondendo os botoes Salvar e cancelar
        botoesEditarApagar.classList.remove("esconder-botoes"); //Removendo a classe esconder-botoes do botoesEditarApagar

    });
}