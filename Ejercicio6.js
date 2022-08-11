
const listaCompra  = [ "agua", "leche", "pan", "cafe", "azucar" ]

listaCompra.push("Aceite de Girasol")

console.log(listaCompra)

listaCompra.pop("Aceite de Girasol")

console.log(listaCompra)

const peliculasFavoritas = [
    { titulo: "Harry Potter 1", director: "Chris Columbus", fecha: 2001 },
    { titulo: "Harry Potter 2", director: "Chris Columbus", fecha: 2002 },
    { titulo: "Harry Potter 3", director: "Alfonso Cuarón", fecha: 2004
}  ]

const peliculasNuevas = peliculasFavoritas.filter(obj => obj.fecha > 2003)
console.log(peliculasNuevas)

const directores = peliculasFavoritas.map((valor,indice) => `${valor.director}`)

console.log(directores)

const titulos = peliculasFavoritas.map((valor,indice) => `${valor.titulo}`)

console.log(titulos)

const concatenacion1 = titulos.concat(directores)

console.log(concatenacion1)

const concatenacion2 = [...directores, ...titulos];

console.log(concatenacion2)
