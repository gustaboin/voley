const localTeamSelect = document.getElementById('localTeamSelect');
const visitorTeamSelect = document.getElementById('visitorTeamSelect');
const local = document.querySelectorAll('.local');
const visitor = document.querySelectorAll('.visitor');
const numero = document.querySelectorAll('.numero');
const numVisita = document.querySelectorAll('.numVisita');

localTeamSelect.addEventListener('change', () =>
{
    const selectedValue = localTeamSelect.value;
    //console.log(selectedValue);

    if (selectedValue)
    {

        local.forEach((img, index) =>
        {
            img.setAttribute('src', `assets/img/${selectedValue}.png`);
            img.setAttribute('alt', `Player ${index + 1}`);
        });
        document.getElementById("ball").setAttribute('src', 'assets/img/ball.png');

        // hace visible los numeros de cada jugador cuando hay un equipo elegido
        numero.forEach(p =>
        {
            p.style.visibility = 'visible';
        });
    }
    else
    {
        local.forEach((img, index) =>
        {
            img.removeAttribute('src');
            img.removeAttribute('alt');
            document.getElementById("ball").setAttribute('src', '');
        })
        // Haz invisibles los elementos con clase "numero" cuando no hay equipo seleccionado
        numero.forEach(p =>
        {
            p.style.visibility = 'hidden';
        });
    }


});

visitorTeamSelect.addEventListener('change', () =>
{
    const selectedValue = visitorTeamSelect.value;

    if (selectedValue)
    {
        visitor.forEach((img, index) =>
        {
            img.setAttribute('src', `assets/img/${selectedValue}.png`);
            img.setAttribute('alt', `Player ${index + 1}`);
        });

        // hace visible los numeros de cada jugador cuando hay un equipo elegido
        numVisita.forEach(p =>
        {
            p.style.visibility = 'visible';
        });
    }
    else
    {
        visitor.forEach((img, index) =>
        {
            img.removeAttribute('src');
            img.removeAttribute('alt');
        });

        // Haz invisibles los elementos con clase "numero" cuando no hay equipo seleccionado
        numVisita.forEach(p =>
        {
            p.style.visibility = 'hidden';
        });
    }
});

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
makeElementDraggable(play11);
makeElementDraggable(play12);


