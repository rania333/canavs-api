let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
    gradient = context.createLinearGradient(0, 0, 300, 100);
/*
linearGradient
0 => start from left
0 => start from top
200 => end from left
100 => end from top
*/

//add color stop and offset(order)
gradient.addColorStop(0, "#94ebcd");
gradient.addColorStop(1, "#ffefa1");
//context.fillStyle = gradient;

//add stroke 
context.strokeStyle = 'blue';
context.strokeRect(20, 20 , 200, 100);
//add text
context.font = '20px Tahoma';
// context.fillStyle = 'pink';
// context.fillText('Hello Canvas', 30, 50, 200); //string, start from left, start from top, max width(optional)

//add stroke text 
context.strokeStyle = gradient;
context.strokeText('Hello Canvas', 30, 50);
//add rectangle 
//context.fillStyle = 'pink' //color - gradient - pattern
//context.fillRect(0, 0, canvas.width, canvas.height); //x,y,width,height

//draw chart
let canvas2 = document.getElementById('canvas2'),
    context2 = canvas2.getContext('2d'),
    w = canvas2.clientWidth,
    h = canvas2.clientHeight;
//set font
context2.font = '20px Tahoma';
//add chart
context2.fillStyle = '#a3ddcb';
context2.fillRect(50, 30, 40, h-30);
context2.fillStyle = 'white';
context2.fillText('1', 65, h-10);

context2.fillStyle = '#e8e9a1';
context2.fillRect(100, 60, 40, h-60);
context2.fillStyle = 'white';
context2.fillText('2', 115, h-10);

context2.fillStyle = '#e5707e';
context2.fillRect(150, 90, 40, h-90);
context2.fillStyle = 'white';
context2.fillText('3', 165, h-10);

context2.fillStyle = '#e6b566';
context2.fillRect(200, 100, 40, h-100);
context2.fillStyle = 'white';
context2.fillText('4', 215, h-10);


context2.fillStyle = '#c5d7bd';
context2.fillRect(250, 60, 40, h-60);
context2.fillStyle = 'white';
context2.fillText('5', 265, h-10);

//draw line
let canvas3 = document.getElementById('canvas3'),
    context3 = canvas3.getContext('2d');
//set fonts
context3.strokeStyle = 'black';
context3.lineWidth = 2;
context3.beginPath(); //start path
context3.moveTo(0, 0); //start from x and y
context3.lineTo(400,200); //end to x and y
context3.moveTo(400, 0);
context3.lineTo(0, 200);
context3.moveTo(0, 100);
context3.lineTo(400, 100);
context3.moveTo(200, 0);
context3.lineTo(200, 200);
context3.stroke(); //draw path
//l mafrood ykon feh moveTo wa7da
// context4.moveTo(0, 0);
// context4.lineTo(200, 100);
// context4.lineTo(400, 0);
// context4.lineTo(0, 200);
// context4.lineTo(200, 100);
// context4.lineTo(400, 200);
// context4.lineTo(200, 100);
// context4.lineTo(200, 0);
// context4.lineTo(200, 100);
// context4.lineTo(200, 200);
// context4.lineTo(200, 100);
// context4.lineTo(400, 100);
// context4.lineTo(200, 100);
// context4.lineTo(0, 100);
let canvas4 = document.getElementById('canvas4'),
    context4 = canvas4.getContext('2d');
context4.beginPath();
context4.moveTo(50, 50);
context4.lineTo(50, 100);
context4.lineTo(120, 100);
context4.lineTo(150, 80);
context4.lineTo(200, 80);
context4.lineTo(50, 50);
//context4.closePath();
context4.stroke();
context4.fillStyle = 'pink';
context4.fill();


let canvas5 = document.getElementById('canvas5'),
    context5 = canvas5.getContext('2d');
context5.beginPath();
context5.arc(200, 100, 50, 0, 2 * Math.PI, false); //center x, center y, radius, start circle from 3(like clock), full circle
//shadow
context5.shadowColor = 'rgba(0, 0, 0, .2)';
context5.shadowBlur = 5;
context5.shadowOffsetX = 5;
context5.shadowOffsetY = 5;
context5.fillStyle = 'pink';
context5.fillRect(30, 30, 50, 50);

context5.stroke();

//transformation
let canvas6 = document.getElementById('canvas6'),
    context6 = canvas6.getContext('2d');
//first one
context6.fillStyle = 'blue';
context6.fillRect(50, 50, 200, 100);
//second one
context6.save(); //save w restore 3l4an my3ml4 transform l kol l elements l t7tu
context6.scale(2, 2);
context6.fillStyle = 'green';
context6.fillRect(50, 50, 200, 100);
context6.restore();
//third one
context6.translate(30, 30);
context6.fillStyle = 'red';
context6.fillRect(70, 70, 200, 100);



