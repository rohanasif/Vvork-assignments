const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

setInterval(() => {
    const t = new Date();
    const h = t.getHours();
    const m = t.getMinutes();
    const s = t.getSeconds();
    const rotate_hr_hand = 30 * h + m / 2;
    const rotate_min_hand = 6 * m;
    const rotate_second_hand = 6 * s;

    hour.style.transform = `rotate(${rotate_hr_hand}deg)`;
    minute.style.transform = `rotate(${rotate_min_hand}deg)`;
    second.style.transform = `rotate(${rotate_second_hand}deg)`;
}, 1000);
