/**
 * Created by Borislav on 11-Aug-16.
 */
window.onload = function () {

    document.getElementById('audio').style.opacity = 0;

    var musicPlayer = document.getElementById('audio');
    musicPlayer.addEventListener("mouseover", function(){
        document.getElementById('audio').style.opacity = 1;
        console.log("mouse over");
    }, false);
    musicPlayer.addEventListener("mouseout", function() {
        document.getElementById('audio').style.opacity = 0;
        console.log("mouse out");
    }, false);

}


