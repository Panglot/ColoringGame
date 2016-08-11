/**
 * Created by softwareacademy on 11-Aug-16.
 */
'use strict';

function toolbar(brush) {

    var canvas = document.getElementById('tools-canvas'),
        ctx = canvas.getContext('2d'),
        crayon = document.getElementById("crayon"),
        marker = document.getElementById("marker"),
        pen = document.getElementById("pen"),
        eraser = document.getElementById("eraser"),
        size = document.getElementById("size"),
        palette = document.getElementById("palette"),
        clear = document.getElementById("clear");


    canvas.width = 720;
    canvas.height = 150;


    var redrawToolbar = function () {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(pen, 10, canvas.height - pen.height);
        ctx.drawImage(marker, 80, canvas.height - marker.height);
        ctx.drawImage(crayon, 150, canvas.height - crayon.height);
        ctx.drawImage(eraser, 220, canvas.height - eraser.height);
        ctx.drawImage(size, 290, canvas.height - size.height);
        ctx.drawImage(palette, 395, canvas.height - palette.height);
        ctx.drawImage(clear, 635, canvas.height - clear.height);

        if (brush.type === 'pen') {
            ctx.drawImage(pen, 5, canvas.height - pen.height - 22, 60, 132);
        }
        else if (brush.type === 'marker') {
            ctx.drawImage(marker, 75, canvas.height - marker.height - 22, 60, 132);
        }
        else if (brush.type === 'crayon') {
            ctx.drawImage(crayon, 145, canvas.height - crayon.height - 22, 60, 132);
        }
        else if (brush.type === 'eraser') {
            ctx.drawImage(eraser, 215, canvas.height - eraser.height - 22, 60, 132);
        }


    };
    redrawToolbar();


    canvas.onmousedown = function (ev) {
        var mouseX = (ev.clientX - canvas.offsetLeft + document.body.scrollLeft);
        var mouseY = (ev.clientY - canvas.offsetTop + document.body.scrollTop);


        if(mouseX > 10 && mouseX < pen.width+10 && mouseY > canvas.height - pen.height && mouseY < canvas.height){
            brush.type = 'pen';
        }
        else if(mouseX > 80 && mouseX < marker.width+80 && mouseY > canvas.height - marker.height && mouseY < canvas.height){
            brush.type = 'marker';
        }
        else if(mouseX > 150 && mouseX < crayon.width+150 && mouseY > canvas.height - crayon.height && mouseY < canvas.height){
            brush.type = 'crayon';
        }
        else if(mouseX > 220 && mouseX < eraser.width+220 && mouseY > canvas.height - eraser.height && mouseY < canvas.height){
            brush.type = 'eraser';
            brush.color = 'white';
        }
        else if(mouseX > 329 && mouseX < 345 && mouseY > 13 && mouseY < 28){
            brush.thickness = 8;
        }
        else if(mouseX > 325 && mouseX < 347 && mouseY > 40 && mouseY < 59){
            brush.thickness = 16;
        }
        else if(mouseX > 323 && mouseX < 350 && mouseY > 74 && mouseY < 98){
            brush.thickness = 28;
        }
        else if(mouseX > 320 && mouseX < 356 && mouseY > 110 && mouseY < 144){
            brush.thickness = 40;
        }
        else if(mouseX > 415 && mouseX < 440 && mouseY > 80 && mouseY < 105){
            brush.color = '#FFFF66';
        }
        else if(mouseX > 320 && mouseX < 356 && mouseY > 110 && mouseY < 144){
            brush.color = '#FF9900';
        }
        else if(mouseX > 320 && mouseX < 356 && mouseY > 110 && mouseY < 144){
            brush.color = '#FF3300';
        }
        else if(mouseX > 320 && mouseX < 356 && mouseY > 110 && mouseY < 144){
            brush.color = '#ACACAC';
        }
        else if(mouseX > 320 && mouseX < 356 && mouseY > 110 && mouseY < 144){
            brush.color = '#765000';
        }
        else if(mouseX > 320 && mouseX < 356 && mouseY > 110 && mouseY < 144){
            brush.color = '#339933';
        }
        else if(mouseX > 320 && mouseX < 356 && mouseY > 110 && mouseY < 144){
            brush.color = '#66FF99';
        }
        else if(mouseX > 320 && mouseX < 356 && mouseY > 110 && mouseY < 144){
            brush.color = '#33CCFF';
        }
        else if(mouseX > 320 && mouseX < 356 && mouseY > 110 && mouseY < 144){
            brush.color = '#003399';
        }
        else if(mouseX > 320 && mouseX < 356 && mouseY > 110 && mouseY < 144){
            brush.color = '#000000';
        }
        redrawToolbar();


    }

}