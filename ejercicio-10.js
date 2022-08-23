class Estudiante{
    constructor(nombre, asignaturas){
        this.nombre = nombre
        this.asignaturas = ["Javascript", "HTML", "CSS" ]
    }
    obtenDatos(){
        return this.nombre, this.asignaturas
    }   
}

const estudiante = new Estudiante("Hernan",1)


estudiante.obtenDatos('Hernan')
