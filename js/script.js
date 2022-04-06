var Casa1 = document.querySelector("div#casa-1")
var Casa2 = document.querySelector("div#casa-2")
var Casa3 = document.querySelector("div#casa-3")
var Casa4 = document.querySelector("div#casa-4")
var Casa5 = document.querySelector("div#casa-5")
var Casa6 = document.querySelector("div#casa-6")
var Casa7 = document.querySelector("div#casa-7")
var Casa8 = document.querySelector("div#casa-8")
var Casa9 = document.querySelector("div#casa-9")

var emJogo = 0
var vez = 0
var valor = [];

function verificar(){
    if((valor[1] == "X" && valor[2] == "X" && valor[3] == "X")
    || (valor[4] == "X" && valor[5] == "X" && valor[6] == "X")
    || (valor[7] == "X" && valor[8] == "X" && valor[9] == "X")
    || (valor[7] == "X" && valor[8] == "X" && valor[9] == "X")
    || (valor[1] == "X" && valor[5] == "X" && valor[9] == "X")
    || (valor[3] == "X" && valor[5] == "X" && valor[7] == "X")){
        alert("Jogador X ganhou")
    }
    if((valor[1] == "O" && valor[2] == "O" && valor[3] == "O")
    || (valor[4] == "O" && valor[5] == "O" && valor[6] == "O")
    || (valor[7] == "O" && valor[8] == "O" && valor[9] == "O")
    || (valor[7] == "O" && valor[8] == "O" && valor[9] == "O")
    || (valor[1] == "O" && valor[5] == "O" && valor[9] == "O")
    || (valor[3] == "O" && valor[5] == "O" && valor[7] == "O")){
        alert("Jogador O ganhou")
    }
}

function ClickCasa(n){
    if(emJogo == 0){
        if(vez == 0){
            document.querySelector(`div#casa-${n}`).innerHTML = '<p class="jogadores" id="jogador-1">X</p>'
            vez++
            valor[n] = "X"
        }
        else{
            document.querySelector(`div#casa-${n}`).innerHTML = '<p class="jogadores" id="jogador-2">O</p>'
            vez--
            valor[n] = "O"
        }
        verificar()
    }
}