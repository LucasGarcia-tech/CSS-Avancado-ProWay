function criaEfeito(event) {
    // Puxando o button do HTML e armazenando em uma variavel
    var botao = event.currentTarget;

    // Criando um spam para fazer o efeito

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const diametro = Math.max(botao.clientWidth,botao.clientHeight);
    console.log(diametro)
    

    ripple.style.width = ripple.style.height = `${diametro}px`;

    ripple.style.left = `${event.clientX - botao.offsetLeft - diametro / 2}px`;

    ripple.style.top = `${event.clientY - botao.offsetTop - diametro / 2}px`;

    //Adicionar o span ao meu Botão

    botao.appendChild(ripple);

    //Executa depois de X segundos

    setTimeout(() => {
        ripple.remove();
    },500)

}