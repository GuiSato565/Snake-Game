let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 32;
let snake = []; //criar cobrinha como lista, já que ela vai ser uma série de coordenadas, que quando pintadas, criam os quadradinhos
snake[0] ={
    x: 8 * box,
    y: 8 * box
}

//Cria o backgroun
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo usando x e y e a largura e altura setadas
}

//Cria a corbrinha
function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();