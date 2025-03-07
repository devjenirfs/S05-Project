document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const reservarBtn = document.getElementById("reservar-btn");
    const adicionarNoticiaBtn = document.getElementById("adicionar-noticia");
    const tipoArmarioSelect = document.getElementById("tipoArmario");
    const mensagemContainer = document.getElementById("mensagem");
    const noticiasContainer = document.getElementById("noticias-container");

    // Verifica se há um tema salvo no localStorage e aplica
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    // Alterna o tema ao clicar no botão
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            // Atualiza o localStorage com o estado atual
            const novoTema = document.body.classList.contains("dark") ? "dark" : "light";
            localStorage.setItem("theme", novoTema);
        });
    }

    // Função para reservar armário
    if (reservarBtn && tipoArmarioSelect && mensagemContainer) {
        reservarBtn.addEventListener("click", () => {
            const tipoSelecionado = tipoArmarioSelect.value;
            const numeroArmario = tipoSelecionado === "padrao" ? "12B" : "7C";
            
            mensagemContainer.innerHTML = `✅ Olá, Jeniffer!<br/>📌 Seu armário <strong>${numeroArmario}</strong> foi reservado com sucesso!`;
        });
    }

    // Função para adicionar notícia dinamicamente
    if (adicionarNoticiaBtn && noticiasContainer) {
        adicionarNoticiaBtn.addEventListener("click", () => {
            const novaNoticia = document.createElement("div");
            novaNoticia.classList.add("noticia");
            novaNoticia.textContent = "📢 Nova Notícia: Descrição da nova notícia.";
            noticiasContainer.appendChild(novaNoticia);
        });
    }
});