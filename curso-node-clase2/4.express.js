const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by') // para deshabilitar la 'publicidad' de express

/*
MIDDLEWARE: función para tratar las request y realizar lo que queramos
con ellas mediante código. Se ejecuta entre la request y la respuesta e
intercepta la petición de entrada para modificarla o lo que queramos
*/
app.use((req, res, next) => { // <-- 'volver a ver (2º vídeo al final)'
  console.log('Mi primer middleware')
  next() // para que sepa que tiene que pasar a la siguiente request
})

/*
En contraposición a la otra metodología en 'routing.js' donde teníamos una
función que respondía cada vez a todas la request de forma imperativa y era
dentro de la función donde teníamos que discriminar según método o ruta.
Ahora lo hacemos de forma que se basa más en las rutas, le decimos la 'app'
y luego la acción (GET, POST...) y dentro le decimos que en la ruta '/' ahora
sí que hacemos una función que le responde cuando hace un get en esa ruta
*/
app.get('/pokemon/ditto', (req, res) => {
  // res.status(200).send('<h1>Mi página</h1>') --> Se puede hacer así por express
  // se puede quitar el status (por defecto) y además no hace falta el Content-Type
  // res.json({ message: 'Hola mundo' }) <-- otra forma de devolver json directamente
  res.json(ditto)
})

// para el POST me he copiado el post de 'routing.js' pero apañándolo un poco
app.post('/pokemon', (req, res) => {
  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
})

// Para tratar los errores, debe ser en orden, por lo que entraría la última
// El '.use' es como el *, que sirve para todas, no solamente 'get' o 'post'...
app.use((req, res) => {
  res.status(404).send('<h1>404 Not found</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
