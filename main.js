//캔버스 세팅

let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width=1000;
canvas.height=600;
document.body.appendChild(canvas);

let backgroundImage, buttonImage;
let numImage = new Array();
function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = "images/ball.png";

    buttonImage = new Image();
    buttonImage.src = "images/startButton.png";

    for(let i=1; i<=45; i++){
        numImage[i] = new Image();
        numImage[i].src = `images/number${i}.png`;
    }
}

let keysDown={};
function setupKeyboardListener(){
    document.addEventListener("keydown", function(event){
        keysDown[event.keyCode] = true;
    });
    document.addEventListener("keyup", function(event){
        delete keysDown[event.keyCode];
        
        if(event.keyCode == 32){
            createNumber();
        }
    
    });
}

function generateRandomValue(min,max){
    let randomNum = Math.floor(Math.random()*(max-min+1))+1;
    return randomNum;
}

let num = new Array();
let n;
function createNumber(){
    num[1] = generateRandomValue(1,45);
    let i = 2;
    while(i<=7){
        n = generateRandomValue(1,45);
    
        let b = 0;
        for(let j=1; j<=i-1; j++){
            if(n == num[j]){
                b=1;
            }
        }
        if(b == 0){
            num[i] = n;
            i++;
        }

    }

}

function render(){
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(buttonImage, 300, 350, 400, 200);
    if(num[1]!=null) ctx.drawImage(numImage[num[1]], 130, 190, 100, 100);
    if(num[2]!=null) ctx.drawImage(numImage[num[2]], 237, 190, 100, 100);
    if(num[3]!=null) ctx.drawImage(numImage[num[3]], 345, 190, 100, 100);
    if(num[4]!=null) ctx.drawImage(numImage[num[4]], 450, 190, 100, 100);
    if(num[5]!=null) ctx.drawImage(numImage[num[5]], 555, 190, 100, 100);
    if(num[6]!=null) ctx.drawImage(numImage[num[6]], 662, 190, 100, 100);
    if(num[7]!=null) ctx.drawImage(numImage[num[7]], 790, 190, 100, 100);
    
}

function main(){
    render();
    requestAnimationFrame(main);
}

loadImage();
setupKeyboardListener();
main();
