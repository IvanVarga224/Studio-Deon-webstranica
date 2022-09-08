const btnTop = document.getElementById('btn_top');

function Totop(){
    document.documentElement.scrollTop = 0;
}

btnTop.addEventListener('click', Totop);