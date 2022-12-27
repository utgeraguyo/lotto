let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width=3000;
canvas.height=1800;
document.body.appendChild(canvas);

let backgroundImage, buttonImage;
let numImage = new Array();
function loadImage(){
    backgroundImage = new Image();
    backgroundImage.src = "images/ball.png";

    for(let i=1; i<=20; i++){
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
    num[1] = generateRandomValue(1,20);
    let i = 2;
    while(i<=5){
        n = generateRandomValue(1,20);
    
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
    if(num[1]!=null) ctx.drawImage(numImage[num[1]], 670, 570, 300, 300);
    if(num[2]!=null) ctx.drawImage(numImage[num[2]], 990, 570, 300, 300);
    if(num[3]!=null) ctx.drawImage(numImage[num[3]], 1310, 570, 300, 300);
    if(num[4]!=null) ctx.drawImage(numImage[num[4]], 1630, 570, 300, 300);
    if(num[5]!=null) ctx.drawImage(numImage[num[5]], 1950, 570, 300, 300);    
}

function main(){
    render();
    requestAnimationFrame(main);
}

loadImage();
setupKeyboardListener();
main();
