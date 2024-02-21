const http = require('node:http')
const dittoJson = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req // de cada request sacamos el method y la url

  switch (method) {
    case 'GET':
      switch (url) {
        // case './': <-- general, pero lo vamos a hacer con la página de 'pokemon'; "pokeapi.co"
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'aplication/json; charset=utf-8') // se le cambia el 'text/html' porque estamos importando el json del ditto
          return res.end(JSON.stringify(dittoJson)) // se devuelve el dittoJson pero pasado a string con el JSON.stringify()
        default:
          res.statusCode = 400
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404 Not Found</h1>')
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''
/*
  Cuando hacemos una request con POST, le tenemos que pasar un 'body' (lo que estamos
  haciendo en el POST del 'api.http) y el servidor la va a tener que leer de la request
  escuchando el evento 'data'; conforme le va llegando la información del 'body' la va
  escuchando (pensemos que le llega la información como si fuera una tubería por la que
  pasa el agua, no llega todo de golpe, va pasando y hay que ir leyéndola). Mientras la
  request está enviando información 'req.on('data(información)', chunk(trozo))', para
  cada trozo, lo voy a guardar en una variable 'body'. Como esos trozos van llegando poco
  a poco y son un 'buffer'(datos binarios) hay que tratarlos
*/
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => { // <-- para saber que el último trozo('chunk') ha llegado, escuchando el evento
            const data = JSON.parse(body) // <-- si ha terminado ya tenemos la 'data' y lo podemos parsear en el 'body'
            // como ya tenemos la información podríamos llamar a una DB para guardar la info, p.ej.
            res.writeHead(201, { 'Content-Type': 'aplication/json; charset=utf-8' }) // otra forma de escribir la cabecera en vez del 'statusCode' y 'setHeader'
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break
        }

        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('404 Not Found')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('Server listening on port http://localhost:1234')
})
