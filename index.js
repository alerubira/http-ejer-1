const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Mostrar mensaje en consola
  console.log('Servidor web iniciado');

  // Parsear la URL de la solicitud
  const parsedUrl = url.parse(req.url, true);

  // Obtener información del método HTTP, host, ruta y recurso
  const method = req.method;
  const host = req.headers.host;
  const path = parsedUrl.pathname;
  const resource = path === '/' ? 'index.html' : path.slice(1);

  // Mostrar la información en la consola
  console.log(`Método: ${method}`);
  console.log(`Host: ${host}`);
  console.log(`Ruta: ${path}`);
  console.log(`Recurso: ${resource}`);

  // Responder con un mensaje HTML formateado
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const responseHTML = `
    <div style="border: 1px solid #ccc; padding: 10px; margin: 20px;">
      <p>Vienvenido a mi primera pagina WEB</p>
      <p>Método HTTP: ${method}</p>
      <p>Host: ${host}</p>
      <p>Ruta: ${path}</p>
      <p>Recurso: ${resource}</p>
    </div>
  `;
  res.end(responseHTML);
});

const PORT = 8000;

// Escuchar en el puerto 8000
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
