window.addEventListener("keydown", (e) => {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio) {
        audio.play();
        audio.currentTime = 0;
    }
    return;
})

