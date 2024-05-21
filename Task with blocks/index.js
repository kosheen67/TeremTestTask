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


let button2 = document.getElementById('green-button');

let block2 = document.querySelector('.block2-orange');
let block3 = document.querySelector('.block2-brown');

let container = document.querySelector('.block2');

button2.addEventListener("click", function () {
    if (block2.nextSibling === block3) {
        container.insertBefore(block3, block2);
    }
    else { container.insertBefore(block2, block3); }

});
