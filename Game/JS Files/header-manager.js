/**
 * Created by admin on 11.8.2016 г..
 */
'use strict';

function headerMain(brush) {
    var toolsElement = document.getElementById('tools-canvas');

    $(toolsElement).click(onClickToolsBar);

    // $sideImg.click(onClickSelectImg);


    function onClickToolsBar(ev) {
        console.log("bruch color: " + brush.color);
    }

    function updatePen() {
        var penElement = document.getElementById('pen-icon');
    }



    // id="pen-icon" s
    // id="size-icon"
    // id="color-icon"
    // tools-canvas
}