var box = window.document.querySelectorAll('div.box');
var vez = 0;
var emJogo = false;

start();

function start() {
    emJogo = true;
    for (i = 0; i < 9; i++) {
        box[i].innerHTML = '';
        box[i].onclick = function() {
            if (vez == 0) {
                this.innerHTML = 'X';
                this.style.color = 'blue';
                vez++;
            } else {
                this.innerHTML = 'O';
                this.style.color = 'red';
                vez--;
            }
            verifica();
            this.onclick = false;
        }
    }
}

function verifica() {
    if ((box[0].innerHTML == 'X' && box[1].innerHTML == 'X' && box[2].innerHTML == 'X')
    ||  (box[3].innerHTML == 'X' && box[4].innerHTML == 'X' && box[5].innerHTML == 'X')
    ||  (box[6].innerHTML == 'X' && box[7].innerHTML == 'X' && box[8].innerHTML == 'X')
    ||  (box[0].innerHTML == 'X' && box[4].innerHTML == 'X' && box[8].innerHTML == 'X')
    ||  (box[2].innerHTML == 'X' && box[4].innerHTML == 'X' && box[6].innerHTML == 'X')
    ||  (box[0].innerHTML == 'X' && box[3].innerHTML == 'X' && box[6].innerHTML == 'X')
    ||  (box[1].innerHTML == 'X' && box[4].innerHTML == 'X' && box[7].innerHTML == 'X')
    ||  (box[2].innerHTML == 'X' && box[5].innerHTML == 'X' && box[8].innerHTML == 'X')) {
        document.querySelector('.container').classList.toggle('hidden');
        document.querySelector('.vencedor').innerHTML = `Jogador X venceu!`;
        emJogo = false;
    }
    if ((box[0].innerHTML == 'O' && box[1].innerHTML == 'O' && box[2].innerHTML == 'O')
    ||  (box[3].innerHTML == 'O' && box[4].innerHTML == 'O' && box[5].innerHTML == 'O')
    ||  (box[6].innerHTML == 'O' && box[7].innerHTML == 'O' && box[8].innerHTML == 'O')
    ||  (box[0].innerHTML == 'O' && box[4].innerHTML == 'O' && box[8].innerHTML == 'O')
    ||  (box[2].innerHTML == 'O' && box[4].innerHTML == 'O' && box[6].innerHTML == 'O')
    ||  (box[0].innerHTML == 'O' && box[3].innerHTML == 'O' && box[6].innerHTML == 'O')
    ||  (box[1].innerHTML == 'O' && box[4].innerHTML == 'O' && box[7].innerHTML == 'O')
    ||  (box[2].innerHTML == 'O' && box[5].innerHTML == 'O' && box[8].innerHTML == 'O')) {
        document.querySelector('.container').classList.toggle('hidden');
        document.querySelector('.vencedor').innerHTML = `Jogador O venceu!`;
        emJogo = false;
    }
    if ((box[0].innerHTML != '' && box[1].innerHTML != '' && box[2].innerHTML != '')
    &&  (box[3].innerHTML != '' && box[4].innerHTML != '' && box[5].innerHTML != '')
    &&  (box[6].innerHTML != '' && box[7].innerHTML != '' && box[8].innerHTML != '')
    &&  emJogo == true) {
        document.querySelector('.container').classList.toggle('hidden');
        document.querySelector('.vencedor').innerHTML = `Deu velha!`;
        emJogo = false;
    }
}

window.document.querySelector('#play-again').onclick = function() {
    document.querySelector('.container').classList.toggle('hidden');
    start();
}