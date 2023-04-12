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
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
                if (hours < 10) {
                    document.getElementById("hours").innerHTML = "0" + hours;
                } else {
                    document.getElementById("hours").innerHTML = hours.toString();
                }
            }
            if (minutes < 10) {
                document.getElementById("minutes").innerHTML = "0" + minutes;
            } else {
                document.getElementById("minutes").innerHTML = minutes.toString();
            }
        }
        if (seconds < 10) {
            document.getElementById("seconds").innerHTML = "0" + seconds;
        } else {
            document.getElementById("seconds").innerHTML = seconds.toString();
        }
    }
    if (milliseconds < 10) {
        document.getElementById("milliseconds").innerHTML = "0" + milliseconds;
    } else if (milliseconds < 100) {
        document.getElementById("milliseconds").innerHTML = milliseconds;
    } else {
        document.getElementById("milliseconds").innerHTML = milliseconds.toString();
    }
};

startbtn.addEventListener("click", () => {
    intervalId = setInterval(interval, 10);
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
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("milliseconds").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    startbtn.disabled = false;
    stopbtn.disabled = true;
});

