// selecionar os elementos HTML que serão manipulados

var btnLgpd = document.querySelector('#btn-lgpd');
var lgpd = document.querySelector('#lgpd');

// console.log(btnLgpd);
// console.log(lgpd);

//Verificar se na máquina/navegador do usuário já existe a informação de que ele fechou a lgpd

if(localStorage.getItem('fechouLgpd') == 'sim'){
    //alert('ok');
    lgpd.classList.add('d-none');
}

// Associar um evento de clik ao clicar no botão btnLgpd

btnLgpd.addEventListener('click', function(){
    // console.log('clicou');

    lgpd.classList.add('d-none');

    //guardando uma informação na máquina do usuário (chama-se Storage!)

    //sessionStorage -> guarda uma informação apenas enquanto o usuário navega
    // sessionStorage.setItem('fechouLgpd', 'sim');

    //localStorage -> guarda uma informação na máquina do usuário (em inspecionar/aplicativo/armazenamento local), que só sai quando ele limpa o histórico de navegação
    localStorage.setItem('fechouLgpd', 'sim');

})

