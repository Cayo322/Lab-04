const http = require('http');
const url = require('url');
const querystring = require('querystring');


function calcularDiasFaltantes(fechaObjetivo) {
  const fechaActual = new Date();

  // Convierte la fecha objetivo en un objeto Date
  const fechaObjetivoDate = new Date(fechaObjetivo);

  const diferenciaMillis = fechaObjetivoDate - fechaActual;

  const diasFaltantes = Math.floor(diferenciaMillis / (1000 * 60 * 60 * 24));

  return diasFaltantes;
}

http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url);
  const queryParams = querystring.parse(parsedUrl.query);

  const fechaObjetivo = queryParams.fecha;

  if (fechaObjetivo) {
    const diasFaltantes = calcularDiasFaltantes(fechaObjetivo);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Faltan ${diasFaltantes} para: ${fechaObjetivo} `);
  } else {
    // mensaje de error
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Por favor, proporcione una fecha valida en la URL.');
  }
}).listen(8080);

console.log('Servidor en funcionamiento en http://localhost:8080');
