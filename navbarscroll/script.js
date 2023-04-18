const nav = document.querySelector("nav");


window.addEventListener("scroll", () => {
    if (scrollY > 200) {

        nav.style.color = "blue";
        nav.style.backgroundColor = "white";

    }

    else {

        nav.style.color = "white";
        nav.style.backgroundColor = "blue";

    }
})