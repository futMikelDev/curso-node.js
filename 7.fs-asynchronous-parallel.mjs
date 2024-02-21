// Asíncrono paralelo: al usar el 'Promise.all' se resuelven las dos promesas a la vez sin tener que esperar a que una se resuelva
// para que se resuelva la siguiente.

import { readFile } from 'node:fs/promises' 

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('Leyendo el primer archivo...--')
  console.log('Primer texto:', text)
  console.log('--> Haz cosas mientras lee el archivo...')
  console.log('Leyendo el segundo archivo...--')
  console.log('Segundo texto:', secondText)
})
