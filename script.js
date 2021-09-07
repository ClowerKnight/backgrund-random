const body = document.querySelector("body")
const button = document.querySelector("button")
const colors =  ["black", "yellow", "blue", "purple", "#32a852", "#225954", "#59176e", "#a6306b", "#8370b5"]

button.addEventListener("click", changeBackground)

function changeBackground() {
    //Random Color
    const randomColor = Math.floor(Math.random() * colors.length)
    const color = colors[randomColor]
    body.style.backgroundColor = color
}