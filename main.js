//캔버스 세팅

let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=600;
document.body.appendChild(canvas);

let backgroundImage, buttonImage;
function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = "images/ball.png";

    buttonImage = new Image();
    buttonImage.src = "images/startButton.png";
}

let keysDown={};
function setupKeyboardListener(){
    document.addEventListener("keydown", function(event){
        keysDown[event.keyCode] = true;
        console.log("값", keysDown);
    });
    document.addEventListener("keyup", function(event){
        delete keysDown[event.keyCode];
    });

    if(event.keyCode == 32){
    }
}

function generateRandomValue(min,max){
    let randomNum = Math.floor(Math.random()*(max-min+1))+min;
    return randomNum;
}

let num;
function createNumber(){
    for(let i=1; i<=generateRandomValue(1,45); i++){

    }

}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(buttonImage, 300, 350, 400, 200);
}

function main(){
    render();
    requestAnimationFrame(main);
}

loadImage();
//setupKeyboardListener();
main();