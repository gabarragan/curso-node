const argv = require('yargs')
                    .options('b',{
                        alias:'base',
                        type:'number', 
                        demandOption: true, 
                        describe : 'Es la base de la multiplicacion.'
                    })
                    .options('l',{
                        alias:'listar',
                        type:'boolean',
                        default: false,
                        describe:'Muestra o no la tabla por consola'
                    })
                    .options('h',{
                        alias:'hasta',
                        type:'number', 
                        demandOption: true, 
                        describe : 'Limite superior de la tabla multiplicar'
                    })

                    .check( (argv, options) => {
                        if (isNaN (argv.b)){
                            throw 'La base tiene que ser numerica.'
                        }
                        if (isNaN (argv.h)){
                            throw 'El valor hasta tiene que ser numerico.'
                        }
                        return true
                    })
                    .argv;

module.exports = argv;