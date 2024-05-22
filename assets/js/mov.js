//Guardar el elemento y el contexto
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
    // aca defino el color que quiere utilizar para dibujar
    // lo meto adentro del dibujo para no perder lo que ya tengo dibujado
    const trazo = document.getElementById("color");
    const selectedValue = trazo.value;

    trazo.style.color = selectedValue;
    trazo.style.fontWeight = "bold";
<<<<<<< HEAD

=======
        
>>>>>>> c9716188c727294be8c51a4334077e52d6a40982
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
        //evita desfase al dibujar
        initialX = evt.changedTouches[0].pageX - correccionX;
        initialY = evt.changedTouches[0].pageY - correccionY;
    }
    dibujar(initialX, initialY);
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

//pantallas tactiles
mainCanvas.addEventListener('touchstart', mouseDown);
mainCanvas.addEventListener('touchend', mouseUp);

// boton para borrar el dibujo
function borrarDibujo()
{
    context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
};