// hora.js

// Función para obtener la hora actual en formato HH:MM:SS
function obtenerHoraHHMMSS() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  }
  
  // Función para obtener la hora actual en formato HH:MM
  function obtenerHoraHHMM() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    return `${horas}:${minutos}`;
  }
  
  // Función para obtener la hora actual en formato HH
  function obtenerHoraHH() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    return `${horas}`;
  }
  
  module.exports = {
    obtenerHoraHHMMSS,
    obtenerHoraHHMM,
    obtenerHoraHH,
    obtenerHoraActual: function () {
        const fechaActual = new Date();
    
        return {
          hora: fechaActual.getHours(),
          minutos: fechaActual.getMinutes(),
          segundos: fechaActual.getSeconds(),
        };
      },
  };
  