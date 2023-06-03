// Función para formatear el tiempo
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Función para actualizar el contador
function updateCounter() {
    // Obtener la fecha y hora actual
    const now = new Date();

    // Definir la fecha y hora objetivo 
    const target = new Date(2023, 8, 30, 0, 0, 0);

    // Calcular la diferencia entre la fecha y hora actual y la objetivo
    const diff = Math.abs(target - now); // Utilizamos Math.abs() para obtener el valor absoluto de la diferencia

    // Calcular los días, horas, minutos y segundos restantes
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / (1000 * 60)) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    // Mostrar el contador en el elemento con id "contador"
    document.getElementById("contador").innerHTML = `
      <div class="circle">
      <span clasS="number">${formatTime(days)}</span><p class="desc"> DÍAS</p>
      </div>

      <div class="circle">
      <span clasS="number">${formatTime(hours)} </span><p class="desc"> HRS.</p>
      </div>

      <div class="circle">
      <span clasS="number">${formatTime(minutes)} </span><p class="desc"> MIN.</p>
      </div>

      <div class="circle">
      <span clasS="number">${formatTime(seconds)} </span><p class="desc"> SEG.</p>
      </div> 
    `;
}

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);