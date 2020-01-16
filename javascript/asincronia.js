const fs = require('fs');

// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 100)
// console.log(3)


// let nombreArchivo = null;
// let msg = null;

fs.readFile('texto.txt', (err, data) => {
    console.log(data.toString())
    const nombreArchivo = data.toString()

    fs.readFile(nombreArchivo, (err, data) => {
        const msg = data.toString();
        
        console.log(msg);
    });
});



function leeArchivo(archivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(archivo, (err, data) => {
            resolve(data.toString());
        })
    })
}

leeArchivo('texto.txt')
    .then((datos) => {
        console.log(datos)
        return leeArchivo(datos)
    })
    .then((msg) => {
        console.log(msg);
    })