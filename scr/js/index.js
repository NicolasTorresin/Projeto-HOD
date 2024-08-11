const botoesCarrossel = (document.querySelectorAll(".botao"));

const imagens = document.querySelectorAll(".imagem");

const  informacoes = document.querySelectorAll(".Informacoes")

botoesCarrossel.forEach((botao, indice) => {


    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".selecionado");

        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");

        console.log(indice);
        console.log(imagens[indice]);
        imagens[indice].classList.add("ativa");

const informacoesAtiva = document.querySelector(".Informacoes.ativa");
informacoesAtiva.classList.remove("ativa");

informacoes[indice].classList.add("ativa");

    });
});