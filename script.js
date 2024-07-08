const body = document.getElementsByTagName("body") [0]
function setColor(name) {
    body.attributeStyleMap.backgroundcolor = name;
}
function randomColor() {
    const red =(Math.random() * 255)
    const green =(Math.random() * 255)
    const blue =(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue}`
    body.style.backgroundColor = color;
}
randomColor()