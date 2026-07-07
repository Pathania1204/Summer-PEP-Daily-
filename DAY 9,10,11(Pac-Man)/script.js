// Starter script.js
const board=document.getElementById('board');
const ctx=board.getContext('2d');
board.width=19*32;
board.height=21*32;
ctx.fillStyle='yellow';
ctx.beginPath();
ctx.arc(48,48,14,0.2*Math.PI,1.8*Math.PI);
ctx.lineTo(48,48);
ctx.fill();
console.log('Pac-Man starter project loaded.');
