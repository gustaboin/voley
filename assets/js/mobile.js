let navegador = navigator.userAgent;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
{
    const contDraw = document.getElementById('main-container');
    contDraw.style = "background: url('assets/img/field_mobile.jpg'); background-repeat: no-repeat;";

    contDraw.setAttribute('width', `400 px`);
    contDraw.setAttribute('height', `240 px`);

    const choice = document.getElementById('choice');
    //console.log(choice);
    choice.style.display = "inline-grid";
    choice.style.width = "100%";

    const btnText = document.getElementById('btnBorrar');
    // console.log(btnText);
    btnText.innerHTML = "Borrar";

    /*
        let img = document.getElementsByTagName('img');
        //console.log(elements);
        local.forEach((img) =>
        {
            img.setAttribute('width', `40 px`);
        });
        visitor.forEach((img) =>
            {
                img.setAttribute('width', `40 px`);
            });
    
        let selectMobi = document - getElementsByTagName('select');
        local.forEach((select) =>
        {
            select.setAttribute('margin', `2 px`);
    
        });
    */

    const localImages = document.querySelectorAll('.local');
    const visitorImages = document.querySelectorAll('.visitor');

    localImages.forEach(img =>
    {
        img.setAttribute('width', '40px');
    });

    visitorImages.forEach(img =>
    {
        img.setAttribute('width', '40px');
    });
}