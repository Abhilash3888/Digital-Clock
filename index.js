const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {

    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = "AM";

    if (hour > 12) {
        hour -= 12;
        ampm = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;


    hourEl.innerText = hour;
    minuteEl.innerText = minutes;
    secondEl.innerText = seconds;
    ampmEl.innerText = ampm;
}

setInterval(updateClock, 1000);