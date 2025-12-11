function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector("#profile img");
    
    // if (html.classList.contains('light')) {
    //     html.classList.remove('light');
    // } else {
    //     html.classList.add('light');
    // }

    //Jeito mais simples de fazer, ele faz toda a mesma lógica do if acima
    html.classList.toggle('light');

    //Pegar a tag img e substituir a imagem. Se tiver light mode, adicionar imagem light, se tiver sem light mode, imagem normal    
    if (html.classList.contains('light')) {
        img.setAttribute("src", "./assets/avatar-light.jpg");
    } else {
        img.setAttribute("src", "./assets/foto-enzo.jpeg");
    }
}