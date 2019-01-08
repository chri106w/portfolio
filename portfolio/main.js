window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

/***********menu**************/

function toggleMenu() {
    console.log("Toggle menu");
    document.querySelector("#menu").classList.toggle("hidden");
}

let erSkjult = document.querySelector("#menu").classList.contains("hidden");

if (erSkjult == true) {
    //menuen er nu skjult - Burger
    document.querySelector("#menuknap").textContent = "☰";
} else {
    //menuen er nu vist - X
    document.querySelector("#menuknap").textContent = "X";

}
