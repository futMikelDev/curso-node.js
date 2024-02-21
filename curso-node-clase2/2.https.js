const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => { // función que se pasa como función de primera clase como parámetro de la función de abajo para que veamos la lógica de procesar las peticiones
  // console.log('request recived ', req.url)  <-- así vemos como se renderiza sólamente una vez(y no el favicon)
  if (req.url === '/') {
    res.statusCode = 200 // se puede obviar porque por defecto es status code 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8') // también puede ser 'text/plain', 'aplication/json'
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/imagen-buena.png') {
    // res.setHeader('Content-Type', 'image.png')  <-- para que sepa que es una imagen
    fs.readFile('./foto.png', (err, data) => {
      /*
      el 'data' es la información que hemos leído; en sí es un 'buffer' de datos:
      'buffer' es una clase global en node para trabajar con datos binarios, cualquier
      dato que le pasamos lo lee en binario y lo guarda en un espacio de la memoria física
      de forma temporal hasta que se puedan tratar (lee los datos binarios de 'foto.png' y
      los reserva (buffer) porque no sabe si es una imagen y con el 'data' le decimos que
      esos datos los envíe a la respuesta, pero ya le hemos dicho con la cabecera que es
      una imagen ('image.png') y será capaz de procesarlo)
      */
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        // res.statusCode = 200 <-- por defecto, así que lo podemos obviar
        res.setHeader('Content-Type', 'image.png')
        res.on(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // se puede obviar porque por defecto es status code 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>404 Not Found</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
