var canvas= document.getElementById("game-canvas");
var ctx= canvas.getContext("2d");

var bgImg= document.createElement("img");
bgImg.src= "images/map.png";
var slimeImg= document.createElement("img");
slimeImg.src= "images/slime.gif";
var towerBtn= document.createElement("img");
towerBtn.src="images/tower-btn.png";

function draw(){
  //將背景圖片畫在canvas上的(0,0)位置
  ctx.drawImage(bgImg,0,0);
  ctx.drawImage(slimeImg,5,5);
  ctx.drawImage(towerBtn,100,100);
}

//執行draw函式
//draw();
//等待一秒再執行 draw
//等待1秒再執行
//setTimeout(draw, 1000);
//1000毫秒=1秒
//每16毫秒執行一次
setInterval(draw, 16);


