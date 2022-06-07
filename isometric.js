'use strict'

const CANVAS_SIZE = 1900;
const PIXEL_SIZE = 100;
const HALF_PIXEL = PIXEL_SIZE/2;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img;

var mouseX;
var mouseY

window.onload = function(){
    img = document.getElementById("sprite");
}

window.setInterval(function(){
    //saveGame()
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    drawSpriteGroup(CANVAS_SIZE/2 - 100,20)
    onmousemove = function(e){mouseX = e.clientX, mouseY = e.clientY}
}, 50);

function drawSpriteGroup(x,y){
        for (let xOffset = 0; xOffset < 10;  xOffset ++){
            for (let yOffset = 0; yOffset < 10;  yOffset ++){
                var tempX = x + (xOffset*PIXEL_SIZE) - (PIXEL_SIZE*yOffset)
                var tempY = y + (xOffset*HALF_PIXEL) + (HALF_PIXEL*yOffset)
                
                //this is an incredibly janky way of doing mouse interaction
                //this whole implementation is not really great
                if (mouseX > tempX && mouseX < tempX + PIXEL_SIZE)
                    if(mouseY > tempY && mouseY < tempY + PIXEL_SIZE)
                        tempY -= 30

                ctx.drawImage(img, tempX, tempY);
            }
        }
    }


// This code draws lines to make diamonds instead of sprites
// drawDiamonGroup(50,50)
// function drawDiamonGroup(x,y){
//     for (let i = x; i < x + 1000;  i += 100){
//         for (let j = y; j < y + 1000;  j += 50){
//             drawDiamond(i,j);
//         }
//     }
// }
// function drawDiamond(x,y){
//     ctx.beginPath();
//     ctx.moveTo((x + HALF_PIXEL*2), y);

//     ctx.lineTo( (x + PIXEL_SIZE*2) , (y + HALF_PIXEL) );
//     ctx.lineTo( (x + HALF_PIXEL*2), (y + PIXEL_SIZE) );
//     ctx.lineTo( (x), (y + HALF_PIXEL) );
//     ctx.lineTo( (x + HALF_PIXEL*2), y);
//     ctx.stroke(); 
//     ctx.fillStyle()
// }

  