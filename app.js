const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
var colors = require('colors');

console.clear();
console.log(argv)

 crearArchivo (argv.base, argv.l, argv.h)
    .then((nombreArchivo) => {
        console.log(nombreArchivo.rainbow, 'creado');
    }).catch((err) => {
        console.log(err);         
    });

/*
fs.writeFile(`tabla-${base}.txt`, salida,(err) =>{
    if(err) throw err;
    console.log(`tabla-${base}.txt creada exitosamente`);
})*/
