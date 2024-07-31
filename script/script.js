let nav = document.querySelector(".nav")
let bars = document.getElementById("bars")

bars.addEventListener("click", () => {
    nav.classList.toggle("newclass");
    bars.classList.toggle("fa-x")
})


