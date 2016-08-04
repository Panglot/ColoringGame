(function () {
    var stage = new Kinetic.Stage({
            container: 'main-drawing-window',
            width: 920,
            height: 750
        }),
        workplace = document.getElementById('main-drawing-window'),
        layer = new Kinetic.Layer({
            clearBeforeDraw: false
        }),
        border = new Kinetic.Rect({
            stroke: "black",
            strokeWidth: 2,
            x: 0,
            y: 0,
            width: stage.getWidth(),
            height: stage.getHeight()
        }),
        brush = new Kinetic.Circle({
            radius: 50,
            fill: 'red',
            strokeWidth: 2,
            x: 100,
            y: 300
        });

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

        // input.mouseX = (ev.clientX - workplace.offsetLeft);
        // input.mouseY = (ev.clientY - workplace.offsetTop);
        input.mouseX = (ev.offsetX);
        input.mouseY = (ev.offsetY);
    };

    function DistanceBetweenPoints(x1, y1, x2, y2) {
        return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
    }

    var canvasDraw = setInterval(function () {
        // console.log(input);
        if (input.mouseIsDown) {
            workplace.style.cursor = "crosshair";
            var currentBrushPosition = brush.clone();
            currentBrushPosition.setX(input.mouseX);
            currentBrushPosition.setY(input.mouseY);
            // var distance = DistanceBetweenPoints(brush.getX(), brush.getY(), currentBrushPosition.getX(), currentBrushPosition.getY());
            // if (distance > brush.getRadius() * 2) {
            //     var fillingLine = new Kinetic.Line({
            //         points: [brush.getX(), brush.getY(), currentBrushPosition.getX(), currentBrushPosition.getY()],
            //         stroke: 'yellow',
            //         strokeWidth: brush.getRadius()*2,
            //         lineJoin: 'round'
            //     });
            //     // layer.add(fillingLine);
            // }

            layer.add(currentBrushPosition);
            brush.remove();
            brush = currentBrushPosition;
            layer.draw();
            // if (fillingLine) {
            //     fillingLine.remove();
            // }
        }
        if (!input.mouseIsDown) {
            workplace.style.cursor = 'default';
        }
    }, 16);

    layer.add(border);
    stage.add(layer);
})();