let rol = prompt("Ingresar Rol")

if(rol === 'ADMIN'){
    console.log("El usuario puede editar eliminar y leer todos la info")
}else if(rol === "EDITOR") {
    console.log("El usuario puede editar la informacion")
}else {
    console.log("Invitados solo pueden leer")
}
