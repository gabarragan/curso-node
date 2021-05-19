const fs = require('fs');
var colors = require('colors');

const crearArchivo = async(base = 5, l = false, hasta = 10) => {
   
 
    try {
        if(l){
            console.log("====================".green);
            console.log("    Tabla del ".green + colors.blue(base) );
            console.log("====================".green);
        }
        
        let salida= "";
        let consola = "";

        for (let index = 1; index <= hasta; index++) {
            let valor = base * index;
            salida += `${base} x ${index} = ${valor}\n`;
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${valor}\n`;   
        }
        if(l){
            console.log(consola)
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return(`tabla-${base}.txt`);
    } catch (error) {
        
    }
    
}
module.exports ={
    crearArchivo : crearArchivo
}