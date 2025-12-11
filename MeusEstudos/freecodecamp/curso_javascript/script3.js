const meuFormulario = document.querySelector("#meu-formulario");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const mensagem = document.querySelector(".mensagem");
const usuarios = document.querySelector("#usuarios");

meuFormulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(e) {
    e.preventDefault();

    //Caso o input não tenha nenhum conteúdo
    if(inputNome.value === "" || inputEmail.value === "") {
        mensagem.style.color = "red";
        mensagem.innerText = "Por favor, preencha todos os campos";

        //Apagando a mensagem após um determinado tempo
        setTimeout(() => mensagem.innerText = "", 3000);
    } else {
        
        //criando um elemento li, com createElement
        const li = document.createElement("li");

        //Criando um span para colocar o texto do inputNome e inputEmail
        const span = document.createElement("span");
        //span recebendo os valores digitados pelo usuário
        span.innerText = `${inputNome.value}: ${inputEmail.value}`

        //E passando os valores do span para o li via appendChild
        li.appendChild(span); //append -> anexar, Child -> filho

        //Adicionando o li (com o span dentro) na lista de usuarios
        usuarios.appendChild(li); //usuarios -> elemento pai da lista

        //Limpa o campo input
        inputNome.value = "";
        inputEmail.value = "";
    }    
}
