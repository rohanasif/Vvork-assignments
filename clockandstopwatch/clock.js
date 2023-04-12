const timepara = document.getElementById("time");
setInterval(() => {
    const fullDateTime = new Date();
    const hours = fullDateTime.getHours();
    const minutes = fullDateTime.getMinutes();
    const seconds = fullDateTime.getSeconds();
    var ampm = "";

    if (hours > 12 && hours < 24) {
        hours -= 12;
        ampm = "pm";
    }
    else if (hours > 0 && hours < 12) {
        ampm = "am";
    }
    else {
        hours = 12;
        ampm = "am"
    }

    timepara.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
}, 1000)
