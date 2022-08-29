

var nombre = "hernan";
var apellido = "verzini";

localStorage.setItem(nombre, apellido)
sessionStorage.setItem(nombre, apellido)

document.cookie = "nombreCookie=hernanCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2022,7,29)
