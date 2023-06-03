window.addEventListener("load", function () {
    //Evento onclick para desplegar el video
    const card = document.querySelectorAll(".card");

    card.forEach(element => {
        element.addEventListener("click", () => {
 
            //Reemplazamos el contenido
            document.getElementById("reproductor").innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${element.dataset.video}" frameborder="0" allowfullscreen></iframe>
    `;

        });
    });
});
