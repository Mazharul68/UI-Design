// $(document).ready(function(){
  
// });

const eidUlFitr = "30 August 2021";
const daysDiv = document.getElementById('days');
const hourDiv = document.getElementById('hour');
const minuteDiv = document.getElementById('minute');
const secondDiv = document.getElementById('second');

function countdown(){
    const eidDay = new Date(eidUlFitr);
    const currentDay = new Date();
    const totalTime = (eidDay - currentDay)/1000;
    const days = Math.floor(totalTime / 3600 /24);
    const hour =Math.floor((totalTime /3600) % 24); // Modolas 
    const minute = Math.floor (totalTime / 60) % 60;
    const second =Math.floor(totalTime) % 60;

    daysDiv.innerHTML = days;
    hourDiv.innerHTML = hour;
    minuteDiv.innerHTML = minute;
    secondDiv.innerHTML = second;
}
countdown();
setInterval(countdown,1000)