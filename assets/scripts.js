const saveUser = (event) => {
    event.preventDefault() // Para que no se recargue la pagina y se haga el POST
    console.log("click en boton")

    //Rescatar valor de campo correo


    var name = document.getElementById("name").value
    var correo = document.getElementById("email").value

    console.log("valor de name", name)
    console.log("valor de correo", correo)



    // Rescatar valor de campo nombre 
    // Almacenar en el localStorage

}