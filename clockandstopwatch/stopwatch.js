const time = document.getElementById("time");
const timeValue = time.innerHTML;
const stopbtn = document.getElementById("stopbtn");
const resetbtn = document.getElementById("resetbtn");

setInterval(function () {
    console.log(timeValue.split(":"))
    var [hours, minutes, seconds, milliseconds] = timeValue.split(":");
    milliseconds++;
    if (Math.floor(milliseconds / 1000) > 1) {
        seconds++;
    }

    if (Math.floor(seconds / 60) > 1) {
        minutes++;
    }

    if (Math.floor(minutes / 60) > 1) {
        hours++;
    }
    time.innerHTML = `${hours}: ${minutes}: ${seconds}: ${milliseconds}`
}, 1000)