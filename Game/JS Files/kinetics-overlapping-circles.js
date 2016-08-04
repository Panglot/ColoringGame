(function () {
    var stage = new Kinetic.Stage({
        container: 'main-drawing-window',
        width: 920,
        height: 750
    }),
        workplace = document.getElementById('main-drawing-window');
    var layer = new Kinetic.Layer({
        clearBeforeDraw: false
    });
    var border = new Kinetic.Rect({
        stroke: "black",
        strokeWidth: 2,
        x: 0,
        y: 0,
        width: stage.getWidth(),
        height: stage.getHeight()
    });
    var circle = new Kinetic.Circle({
        radius: 40,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 2,
        x: 100,
        y: 300
    });


    workplace.onfocus = document.documentElement.addEventListener('keydown', function (ev) {
        console.log(ev.which);
        var duplicate =  circle.clone();
        if(ev.keyCode === 37 || ev.keyCode === 65){
            duplicate.move({x: -5, y:0});
        }
        else if(ev.keyCode === 38 || ev.keyCode === 87){
            duplicate.move({x: 0, y:-5});
        }
        else if(ev.keyCode === 39 || ev.keyCode === 68){
            duplicate.move({x: +5, y:0});
        }
        else if(ev.keyCode === 40 || ev.keyCode === 83){
            duplicate.move({x: 0, y:+5});
        }
        layer.add(duplicate);
        circle.remove();
        circle = duplicate;
        layer.draw();
    });

    layer.add(border);
    layer.add(circle);
    stage.add(layer);
})();