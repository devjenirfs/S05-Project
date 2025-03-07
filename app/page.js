document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const reservarBtn = document.getElementById("reservar-btn");
    const adicionarNoticiaBtn = document.getElementById("adicionar-noticia");
    const tipoArmarioSelect = document.getElementById("tipoArmario");
    const mensagemContainer = document.getElementById("mensagem");
    const noticiasContainer = document.getElementById("noticias-container");

    // Aplicar o tema salvo no localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark");
    }

    // Alternar tema e salvar no localStorage
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
        });
    }

    // Reservar armário
    if (reservarBtn && tipoArmarioSelect && mensagemContainer) {
        reservarBtn.addEventListener("click", () => {
            const tipoSelecionado = tipoArmarioSelect.value;
            const numeroArmario = tipoSelecionado === "padrao" ? "12B" : "7C";

            mensagemContainer.innerHTML = `
                ✅ Olá, Raphael!<br/>
                📌 Seu armário <strong>${numeroArmario}</strong> foi reservado com sucesso!
            `;
        });
    }

    // Adicionar notícia dinamicamente
    if (adicionarNoticiaBtn && noticiasContainer) {
        adicionarNoticiaBtn.addEventListener("click", () => {
            const novaNoticia = document.createElement("div");
            novaNoticia.classList.add("noticia");
            novaNoticia.textContent = "📢 Nova Notícia: Descrição da nova notícia.";
            noticiasContainer.appendChild(novaNoticia);
        });
    }
});
