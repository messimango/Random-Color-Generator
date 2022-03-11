const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const colorButton = document.querySelector(".color-button")
const color = document.querySelector(".color") 
const copyButton = document.querySelector(".copy")

var colorInput = document.getElementById("colorInput")


colorButton.addEventListener("click", function() {

    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        randomColor += hex[randomNumber()];
    }

    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
    colorInput.value = randomColor;
});

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
};


function copyColor() {
    colorInput.select();
    navigator.clipboard.writeText(colorInput.value);
}
