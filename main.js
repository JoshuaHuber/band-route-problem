
var canvas = document.getElementById("bandCanvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "#FF0000";


ctx.moveTo(10,10);
ctx.lineTo(200,100);
ctx.stroke();
ctx.fillRect(10,10,5,5);
ctx.fillRect(200,100,5,5);
