
var h1 = document.getElementsByTagName("h1")[0],
    h1B = document.getElementsByTagName("h1")[1],
    wStart = document.getElementById("Wstart"),
    wStop = document.getElementById("Wstop"),
    wClear = document.getElementById("Wclear"),
    bStart = document.getElementById("Bstart"),
    bStop = document.getElementById("Bstop"),
    bClear = document.getElementById("Bclear"),
    seconds, minutes, t, bT,
    workTime = 1500,
    breakTime = 300;

function subtract() {
    minutes = Math.floor(workTime/60);
    seconds = workTime - minutes * 60;

    workTime--;
    if(minutes == 0 && seconds == 0){
        h1.textContent = "00:00";
        h1.style.color = "green";
        alert("TIME TO BREAK! Grab some tea!");
        return;
    }

    h1.textContent = (minutes ? (minutes < 10 ? "0"+ minutes: minutes): "00") + ":" + (seconds < 10 ? "0" + seconds: seconds);
    timer();
}

function bSubtract(){
    minutes = Math.floor(breakTime/60);
    seconds = breakTime - minutes * 60;
    breakTime--;
    if(minutes == 0 && seconds == 0){
        h1B.textContent = "0:00";
        h1B.style.color = "red";
        alert("Back to work!");
        return;
    }

    h1B.textContent = (minutes ? (minutes < 10 ? "0"+ minutes: minutes): "00") + ":" + (seconds < 10 ? "0" + seconds: seconds);
    bTimer();
}


function timer(){
    t = setTimeout(subtract, 1000);
}

function bTimer(){
    bT = setTimeout(bSubtract, 1000);
}

wStart.onclick = timer;
wStop.onclick = function(){
    clearTimeout(t);
}
wClear.onclick = function() {
    h1.textContent = "25:00";
    h1.style.color = "black";
    workTime = 1500;
}

bStart.onclick = bTimer;

bStop.onclick = function(){
    clearTimeout(bT);
}
bClear.onclick = function() {
    h1B.textContent = "05:00";
    h1B.style.color = "black";
    breakTime = 300;
}
