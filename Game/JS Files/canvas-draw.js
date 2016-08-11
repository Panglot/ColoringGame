'use strict';

window.onload = function () {

    var workplace = document.getElementById('main-drawing-window');
    var ctx = workplace.getContext('2d');
    workplace.width = 720;
    workplace.height = 540;


    document.getElementsByClassName('front')[0].ondragstart = function () {
        return false;
    };

    var brush = {
        type: 'pen',
        color: '#000000',
        prevColor: '#000000',
        x: 0,
        y: 0,
        thickness: 16,
        clear: false
    };
    musicHandler();
    headerMain(brush);
    toolbar(brush);

    var Input = function () {
        this.mouseIsDown = false;
        this.mouseX = 0;
        this.mouseY = 0;
    };

    var input = new Input();

    document.documentElement.onmousedown = function (ev) {
        input.mouseIsDown = true;
        input.mouseX = (ev.clientX - workplace.offsetLeft + document.body.scrollLeft);
        input.mouseY = (ev.clientY - workplace.offsetTop + document.body.scrollTop);
    };
    document.documentElement.onmouseup = function (ev) {
        input.mouseIsDown = false;
    };

    document.documentElement.onmousemove = function (ev) {
        ev = ev || window.event;
        input.mouseX = (ev.clientX - workplace.offsetLeft + document.body.scrollLeft);
        input.mouseY = (ev.clientY - workplace.offsetTop + document.body.scrollTop);
    };


    var markerDraw = function () {

        ctx.beginPath();
        ctx.fillStyle = brush.color;
        ctx.arc(brush.x, brush.y, brush.thickness, 0, Math.PI * 2);
        ctx.fill();
    };
    var lastPoint = {x: brush.x, y: brush.y};

    var penDraw = function () {

        ctx.lineWidth = Math.floor(Math.random() * ((brush.thickness + 2) - (brush.thickness - 2) + 1)) + (brush.thickness - 2);
        ctx.strokeStyle = brush.color;
        ctx.lineJoin = ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(brush.x, brush.y);
        ctx.stroke();


        lastPoint = {x: brush.x, y: brush.y};

    };

    var cryonDraw = function () {
        var scale = brush.thickness/2;
        ctx.lineWidth = brush.thickness-scale;
        ctx.strokeStyle = brush.color;
        ctx.lineJoin = ctx.lineCap = 'round';


        ctx.beginPath();

        ctx.globalAlpha = 1;
        ctx.moveTo(lastPoint.x - scale, lastPoint.y - scale);
        ctx.lineTo(brush.x - scale, brush.y - scale);
        ctx.stroke();

        ctx.globalAlpha = 0.6;
        ctx.moveTo(lastPoint.x - scale/2, lastPoint.y - scale/2);
        ctx.lineTo(brush.x - scale/2, brush.y - scale/2);
        ctx.stroke();

        ctx.globalAlpha = 0.4;
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(brush.x, brush.y);
        ctx.stroke();

        ctx.globalAlpha = 0.3;
        ctx.moveTo(lastPoint.x + scale/2, lastPoint.y + scale/2);
        ctx.lineTo(brush.x + scale/2, brush.y + scale/2);
        ctx.stroke();

        ctx.globalAlpha = 0.2;
        ctx.moveTo(lastPoint.x + scale, lastPoint.y + scale);
        ctx.lineTo(brush.x + scale, brush.y + scale);
        ctx.stroke();

        ctx.globalAlpha = 1;
        lastPoint = {x: brush.x, y: brush.y};
    };

    var canvasDraw = function canvasDraw() {
        brush.x = input.mouseX;
        brush.y = input.mouseY;
        if (input.mouseIsDown) {
        //     document.body.style.cursor = 'url(cursors/pen.cur), auto';


            if (brush.type === 'pen') {
                document.body.style.cursor = 'url(cursors/pen.cur), auto';
                penDraw();
            }
            else if (brush.type === 'crayon') {
                document.body.style.cursor = 'url(cursors/crayon.cur), auto';
                cryonDraw();
            }
            else if (brush.type === 'marker') {
                document.body.style.cursor = 'url(cursors/marker.cur), auto';
                markerDraw();
            }
            else if (brush.type ==='eraser') {
                document.body.style.cursor = 'url(cursors/eraser.cur), auto';              
                markerDraw();
            }

        }

        if (!input.mouseIsDown) {
            lastPoint.x = brush.x;
            lastPoint.y = brush.y;
            document.body.style.cursor = 'default';
        }
        if(brush.clear) {
            ctx.clearRect(0,0, workplace.width, workplace.height);
            brush.clear = false;
        }

        window.requestAnimationFrame(canvasDraw);
    };


    canvasDraw();
};