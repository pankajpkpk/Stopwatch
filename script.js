var seconds = 0;
var tens = 0;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var btstart = document.getElementById("btstart");
var btstop = document.getElementById("btstop");
var btreset = document.getElementById("btreset");
var interval; //to store timer values

startTimer = () => {
    tens++;
    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" 
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
}

btstart.onclick = () => {
    interval = setInterval(startTimer);
}

btstop.onclick = () => {
    clearInterval(interval);
}

btreset.onclick = () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00"
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}
