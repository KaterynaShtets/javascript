var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
var width=canvas.width;
var height=canvas.height;
var blockSize=10;
var widthInBlock = width / blockSize;
var heigthInBlock = height/blockSize ;
var score=0;
function drawBorder () {
	ctx.fillStyle='Grey';
	ctx.fillRect(0,0,width,blockSize);
	ctx.fillRect(0,height-blockSize,width,blockSize);
	ctx.fillRect(0,0,blockSize,height);
	ctx.fillRect(width-blockSize,0,blockSize,height);
}
function drawScore(){	
	ctx.font='20 px Courier';
	ctx.fillStyle =' Black';
	ctx.textAlign = 'left';
	ctx.textBaseLine= 'top';
	ctx.fillText('Счёт:' + score,blockSize+20,blockSize+20)
}
function gameOver(){
	clearInterval(intervalId);
	ctx.font='60 px Courier';
	ctx.fillStyle =' Black';
	ctx.textAlign = 'center';
	ctx.textBaseLine= 'middle';
	ctx.fillText('Конец игры',width/2,height/2);
}
function circle(x,y,radius,fillCircle){
	ctx.beginPath();
	ctx.arc(x,y,radius,0,Math.PI*2,false);
	if(fillCircle){
		ctx.fill();
	}
	else{
		ctx.stroke();
	}
}
  class Block{
	constructor(col,row){
	this.col=col;
	this.row=row;

}
drawSquare(color){
	var x=this.col*blockSize;
	var y=this.row*blockSize;
	ctx.fillStyle=color;
	ctx.fillRect(x,y,blockSize,blockSize)
}
drawCircle(color){
	var centerX=this.col*blockSize+blockSize/2;
	var centerY=this.row*blockSize+blockSize/2;
	ctx.fillStyle=color;
	circle(centerX,centerY,blockSize/2,true)
}
equal(otherBlock){
	return this.col===otherBlock.col && this.row===otherBlock.row
}
}
class Snake{
	constructor(){
	this.segments=[
       new Block(7,5),
       new Block(6,5),
       new Block(5,5)
	];
	this.direction='right';
	this.nextDirection='right'
}
draw(){
	for(var i=0;i<this.segments.length;i++){
		this.segments[i].drawSquare('Blue')
		this.segments[0].drawSquare('Red')
	}
}
move(){
	var head=this.segments[0];

	this.direction=this.nextDirection;
	var newHead;
	if(this.direction==='right'){
		newHead=new Block(head.col+1,head.row);
	}
	else if(this.direction==='down'){
		newHead=new Block(head.col,head.row+1)
	}
	else if(this.direction==='left'){
		newHead =new Block(head.col-1,head.row)
	}
	else if(this.direction==='up'){
		newHead = new Block(head.col,head.row-1)
	}
	if(this.checkCollision(newHead)){
		gameOver();
		return;
	}
	this.segments.unshift(newHead);
	if(newHead.equal(apple.position)){
		score++;
		apple.move();
	}
	else{
		this.segments.pop();
	}
}
checkCollision(head){
	var leftCollision=(head.col===0);
	var topCollision=(head.row===0)
	var rightCollision=(head.col===widthInBlock-1)
	var bottomCollision=(head.row===heigthInBlock-1)
	var wallCollision=leftCollision|| topCollision||rightCollision||leftCollision;
	var selfCollision=false;
	for(var i=0;i<this.segments.length;i++){
	if(head.equal(this.segments[i]))
		selfCollision=true;
	}
	return wallCollision || selfCollision
}
setDirection(newDirection){
	if(this.direction==='up' && this.nextDirection ==='down'){
		return;
	}
	 else if(this.direction==='right' && this.nextDirection==='left'){
		return;
	}
	else if(this.direction==='down' && this.nextDirection==='up'){
		return;
	}
	else if(this.direction==='left' && this.nextDirection==='right'){
         return;
	}
	this.nextDirection=newDirection;
}
}
class Apple{
	constructor(){
	this.position=new Block(10,10);
}
draw(){
	this.position.drawCircle('green')
}
move(){
	var randomCol=Math.floor(Math.random()*(widthInBlock-2))+1;
	var randomRow=Math.floor(Math.random()*(heigthInBlock-2))+1;
	this.position=new Block(randomCol,randomRow)
}}
var snake=new Snake();
var apple=new Apple();
var apple2=new Apple();
var intervalId=setInterval(function(){
    ctx.clearRect(0,0,width,height);
    
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
         drawBorder();

},200);

var directions={
	37:'left',
	38:'up',
	39:'right',
	40:'down'
}
document.addEventListener('keydown',function(event){
	var newDirection=directions[event.keyCode];
	snake.setDirection(newDirection)
})
// document.addEventListener("keydown",function(event){
// 	if(event.keyCode=== 37){
// 		this.nextDirection='left'
// 	}
// 	if(event.keyCode===38){
// 		this.nextDirection='up'
// 	}
// 	if(event.keyCode === 39){
// 		this.nextDirection='right'
// 	}
// 	if(event.keyCode=== 40){
// 		this.nextDirection='down'
// 	}
	
// 	if(this.nextDirection !==undefined){
// 		snake.setDirection(this.nextDirection)
// 	}
// })