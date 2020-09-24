let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16*box,16*box);
}

function criaSnake(){
    context.fillStyle = "black";
    context.fillRect(8*box, 8*box,32,32);
}

criarBG();
criaSnake();