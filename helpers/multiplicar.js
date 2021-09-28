const fs = require('fs');

const crearArchivo = async ( base = 5, list, hasta ) => {

    try {
        console.log('========================');
        console.log('   Tabla del: ', base);
        console.log('========================');

        let salida = '';

        for(let i = 1; i <=hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i } \n`;
        }

        
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        if(list) console.log(`tabla-${ base }.txt creado`);

        return salida;
    } catch (error) {
        
        return error;
    }
}

module.exports = { 
    crearArchivo
}