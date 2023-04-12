const timepara = document.getElementById("time");
setInterval(() => {
    const fullDateTime = new Date();
    var hours = fullDateTime.getHours();
    var minutes = fullDateTime.getMinutes();
    var seconds = fullDateTime.getSeconds();
    var ampm = "";

    if (hours < 10) {
        hours = hours.toString();
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = minutes.toString();
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = seconds.toString();
        seconds = "0" + seconds;
    }

    if (hours >= 12 && hours < 24) {
        if (hours > 12) {
            hours -= 12;
        }
        ampm = "pm";
    }
    if (hours == 0 || hours < 12) {
        if (hours == 0) {
            hours = 12;
        }
        ampm = "am";
    }

    timepara.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
}, 1000);
