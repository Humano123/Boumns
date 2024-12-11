// Seleciona o formulário
const form = document.getElementById("loginForm");

// Verifica se o nome do usuário já está armazenado no localStorage
const nomeSalvo = localStorage.getItem("nomeUsuario");

// Verifica se a página atual é "index.html", "menu.html" ou "casa.html"
const currentPage = window.location.pathname.split("/").pop();

if (nomeSalvo) {
    // Se já houver um nome salvo e a página não for "menu.html" ou "casa.html", redireciona para "menu.html"
    if (currentPage !== "menu.html" && currentPage !== "casa.html" && currentPage !== "vbs.html" && currentPage !== "batch.html" && currentPage !== "aprender.html" && currentPage !== "phone.html" && currentPage !== "404.html") {
        window.location.href = "menu.html";
    }
} else {
    // Se não houver nome salvo, redireciona para "index.html" caso não esteja lá
    if (currentPage !== "index.html") {
        window.location.href = "index.html";
    }

    // Adiciona um evento de envio ao formulário na página de login
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Obtém o valor do campo de texto
        const nome = document.getElementById("nomeLOGIN").value;

        if (nome) {
            // Armazena no LocalStorage
            localStorage.setItem("nomeUsuario", nome);

            // Redireciona para "menu.html"
            window.location.href = "menu.html";
        } else {
            // Exibe uma mensagem de erro caso o campo esteja vazio
            alert("Por favor, insira um nome.");
        }
    });
}
