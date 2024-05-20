alert("Привет, мир");

let block = document.querySelector('.block1');
let button = document.getElementById('yellow-button');

button.addEventListener("click", function () {
    if (block.style.display === "none") {
        block.style.display = "block";
    } else {
        block.style.display = "none";
    }
})


