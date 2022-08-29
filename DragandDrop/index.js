

const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const imagen = document.querySelectorAll(".imagen")

 parrafos.forEach (parrafo =>{
     parrafo.addEventListener("dragstart", event =>{
         console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
         parrafo.classList.add("dragging")
         event.dataTransfer.setData("id", parrafo.id)
         const elemento_fantasma = document.querySelector(".imagen-fantasma")
         event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
     })
     parrafo.addEventListener("dragend", () => {
        //  console.log ("Не terminado de arrastrar")
        parrafo.classList.remove("dragging")
        })

    })

    secciones.forEach (seccion =>{
        seccion.addEventListener("dragover", event =>{
            event.preventDefault()
            event.dataTransfer.dropEffect= "copy"
            
        })
        seccion.addEventListener("drop", event => {
            console.log("Drop")
            const id_parrafo= event.dataTransfer.getData("id")
            const parrafo = document.getElementById(id_parrafo)
            seccion.appendChild(parrafo)
        })

    imagen.forEach(imagen =>{

        imagen.addEventListener("borrar", event=> {
            event.preventDefault()
            event.dataTransfer.clearData(id_parrafo)
        
        })
    })
   
       })
