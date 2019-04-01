var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");//вид игры 2д 

var bird=new Image();//
var bg= new Image();//задний фон
var fg=new Image();//передний фон
var pipeUp=new Image();// припятствие сверху
var pipeBottom=new Image();//припятствие снизу 
//подгружаем картики
bird.src = "img/bird.png"; // Указание нужного изображения
bg.src = "img/bg.png"; // Аналогично
fg.src = "img/fg.png"; // Аналогично
pipeUp.src = "img/pipeUp.png"; // Аналогично
pipeBottom.src = "img/pipeBottom.png"; // Аналогично


// Звуковые файлы
var fly = new Audio();
var score_audio = new Audio();

fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";


var gap=90;//расстояние между блоками чтобы птичка могла свободна в них пройти


//При нажатии на кукую-либо кнопку птичка подлетает
document.addEventListener("keydown", moveUp);
function moveUp(){
	yPos -= 20;
	fly.play();
}


//создаем блоки
var pipe = [];
pipe[0] = {
	x : cvs.width,
	y : 0
}


var score = 0;
//ПОЗИЦИЯ ПТИЧКИ
var xPos=10;
var yPos=150;
var grav=1.5;//меняем позицию птички на 1 по y
// Звуковые файлы
var fly = new Audio(); // Создание аудио объекта
var score_audio = new Audio(); // Создание аудио объекта

fly.src = "audio/fly.mp3"; // Указание нужной записи
score_audio.src = "audio/score.mp3"; // Аналогично
//создаем функцию для открисовки обьектов в канвасе
function draw() {
 ctx.drawImage(bg, 0, 0);

 for(var i = 0; i < pipe.length; i++) {
 ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
 ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

 pipe[i].x--;
//если сторый блок на позиции 125 мы будем создвать новый блокюкаждый раз добавляем новый обьект в массив pipe.По x всегда позицияя одинаковая(чтоб они появлялись за экраном) а по y ранодом
 if(pipe[i].x == 125) {
 pipe.push({
 x : cvs.width,
 y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
 });
 }
//проверка на столкновение птицы и блока (если птица в пределах ширины блока и в пределах высоты этого блока то это столкновение)
 if(xPos + bird.width >= pipe[i].x
 && xPos <= pipe[i].x + pipeUp.width
 && (yPos <= pipe[i].y + pipeUp.height
 || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)//если мы нижу пола
  || yPos + bird.height >= cvs.height - fg.height) {
 location.reload(); // Перезагрузка страницы
 }

 if(pipe[i].x == 5) {
 score++;
 score_audio.play();
 }
 }

 ctx.drawImage(fg, 0, cvs.height - fg.height);
 ctx.drawImage(bird, xPos, yPos);

 yPos += grav;

 ctx.fillStyle = "#000";//цвет счета
 ctx.font = "24px Verdana";//шрифт счета
 ctx.fillText("Счет: " + score, 10, cvs.height - 20);//выводи текст 

 requestAnimationFrame(draw);
}

pipeBottom.onload = draw;//необходимо чтобы все изображения были загружены а только потом вызывалась bird.
//Пишем проверку если загружена последняя картинка pipeBootom, то вызовем draw
