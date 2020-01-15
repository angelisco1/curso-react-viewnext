var nombre = 'Angel';
let apellido = 'Villalba';

function fn() {
    var a = 1;
    let b = 1;
    if (true) {
        var a = 2;
        let b = 2;
        console.log(a, b) // 2, 2
    }
    console.log(a, b) // 2, 1
}


fn();

const msg = "Hola mundo";
// msg = 'Hola a todxs';

const colores = ['blanco', 'gris', 'negro'];

// for (let i in colores) {
//     console.log(colores[i]);
// }

// for (let color of colores) {
//     console.log(color);
// }

// function muestraColor(color) {
//     console.log(color)
// }

// colores.forEach(muestraColor)

// colores.forEach(function (color) {
//     console.log(color)
// })

// FUNCIONES FLECHA

colores.forEach(color => {
    console.log(color)
})

const resultado = colores.forEach(color => {
    console.log(color)
})

function muestraColor(color) {
    console.log(color)
}

const resultado = colores.forEach(muestraColor);

// (p1, p2) => {}
// () => {}
// p1 => {}
// (p1) => {}
// (n1, n2) => {return n1 + n2}
// (n1, n2) => n1 + n2

// (n1, n2) => {
    // let suma = n1 + n2;
    // return suma
// }

// map
const nums = [1, 2, 3, 4];

const numsX3 = nums.map(n => n * 3)

console.log(numsX3);

// filter
const numsMayoresA10 = numsX3.filter(n => n > 10)
console.log(numsMayoresA10);

// reduce, every, any

// this

const coche = {
    marca: 'Tesla',
    modelo: 'Roadster',
    sonido: 'Piiiiiii',
    tocarClaxon: function() {
        console.log(this)
        console.log(this.sonido);
        // var self = this;
        // function mostrarInfo() {
        //     // console.log(this)
        //     console.log(self.marca + ' ' + self.modelo);
        // }
        // mostrarInfo()
        const mostrarInfo = () => {
            console.log(this.marca + ' ' + this.modelo)
        }
        mostrarInfo();
    }
}

coche.tocarClaxon();


// bind

// coche.tocarClaxon = coche.tocarClaxon.bind({sonido: 'Piii Pii Piii'});
// coche.tocarClaxon()

// spread operator

const persona = {
    nombre: 'Charly',
    apellido: 'Falco'
}

// const persona2 = persona;

const persona2 = {...persona};
persona2.apellido = 'Otro apellido';

// persona = {nombre: 'Charly',apellido: 'Falco'}
// persona2 = {nombre: 'Charly',apellido: 'Otro apellido'}

console.log(persona)
console.log(persona2)

function getNumLoteria(n, ...nums) {
    console.log(n, nums);
    return nums.join(', ');
}

const numLoteria = getNumLoteria(1, 2, 3, 4, 5, 6, 7)
console.log(numLoteria);

// let n = 1;
// let n2 = n;
// n2 = 7;

// Desestructuración

// const nombre = persona.nombre;
// const apellido = persona.apellido;

// const {marca, modelo} = coche;
// console.log(marca, modelo);
const {marca:m, modelo:mo} = coche;
console.log(m, mo);

const [b, , gris] = colores;
console.log(b, gris);

// template string

console.log(m + ' ' + mo);

console.log(`${m} ${mo}`);



