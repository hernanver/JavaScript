
const obj = {
    nombre: "Hernan",
    apellido: "Verzini",
    edad: 28,
    altura: 1.73,
    eresDesarrollador: false
}

let edad = obj.edad


const lista = [obj]

const listaOrdenada = lista.sort((a,b)=> a.edad -b.edad)
console.log(lista)
