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
        palette = document.getElementById("palette");

    canvas.width = 720;
    canvas.height = 150;



    console.log(canvas.style.border);
    console.log(pen.height);


    var redrawToolbar = function () {
        ctx.drawImage(pen, 10,canvas.height - pen.height);

    }

    redrawToolbar();
    document.documentElement.onmousedown = function (ev) {



    }

}