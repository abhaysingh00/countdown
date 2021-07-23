setInterval(update,1000);
function update(){
let date = new Date();
let time = date.getTime();
let newYearTime= new Date("August 08,2021 00:00:00").getTime();
let milisecond=newYearTime-time;
let divisor=1000*60*60;
let exactHours=(milisecond/divisor);
let hours =Math.floor(exactHours);
let exactMinutes=(exactHours-hours)*60;
let minutes =Math.floor(exactMinutes);
let exactseconds =exactMinutes-minutes;
let seconds = Math.floor(exactseconds*60);
hours<10?hours="0"+ hours:hours=hours;
minutes<10?minutes="0" + minutes:minutes=minutes;
seconds<10?seconds="0"+ seconds:seconds=seconds;
let timer=document.getElementById("timer");

    timer.innerText=hours + ":" + minutes + ":" +seconds;
}
update();