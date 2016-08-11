/**
 * Created by Borislav on 11-Aug-16.
 */
function musicHandler() {

    var player = document.getElementById('audio'),
        header = document.getElementsByClassName('header')[0];

    header.addEventListener("click", function(ev) {
        if (player.style.opacity === '1') {
            player.style.opacity = '0';
        }
         else {
             player.style.opacity = '1';
        }
    });

}


