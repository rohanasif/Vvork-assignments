window.addEventListener("keydown", function (e) {
    console.log(e.keyCode);
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}]"`)
    if (audio) {
        audio.play();
        audio.currentTime = 0;
        key.classList.add("playing");
    }
    return;
});

var kk = document.querySelectorAll(".key");
kk.forEach((e) => {
    e.addEventListener("transitionend", remove)
})
function remove(k) {
    if (k.propertyName = "transform") {
        this.classList.remove("playing");
    }
    return;
}