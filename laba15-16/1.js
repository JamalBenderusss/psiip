var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
class Bird {
    constructor(src) {
        this.image = new Image();
        this.image.src = src;
        this.xPos = 10;
        this.yPos = 150;
        this.gravity = 1.5;
    }  
      moveUp() {
        this.yPos -= 25;
        fly.play();
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.xPos, this.yPos, this.image.width, this.image.height);
    }
}

var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bg.src = "2.png";
fg.src = "5.png";
pipeUp.src = "3.png";
pipeBottom.src = "4.png";

var bird = new Bird("1.png");

// Звуковые файлы
var fly = new Audio();
var score_audio = new Audio();

fly.src = "fly.mp3";
score_audio.src = "score.mp3";

var gap = 90;

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", () => bird.moveUp());

// Создание блоков
var pipe = [];

pipe[0] = {
 x : cvs.width,
 y : 0
}

var score = 0;
// Позиция птички
var xPos = 10;
var yPos = 150;
var grav = 1.5;

function draw() {
 ctx.drawImage(bg, 0, 0, cvs.width * 1.5, cvs.height); // Увеличение фона по ширине

 for(var i = 0; i < pipe.length; i++) {
 ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
 ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

 pipe[i].x--;

 if(pipe[i].x == 125) {
 pipe.push({
 x : cvs.width,
 y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
 });
 }

 // Отслеживание прикосновений
 if(bird.xPos + bird.image.width >= pipe[i].x
 && bird.xPos <= pipe[i].x + pipeUp.width
 && (bird.yPos <= pipe[i].y + pipeUp.height
 || bird.yPos + bird.image.height >= pipe[i].y + pipeUp.height + gap) || bird.yPos + bird.image.height <= fg.height) {
 location.reload(); // Перезагрузка страницы
 }

 if(pipe[i].x == 5) {
 score++;
 score_audio.play();
 }
 }

 ctx.drawImage(fg, 0, cvs.height - fg.height, cvs.width * 1.5, fg.height); // Увеличение переднего плана по ширине
 bird.draw(ctx); // Отрисовка птички

 bird.yPos += bird.gravity;

 ctx.fillStyle = "#000";
 ctx.font = "24px Verdana";
 ctx.fillText("Счет: " + score, 10, cvs.height - 20);

 requestAnimationFrame(draw);
}

pipeBottom.onload = draw;