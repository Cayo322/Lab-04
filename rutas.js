const http = require('http');
const fs = require('fs');
const path = require('path');

// Mapeo de rutas a archivos HTML
const routeMappings = {
  '/inicio': 'inicio.html',
  '/galeria': 'fotos.html',
  '/contacto': 'contacto.html',
};

http.createServer((req, res) => {
  const requestedRoute = req.url;


  if (routeMappings[requestedRoute]) {
    const filePath = path.join(__dirname, routeMappings[requestedRoute]);

    // Lee el archivo HTML asociado a la ruta
    fs.readFile(filePath, (err, htmlContent) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno del servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
      }
    });
  } else {
    // Si la ruta no está mapeada, muestra un mensaje de error
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Pagina no encontrada');
  }
}).listen(8080);

console.log('Servidor en funcionamiento en http://localhost:8080');
