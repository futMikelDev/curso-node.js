// Asíncrono secuencial: Se resuelve una promesa y después la otra, pero no bloquea

import { readFile } from 'node:fs/promises' 

console.log('Leyendo el primer archivo...--')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)

console.log('--> Haz cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...--')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log(secondText)


// si la extensión es '.js' no se puede hacer sólo con 'await', habría que encerrarlo en una IIFE
//const { readFile } = require('node:fs/promises')

// ;(  // <-- comienzo de la IIFE con el ';' para que no se equivoque
//   async ()=> {  // <-- y el 'async' antes de la función
//   console.log('Leyendo el primer archivo...--')
//   const text = await readFile('./archivo.txt', 'utf-8')
//   console.log('primer texto:', text)

//   console.log('Haz cosas mientras lee el archivo...')

//   console.log('Leyendo el segundo archivo...--')
//   const secondText = await readFile('./archivo2.txt', 'utf-8')
//   console.log(secondText)
//   }
// )()

