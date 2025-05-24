//Efeito de transição no cabeçalho quando ocorrer a rolagem no site
window.addEventListener('scroll', function() {
    const cabecalho = document.querySelector('header');
    const navBar = document.querySelector('nav');

    if (window.scrollY > 0) { //quando houver rolagem, ou seja, o eixo y (vertical) for maior que zero
        cabecalho.classList.add('ativado');
        navBar.classList.add('ativado');
    } else {
        cabecalho.classList.remove('ativado');
        navBar.classList.remove('ativado');
    }
});