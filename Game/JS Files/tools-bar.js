/**
 * Created by softwareacademy on 11-Aug-16.
 */

function toolbar() {
    var canvas = document.getElementById('tools'),
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



    console.log(canvas.style.border);
    console.log(pen.height);


    var redrawToolbar = function () {
        ctx.drawImage(pen, 10,canvas.height - pen.height);
        ctx.drawImage(marker, 80,canvas.height - marker.height);
        ctx.drawImage(crayon, 150,canvas.height - crayon.height);
        ctx.drawImage(eraser, 220,canvas.height - eraser.height);
        ctx.drawImage(size, 290,canvas.height - size.height);
        ctx.drawImage(palette, 395,canvas.height - palette.height);
        ctx.drawImage(clear, 635,canvas.height - clear.height);

        

    }

    redrawToolbar();
    document.documentElement.onmousedown = function (ev) {



    }

}