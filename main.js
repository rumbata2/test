var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";

ctx.beginPath();
ctx.arc(0, 400, 400, 0, 0.5*Math.PI, true);
ctx.stroke();




var radius = 399.5;
var distance;
var xCoord, yCoord, yCoordInv;
var ptsInCircle = 0, ptsTotal = 0;
function myFunction() {
	for(let i = 0; i < 10000; i++) {
	xCoord = Math.floor(Math.random()*400);
	yCoord = Math.floor(Math.random()*400);
	yCoordInv = 399 - yCoord;
	
	distance = Math.sqrt(xCoord*xCoord + yCoord*yCoord);
	
	if(distance < radius) {ctx.fillStyle = "#FF0000"; ptsInCircle++;}
	else {ctx.fillStyle = "#000080";}
	ctx.fillRect(xCoord, yCoordInv, 1, 1);
	ptsTotal++;
	if(i===9999)
	{
		console.log(ptsInCircle); console.log(ptsTotal);
		document.getElementById("p1").innerHTML = "Points in circle: " + ptsInCircle;
		document.getElementById("p2").innerHTML = "Points total: " + ptsTotal;
		document.getElementById("pi").innerHTML = "Pi estimation: " + (ptsInCircle/ptsTotal)*4;
	}
	
	}		
}
document.getElementById("test").onclick = myFunction;

console.log(radius);