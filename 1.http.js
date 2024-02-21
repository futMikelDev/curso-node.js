const http = require('node:http') // protocolo http
// --> const { findAvailablePort } = require('./2.find-port.js')

const server = http.createServer((req, res) => {
  console.log('request recieved')
  res.end('Hola mundo')
})

console.log(process.env)

// ---> const desiredPort = process.env.PORT ?? 3000 // variable de entorno

// --> findAvailablePort(1234).then(port => { ---> en vez de '1234' -> 'desiredPort'
//      server listen(port, () => {
//        console.log(`server listening on port http://localhost:${port)
//      })
//    })

/*
Lógica para encontrar un puerto
el puerto '0' te encuentra automaticamente el primero que esté disponible
el 'server' nos ayuda a hacerlo
al poner 'http://localhost:...' lo hacemos clicable
*/
server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`)
})

// --> como quedaría con módulos(habría que borrar el código que hay justo arriba)
