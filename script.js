const botoesOuvir = document.querySelectorAll("button");

botoesOuvir.forEach((botao) => {
    botao.addEventListener("click", () => {
        const cardMusica = botao.closest("article");
        const tituloMusica = cardMusica.querySelector("h3").textContent;

        alert(`Você selecionou a música: ${tituloMusica}`);
    });
});
