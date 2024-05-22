// Guardar el elemento y el contexto
const mainCanvas = document.getElementById("main-container");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;
let correccionX = 0;
let correccionY = 0;

let posicion = mainCanvas.getBoundingClientRect();
correccionX = posicion.x;
correccionY = posicion.y;

const dibujar = (cursorX, cursorY) =>
{
    const trazo = document.getElementById("color");
    const selectedValue = trazo.value;

    context.beginPath();
    context.moveTo(initialX, initialY);
    context.lineWidth = 10;
    context.strokeStyle = selectedValue;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineTo(cursorX, cursorY);
    context.stroke();

    initialX = cursorX;
    initialY = cursorY;
};

const mouseDown = (evt) =>
{
    evt.preventDefault();
    if (evt.changedTouches === undefined)
    {
        initialX = evt.offsetX;
        initialY = evt.offsetY;
    } else
    {
        initialX = evt.changedTouches[0].pageX - correccionX;
        initialY = evt.changedTouches[0].pageY - correccionY;
    }
    mainCanvas.addEventListener("mousemove", mouseMoving);
    mainCanvas.addEventListener('touchmove', mouseMoving);
};

const mouseMoving = (evt) =>
{
    evt.preventDefault();
    if (evt.changedTouches === undefined)
    {
        dibujar(evt.offsetX, evt.offsetY);
    } else
    {
        dibujar(evt.changedTouches[0].pageX - correccionX, evt.changedTouches[0].pageY - correccionY);
    }
};

const mouseUp = () =>
{
    mainCanvas.removeEventListener("mousemove", mouseMoving);
    mainCanvas.removeEventListener("touchmove", mouseMoving);
};

mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);
mainCanvas.addEventListener('mouseleave', mouseUp); // Para detener el dibujo si el ratón sale del lienzo

// Pantallas táctiles
mainCanvas.addEventListener('touchstart', mouseDown);
mainCanvas.addEventListener('touchend', mouseUp);
mainCanvas.addEventListener('touchcancel', mouseUp); // Para detener el dibujo si el toque se cancela

// Botón para borrar el dibujo
function borrarDibujo()
{
    context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
}
