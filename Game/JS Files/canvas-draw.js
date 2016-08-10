window.onload = function () {
    var workplace = document.getElementById('main-drawing-window');
    var ctx = workplace.getContext('2d');
    workplace.width = 720;
    workplace.height = 540;


    Input = function () {
        this.mouseIsDown = false;
        this.mouseX = 0;
        this.mouseY = 0;
    };

    var input = new Input();

    document.documentElement.onmousedown = function (ev) {
        input.mouseIsDown = true;
    };
    document.documentElement.onmouseup = function (ev) {
        input.mouseIsDown = false;
    };

    document.documentElement.onmousemove = function (ev) {
        ev = ev || window.event;
        input.mouseX = (ev.clientX - workplace.offsetLeft + document.body.scrollLeft);
        input.mouseY = (ev.clientY - workplace.offsetTop + document.body.scrollTop);
    };


    var brush = {
        color: 'yellow',
        x: 0,
        y: 0,
        thickness: 10,
        drawStart: 0,
        drawEnd: Math.PI*2,
        counterClockwise: false
    };

    var canvasDraw = function canvasDraw() {
         if (input.mouseIsDown) {
            document.body.style.cursor = 'url(cursor.cur), auto';

            brush.x = input.mouseX;
            brush.y = input.mouseY;

            ctx.beginPath();
            ctx.fillStyle = brush.color;
            ctx.arc(brush.x, brush.y, brush.thickness, brush.drawStart, brush.drawEnd, brush.counterClockwise);
            ctx.fill();
        }

        if (!input.mouseIsDown) {
            document.body.style.cursor = 'default';
        }

        window.requestAnimationFrame(canvasDraw);
    };

    canvasDraw();
}