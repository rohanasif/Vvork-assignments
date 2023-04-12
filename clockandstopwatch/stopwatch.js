let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
const startbtn = document.getElementById("startbtn");
const stopbtn = document.getElementById("stopbtn");
const resetbtn = document.getElementById("resetbtn");
let intervalId;

const interval = () => {
    milliseconds++;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
                document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
            }
            document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        }
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }
    document.getElementById("milliseconds").innerHTML = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
};

startbtn.addEventListener("click", () => {
    intervalId = setInterval(interval, 1);
    startbtn.disabled = true;
    stopbtn.disabled = false;
});

stopbtn.addEventListener("click", () => {
    clearInterval(intervalId);
    startbtn.disabled = false;
    stopbtn.disabled = true;
});

resetbtn.addEventListener("click", () => {
    clearInterval(intervalId);
    document.getElementById("milliseconds").innerHTML = "000";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    startbtn.disabled = false;
    stopbtn.disabled = true;
});