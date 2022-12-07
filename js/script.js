function initMenuMobile() {
    const btnMobile = document.querySelector('#btn-mobile');

    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        const nav = document.querySelector('#nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
        if (active) event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
}
initMenuMobile();

function initLinksAtivos() {
    const links = document.querySelectorAll('.header-menu a');

    function ativarLink(link) {
        const url = location.href;
        const href = link.href;
        if (url.includes(href)) link.classList.add('ativo');
    }
    links.forEach(ativarLink);
}
initLinksAtivos();

function initProdutoAtivo() {
    const parametros = new URLSearchParams(location.search);

    function ativarProduto(parametro) {
        const elemento = document.getElementById(parametro);
        if (elemento) elemento.checked = true;
    }
    parametros.forEach(ativarProduto);
}
initProdutoAtivo();

function initPerguntaAtiva() {
    const perguntas = document.querySelectorAll('.perguntas button');

    function ativarPergunta(event) {
        const pergunta = event.currentTarget;
        const controls = pergunta.getAttribute('aria-controls');
        const resposta = document.getElementById(controls);

        resposta.classList.toggle('ativa');
        const ativa = resposta.classList.contains('ativa');
        pergunta.setAttribute('aria-expanded', ativa);
    }

    function eventosPerguntas(pergunta) {
        pergunta.addEventListener('click', ativarPergunta);
    }

    perguntas.forEach(eventosPerguntas);
}
initPerguntaAtiva();

function initGaleriaBicicleta() {
    const galeria = document.querySelectorAll('.bicicleta-imagens img');
    const galeriaContainer = document.querySelector('.bicicleta-imagens');

    function trocarImagem(event) {
        const img = event.currentTarget;
        const media = matchMedia('(min-width: 1000px)').matches;
        if (media) galeriaContainer.prepend(img);
    }

    function eventosGaleria(img) {
        img.addEventListener('click', trocarImagem);
    }

    galeria.forEach(eventosGaleria);
}
initGaleriaBicicleta();

//Animação
if(window.SimpleAnime){
    new SimpleAnime();
}
