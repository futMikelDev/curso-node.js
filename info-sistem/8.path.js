const path = require('node:path')

console.log(path.sep) // <-- separador ( / para 'unix' - \ para 'windows' )

const filePath = path.join('.', '/content', 'arch', 'test.txt')
console.log(filePath) // <-- content\arch\test.txt

const base = path.basename('tmp/mikel/secrets/password.txt')
console.log(base) // <-- devuelve el último archivo 'password.txt'

const fileName = path.basename('tmp/mikel/secrets/password.txt', '.txt')
console.log(fileName) // <-- devuelve el último archivo sin la extensión 'password'

const extension = path.extname('image.jpg')
console.log(extension);