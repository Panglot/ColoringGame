window.onload = function () {
    var workplace = document.getElementById('main-drawing-window');
    var ctx = workplace.getContext('2d');
    workplace.width = 720;
    workplace.height = 540;


    Input = function () {
        // this.a = false;
        // this.b = false;
        // this.c = false;
        // this.d = false;
        // this.e = false;
        // this.f = false;
        // this.g = false;
        // this.h = false;
        // this.i = false;
        // this.j = false;
        // this.k = false;
        // this.l = false;
        // this.m = false;
        // this.n = false;
        // this.o = false;
        // this.p = false;
        // this.q = false;
        // this.r = false;
        // this.s = false;
        // this.t = false;
        // this.u = false;
        // this.v = false;
        // this.w = false;
        // this.x = false;
        // this.y = false;
        // this.z = false;
        // this.left = false;
        // this.right = false;
        // this.up = false;
        // this.down = false;
        // this.enter = false;
        // this.space = false;
        this.mouseIsDown = false;
        this.mouseX = 0;
        this.mouseY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
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

        input.mouseX = (ev.clientX - workplace.offsetLeft);
        input.mouseY = (ev.clientY - workplace.offsetTop);
        // input.mouseX = (ev.offsetX);
        // input.mouseY = (ev.offsetY);
    };

    // function DistanceBetweenPoints(x1, y1, x2, y2) {
    //     return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
    // }

    var brush = {
        color: 'yellow',
        x: 0,
        y: 0,
        thickness: 30,
        drawStart: 0,
        drawEnd: Math.PI*2,
        counterClockwise: false
    };

    var canvasDraw = setInterval(function () {
         if (input.mouseIsDown) {
            workplace.style.cursor = "crosshair";
            console.log('counter');
            brush.x = input.mouseX;
            brush.y = input.mouseY;
            ctx.beginPath();
            ctx.fillStyle = brush.color;
            ctx.arc(brush.x, brush.y, brush.thickness, brush.drawStart, brush.drawEnd, brush.counterClockwise);
            ctx.fill();
        }
        if (!input.mouseIsDown) {
            workplace.style.cursor = 'default';
        }
    }, 1);
}