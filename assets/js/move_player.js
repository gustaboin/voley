/**************************************************** */
/******** este codigo es para un sola img            */
/************************************************** */

/*

ball.onmousedown = function (event)
{
    // (1) preparar para mover: hacerlo absoluto y ponerlo sobre todo con el z-index
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;

    // quitar cualquier padre actual y moverlo directamente a body
    // para posicionarlo relativo al body
    document.body.append(ball);

    // centrar la pelota en las coordenadas (pageX, pageY)
    function moveAt(pageX, pageY)
    {
        ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
    }

    // mover nuestra pelota posicionada absolutamente bajo el puntero
    moveAt(event.pageX, event.pageY);

    function onMouseMove(event)
    {
        moveAt(event.pageX, event.pageY);
    }

    // (2) mover la pelota con mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (3) soltar la pelota, quitar cualquier manejador de eventos innecesario
    ball.onmouseup = function ()
    {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    };

};

ball.ondragstart = function ()
{
    return false;
};
*/

function makeElementDraggable(element)
{
    element.onmousedown = function (event)
    {
        // (1) preparar para mover: hacerlo absoluto y ponerlo sobre todo con el z-index
        element.style.position = 'absolute';
        element.style.zIndex = 1000;

        // quitar cualquier padre actual y moverlo directamente a body
        // para posicionarlo relativo al body
        document.body.append(element);

        // centrar el elemento en las coordenadas (pageX, pageY)
        function moveAt(pageX, pageY)
        {
            element.style.left = pageX - element.offsetWidth / 2 + 'px';
            element.style.top = pageY - element.offsetHeight / 2 + 'px';
        }

        // mover el elemento posicionado absolutamente bajo el puntero
        moveAt(event.pageX, event.pageY);

        function onMouseMove(event)
        {
            moveAt(event.pageX, event.pageY);
        }

        // (2) mover el elemento con mousemove
        document.addEventListener('mousemove', onMouseMove);

        // (3) soltar el elemento, quitar cualquier manejador de eventos innecesario
        element.onmouseup = function ()
        {
            document.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
        };
    };

    // Evitar que el elemento se seleccione y arrastre como una imagen
    element.ondragstart = function ()
    {
        return false;
    };
}

// Aplicar la funcionalidad a cada elemento individualmente
makeElementDraggable(ball);
makeElementDraggable(play1);
makeElementDraggable(play2);
makeElementDraggable(play3);
makeElementDraggable(play4);
makeElementDraggable(play5);
makeElementDraggable(play6);
makeElementDraggable(play7);
makeElementDraggable(play8);
makeElementDraggable(play9);
makeElementDraggable(play10);
//makeElementDraggable(play11);
makeElementDraggable(play12);
makeElementDraggable(play13);
makeElementDraggable(play14);
makeElementDraggable(play15);
makeElementDraggable(play16);
makeElementDraggable(play17);
makeElementDraggable(play18);
makeElementDraggable(play19);
makeElementDraggable(play20);
makeElementDraggable(play21);
makeElementDraggable(play22);
makeElementDraggable(play23);
makeElementDraggable(play24);
