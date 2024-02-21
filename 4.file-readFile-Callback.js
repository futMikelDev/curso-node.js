const fs = require('node:fs')

//para convertir 'callbacks' en promesas con commonJs sin el 'promises' nativo de Node.js con "promisify"

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

// console.log('Leyendo el primer archivo...--')
// readFilePromise('./archivo.txt', 'utf-8')
//   .then(text => console.log('Primer texto:', text))

// console.log('--> Haz cosas mientras lee el archivo...')

// console.log('Leyendo el segundo archivo...--')
// readFilePromise('./archivo2.txt', 'utf-8')
//   .then(text => console.log('Segundo texto:', text))

// ------------------------------------------------------------------------- //

console.log('Leyendo el primer archivo...--')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  console.log(text)
})

console.log('--> Haz cosas mientras lee el archivo...')


console.log('Leyendo el segundo archivo...--')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log(text)
})
 
