function ativarMenu(){
    let botao = document.querySelector('.btn_menu');
    let menu = document.querySelector('.menu');
    let body = document.querySelector('section')
    body.classList.toggle('active')
    menu.classList.toggle('active')
    botao.classList.toggle('active')
}