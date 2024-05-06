var imagen = document.getElementById('imagen');
var x = 0;
var y = 0;

function moverImg() {
    x += 1
    y += 1;
    /*imagen.style.left = x + "px";
    imagen.style.top = y + "px";*/
}

document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    imagen.style.left = x + "px";
    imagen.style.top = y + "px";
})

setInterval(moverImg, 10);