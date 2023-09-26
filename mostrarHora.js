var http = require('http');
var fs = require('fs');
var parser = require('./parser_var.js');
var p = parser.parse_vars;
var datos = parser.batman;
var horaModulo = require('./hora.js'); // Importa el módulo de hora

http.createServer(function (req, res) {
  fs.readFile('./form.html', function (err, html) {
    var html_string = html.toString();

    var respuesta = p(req),
      parametros = respuesta['parametros'],
      valores = respuesta['valores'];

    for (var i = 0; i < parametros.length; i++) {
      html_string = html_string.replace('{' + parametros[i] + '}', valores[i]);
    }

    html_string = html_string.replace('{identidad}', datos['identidad']);
    html_string = html_string.replace('{poder}', datos['poder']);


    var horaHHMMSS = horaModulo.obtenerHoraHHMMSS();
    var horaHHMM = horaModulo.obtenerHoraHHMM();
    var horaHH = horaModulo.obtenerHoraHH();

    html_string = html_string.replace('{hora_hh_mm_ss}', horaHHMMSS);
    html_string = html_string.replace('{hora_hh_mm}', horaHHMM);
    html_string = html_string.replace('{hora_hh}', horaHH);

    var horaActual = horaModulo.obtenerHoraActual();
    var horaFormateada = `${horaActual.hora}:${horaActual.minutos}:${horaActual.segundos}`;
    html_string = html_string.replace('{hora_actual}', horaFormateada);

    res.writeHead(200, { 'Content-type': 'text' });
    res.write(html_string);
    res.end();
  });
}).listen(8080);
