var seconds=document.getElementById('seconds');
var milliseconds=document.getElementById('milliseconds');

var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');

var sec=0;
var milli=0;

var timeInterval;


const timer =() =>{
    milli++;

    if(milli<9){
        milliseconds.innerHTML="0"+milli;
    }

    if(milli>9){
        milliseconds.innerHTML=milli;
    }

    if(milli>99){
        sec++;
        seconds.innerHTML="0"+sec;
        milli=0;
        milliseconds.innerHTML="0"+0;
    }

    if (sec>9) {
        seconds.innerHTML=sec;
    }
}

start.addEventListener('click', ()=>{
    timeInterval=setInterval(timer, 10);
});

stop.addEventListener('click',()=>{
    clearInterval(timeInterval);
});

reset.addEventListener('click',()=>{
    clearInterval(timeInterval);
    seconds.innerHTML="00";
    milliseconds.innerHTML="00"
})
