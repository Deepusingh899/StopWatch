var startButton=document.getElementById("start-btn");
var stopButton=document.getElementById("stop-btn");
var resetButton=document.getElementById("reset-btn");
var timer_text=document.getElementById("timer_text");
var interval;

startButton.addEventListener("click",Start);
stopButton.addEventListener("click",Stop);
resetButton.addEventListener("click",Reset);     

var millisecond=0;
var second=0;
var minute=0;
var hour=0;

var check=false;
var check_for_start=false;

var eventValue,ms,s,m,h

function Start(){
    startButton.innerText="Start"
    if(check_for_start===true){
        return ;
    }
    check=true;
    check_for_start=true;
    eventValue=setInterval(function(){
        millisecond+=5;
        if(millisecond===1000){
            millisecond=0;
            second++;
        }
        if(second===60){
            second=0;
            minute++;
        }
        if(minute===60){
            minute=0;
            hour++
        }
        if(hour===24){
            Reset();
        }
        if(millisecond<10){
            ms="00"+millisecond;
        }
        else if(millisecond<100){
            ms="0"+millisecond;
        }
        else{
            ms=millisecond;
        }
        if(second<10){
            s="0"+second;
        }
        else{
            s=second;
        }
        if(minute<10){
            m="0"+minute;
        }
        else{
            m=minute;
        }
        if(hour<10){
            h="0"+hour;
        }
        else{
            h=hour;
        }
        timer_text.innerHTML=h+" : "+m+" : "+s+" : "+ms;
    },5)
}
function Stop(){
    if(check===false) return;
    clearInterval(eventValue);
    startButton.innerText="Resume";
    check_for_start=false;
}
function Reset(){
    check=false;
    check_for_start=false;
    millisecond=0;
    second=0;
    minute=0;
    hour=0;
    timer_text.innerHTML="00 : 00 : 00 : 000";
    clearInterval(eventValue);
    startButton.innerText="Start";
}