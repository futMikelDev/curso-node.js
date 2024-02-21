const process = require('node:process');
// console.log(process.argv); // <-- primero devuelve el binario,luego la ruta y después los argumentos(comandos)

// process.exit(1) // <-- controla el proceso y su salida; 0 ó 1

// process.on('exit', () => {
  // limpiar el proceso
// }) // <-- controla los eventos del proceso (lo de dentro es un ejemplo)

// process.cwd() // <-- 'current working directory' 

// console.log(process.cwd())

console.log(process.env.MIKEL); // <-- variables de entorno; en la terminal -> MIKEL=hola node 10.process.js

