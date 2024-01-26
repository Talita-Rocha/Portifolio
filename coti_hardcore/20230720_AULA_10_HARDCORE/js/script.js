
// Para comentar no JS: // ou CTRL + ; ou /* */ 

// alert('JS ok');

// variáveis (VAR, CONST, LET)

// Selecionar um elemento do HTML

var btnMenu = document.querySelector('.btn-menu'); //pesquisar sobre o document
var menu = document.querySelector('.menu'); 

// console.log(btnMenu);

// Evento de Clique
// Ao clicar no btnMenu

btnMenu.addEventListener('click', function(){
    // alert('clicou');

    // menu.classList.add('menu-open');
    // menu.classList.remove('menu-open'); 
    // o método toggle assume a função do add e do remove
    menu.classList.toggle('menu-open');


})