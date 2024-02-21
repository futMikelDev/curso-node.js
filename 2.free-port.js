// Aplicación que nos busca un puerto disponible

const net = require('node:net') // protocolo NET, alternativa a http

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    // resolve(0)
    const server = net.createServer()
    // la lógica del archivo http.js
    server.listen(desiredPort, () => {
      const { port } = server.address() // const port = server.address().port
      server.close(() => {
        resolve(port)
      })
    })
    // Node se basa en eventos, podemos escuchar el evento error
    server.on('eror', (err) => {
      if (err.code === 'EADDRINUSE') { // ERROR ADDRESS IN USE
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort } // se exporta para 1.http.js
