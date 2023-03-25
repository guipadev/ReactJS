/********************* FUNCTION *********************/
function hello() {
    console.log('Hola mundo')
}

function hello2() {
    return 'Hola mundo dos' // Ademas del string puede devolver numero, boolean, arreglo, objeto u/o función
}

// FUNCTIONAL PROGRAMMING
function retornaFuncion() {
    return function() {
        return 'Hola funcion retornada'
    }
}

hello()
console.log(hello2())
console.log(retornaFuncion()())

/********************* FUNCTION PARAMETERS *********************/
function funcionConParametro(name) {
    return 'Hola ' + name
}

console.log(funcionConParametro('Bryan'))

function add(x, y) {
    return x + y
}

console.log(add(10, 8))

// DEFAULT PARAMETERS
function add2(x = 0, y = 0) {
    return x + y
}

console.log(add2(8))

/********************* OBJETOS *********************/
// Todo lo que es clave valor y no funcion se llama PROPERTIES
// Y lo que ejecuta funciones se conoce como METHODS
const user = {
    name: 'ryan',
    lastname: 'brand',
    age: 30,
    address: {
        country: 'colombia',
        city: 'bogota',
        street: 'main street 123'
    },
    friends: ['brando', 'elena'],
    active: true,
    sendMail: function () {
        return 'sending email...'
    }
}

console.log(user)
console.log(user.name)
console.log(user.address.city)
console.log(user.sendMail())

/********************* SHORTHAND PROPERTY NAMES *********************/
const name = 'lapto'
const price = 3000

/* Cuando se tiene el mismo nombre y valor
const newProduct = {
    name: name,
    price: price
}
*/

const newProduct = {
    name,
    price
}

console.log(newProduct)

/********************* MANIPULACION DEL DOM *********************/
const title = document.createElement('h1')
title.innerText = 'Hola mundo desde JS'

const button = document.createElement('button')
button.innerText = 'click'

// EVENT HANDLERS (ESCUCHAS O MANEJADORES DE EVENTOS)
button.addEventListener('click', function () {
    alert('Hola mundo JS')
    title.innerText = 'Texto actualizado con JS'
})

document.body.append(title)
document.body.append(button)

/********************* OBJETOS COMO PARAMETROS *********************/
const textSub = document.createElement('h3')
textSub.innerText = 'Subtitulo H3'
document.body.append(textSub)

const persona = {
    name: 'jose',
    age: 28
}

function printInfo(persona) {
    return `<h3>Hola ${persona.name} </h3>`    
}

console.log(printInfo(persona))

textSub.innerHTML = printInfo(persona)

/********************* DESTRUCTURING *********************/ 
// Destructurar un objeto
const persona2 = {
    name: 'jose',
    age: 28
}

function printInfo2({ name }) {
    return "<h3>Hola " + name + " </h3>"    
}

// Otra forma de destructurar
function printInfo3(persona2) {
    const { name, age } = persona2

    return "<h3>Hola " + name + " </h3>"    
}

console.log(printInfo2(persona2))

//document.body.innerHTML = printInfo2(persona2)

/********************* FUNCIONES ANÓNIMAS *********************/ 

console.log(function() {
    return 'Cargando...'
}())


// Ejemplo
const button2 = document.createElement('button')
button2.innerText = 'presioname'

button2.addEventListener('click', function () {
    alert('Me haz presionado 😤')
})

// Otra opcion
function handleClick() {
    alert('Otra presionado')
}

button2.addEventListener('click', handleClick)

document.body.append(button2)

/********************* ARROW FUNCTIONS *********************/ 
const add3 = () => {
    return x + y
}

const add4 = (x, y) => {
    return x + y
}

button2.addEventListener('click', () => {
    alert('Me haz presionado 😤')
})

/********************* INLINE ARROW FUNCTIONS *********************/
const showText = () => 'Hola inline arrow functions'
const showNumber = () => 22
const showBoolean = () => true
const showArray = () => [1, 2, 3]
// Forma de retornar objeto
const showObject = () => ({name: 'Ernesto'})

console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject())

/********************* RETURN EN FUNCIONES *********************/
const button4 = document.createElement('button')
button4.innerHTML = "Click boton 4"

const isAuthorized = true

button4.addEventListener('click', () => {
    if (isAuthorized) {
        return alert("Esta autorizado")
    }

    alert("No esta autorizado")
})

document.body.append(button4)

/********************* STRING LITERALS *********************/
const fondo = 'tomato'
const color = 'white'
const autorizado = true

const button5 = document.createElement('button')
button5.innerText = "Presiona"
button5.style = `background: ${autorizado ? fondo : 'black'}; color: ${color}`

button5.addEventListener('click', () => {
    if (autorizado) {
        return alert("Autorizado")
    }

    alert("No Autorizado")
})

document.body.append(button5)

/********************* ARRAY METHODS *********************/
const names = ['Messi', "Ronaldo", "Di Maria"]

/* Ya no se utilizan tantos el tipico FOR

for (let i = 0; i < names.length; i++) {
    const element = names[i]
    console.log(element)
}
*/

names.forEach(function (name) {
    console.log(name)
})

// FUNCION MAP retorna nuevo arreglo
names.map(function (name) {
    console.log(name)
})

const newNames = names.map(function (name) {
    return name
})

console.log(newNames)

// FUNCION FIND
const nameFound = names.find(function(name) {
    if (name === 'Ronaldo') {
        return name
    }
})

console.log(nameFound)

// FUNCION FILTER
// Permite crear nuevo arreglo con los filtros
const namesFilter = names.filter(function (name) {
    if (name !== 'Ronaldo') {
        return name
    }
})

console.log(namesFilter)

// FUNCION CONCAT
const adicional = ['James', 'Cross', 'Embape']

console.log(names.concat(adicional))

/********************* SPREAD OPERATOR *********************/
// Más sencillo que CONCAT
console.log([...names, ...adicional])

// Ejemplo con objeto
const people = {
    name: 'Leon',
    lastname: 'Jaramillo'
}

const direction = {
    street: 'avenida siempre viva',
    city: 'sprinfield'
}

const objetoTotal = {
    ...people,
    ...direction
}

console.log(objetoTotal)

// Tampoco afecta los objetos
console.log(people)
console.log(direction)

/********************* ECMASCRIPT MODULES *********************/
import {sumatoria, multiplicacion} from './add.js'

console.log(sumatoria(5, 5))
console.log(multiplicacion(5, 5))

import cosita from './add.js'

console.log(cosita)

/********************* OPTIONAL CHAINING *********************/
const pitufo = {
    name: 'Pitufina',
    address: {
        city: 'london'
    },
}

// Si existe location mostrara dato y si no undefined pero no genera error
console.log(pitufo.location?.city)

/********************* ASYNC AWAIT *********************/
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function () {
        console.log('Finalizada la carga')
    })

const ul = document.createElement('li')
const li = document.createElement('li')

// Con response
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json()
        // console.log(response)
    }).then(function (data) {
        console.log(data)

        //data.forEach(function (post) {
        //    const li = document.createElement('li')
        //    li.innerText = post.title
        //    ul.append(li)
        //})
        document.body.append(ul)
    })

console.log('linea 2')

// MEJOR FORMA DE ESCRIBIR ESTA SOLICITUD CON AWAIT

async function loadData() {
    const responde = await fetch('https://jsonplaceholder.typicode.com/posts')

    const datoRta = await responde.json()

    console.log(datoRta)

    datoRta.forEach(function (post) {
        const li = document.createElement('li')
        li.innerText = post.title
        ul.append(li)
    })
}

loadData()












