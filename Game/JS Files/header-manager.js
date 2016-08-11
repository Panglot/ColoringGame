/**
 * Created by admin on 11.8.2016 г..
 */
'use strict';
    var colours = ["#fe17db", "#ff9900", "#ff3300", "#acacac", "#765000", "#339933", "#66ff99", "#33ccff", "#003399", "#000000"], 
    idx;

$(function() {
    var title = $('#title'); 
    var chars = title.text().split('');
    title.html('');     
    for(var i=0; i<chars.length; i++) {
        idx = Math.floor(Math.random() * colours.length);
        var span = $('<span>' + chars[i] + '</span>').css("color", colours[idx]);
        title.append(span);
    }
});

function headerMain(brush) {
    var toolsElement = document.getElementById('tools-canvas');

    $(toolsElement).click(onClickToolsBar);

    // $sideImg.click(onClickSelectImg);


    function onClickToolsBar(ev) {
        updatePen();
        updateSize();
        updateColor();
    }

    function updatePen() {
        var penElement = document.getElementById('pen-icon');

        if (brush.type === 'pen') {
            $(penElement).attr('src', './Images/tools/pen.png');
        }
        else if (brush.type === 'marker') {
            $(penElement).attr('src', './Images/tools/Marker.png');
        }
        else if (brush.type === 'crayon') {
            $(penElement).attr('src', './Images/tools/Crayon.png');
        }
        else if (brush.type === 'eraser') {
            $(penElement).attr('src', './Images/tools/eraser.png');
        }
    }
    
    function updateSize() {
        var sizeElement = document.getElementById('size-icon');

        if (brush.thickness === 8) {
            $(sizeElement).attr('src', './Images/tools/size dots/size-dot-small.png');
        }
        else if (brush.thickness === 16) {
            $(sizeElement).attr('src', './Images/tools/size dots/size-dot-medium.png');
        }
        else if (brush.thickness === 28) {
            $(sizeElement).attr('src', './Images/tools/size dots/size-dot-large.png');
        }
        else if (brush.thickness === 40) {
            $(sizeElement).attr('src', './Images/tools/size dots/size-dot-hudge.png');
        }
    }

    function updateColor() {
        var colorElement = document.getElementById('color-icon');

        if (brush.color === '#FFFF66') {
            $(colorElement).attr('src', './Images/tools/color-dots/yellow-color-dot.png');
        }
        else if (brush.color === '#FF9900') {
            $(colorElement).attr('src', './Images/tools/color-dots/orange-color-dot.png');
        }
        else if (brush.color === '#FF3300') {
            $(colorElement).attr('src', './Images/tools/color-dots/red-color-dot.png');
        }
        else if (brush.color === '#ACACAC') {
            $(colorElement).attr('src', './Images/tools/color-dots/gray-color-dot.png');
        }

        else if (brush.color === '#765000') {
            $(colorElement).attr('src', './Images/tools/color-dots/broun-color-dot.png');
        }
        else if (brush.color === '#339933') {
            $(colorElement).attr('src', './Images/tools/color-dots/green-color-dot.png');
        }
        else if (brush.color === '#66FF99') {
            $(colorElement).attr('src', './Images/tools/color-dots/lightgreen-color-dot.png');
        }

        else if (brush.color === '#33CCFF') {
            $(colorElement).attr('src', './Images/tools/color-dots/lightblue-color-dot.png');
        }
        else if (brush.color === '#003399') {
            $(colorElement).attr('src', './Images/tools/color-dots/blue-color-dot.png');
        }
        else if (brush.color === '#000000') {
            $(colorElement).attr('src', './Images/tools/color-dots/black-color-dot.png');
        }
    }


    // brush.color = '#FFFF66';
    //
    // brush.color = '#FF9900';
    //
    // brush.color = '#FF3300';
    //
    // brush.color = '#ACACAC';
    //


    // brush.color = '#765000';
    //
    // brush.color = '#339933';
    //
    // brush.color = '#66FF99';


    //
    // brush.color = '#33CCFF';
    //
    // brush.color = '#003399';
    //
    // brush.color = '#000000';


    // id="pen-icon" s
    // id="size-icon"
    // id="color-icon"
    // tools-canvas
}