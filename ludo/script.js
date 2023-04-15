const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const submitBtn = document.getElementById("submitBtn");
const playBtn = document.getElementById("playBtn");
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const p = document.querySelector("p");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input1.value === "" || input2.value === "") {
        alert("naam to dalo");
    }
    else {
        playBtn.addEventListener("click", (e) => {
            var score1 = parseInt(Math.random() * 6 + 1);
            var score2 = parseInt(Math.random() * 6 + 1);
            e.preventDefault();
            img1.setAttribute("src", `./${score1}.jpeg`);
            img2.setAttribute("src", `./${score2}.jpeg`);
            if (score1 > score2) {
                p.innerText = "Player 1 wins"
            }
            else if (score1 < score2) {
                p.innerText = "Player 2 wins"
            }
            else {
                p.innerText = "Tie"
            }
        })
    }
})






