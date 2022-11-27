var h2 = document.getElementsByTagName('h2')[0];
var h3 = document.getElementsByTagName('h3')[0];
var start = document.getElementById('strt');
var stop = document.getElementById('stp');
var reset = document.getElementById('rst');
var sec = 0;
var min = 0;
var hrs = 0;
var mil = 00;
var t;

function tick(){
    mil++;
    if (mil >= 100) {
        mil = 0;
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                hrs++;
            }
        }
    }
}
function add() {
    tick();
    h2.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    h3.textContent =
            (mil > 99 ? mil : "0" + mil);

    timer();
}
function timer() {
    t = setTimeout(add, 10);
}

timer();
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}
reset.onclick = function() {
    h2.textContent = "00:00:00";
    h3.textContent = "00";
    sec = 0; min = 0; hrs = 0; mil = 0;
}