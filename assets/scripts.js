const saveUser = (event) => {
    event.preventDefault() // Para que no se recargue la pagina y se haga el POST


    //Rescatar valores
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var valueUsers = [{
        name,
        email
    }]

    // Almacenar en el localStorage
    localStorage.setItem("Users", JSON.stringify(valueUsers))
    printUsers()

}
const printUsers = () => {
    var Users = JSON.parse(localStorage.getItem("Users"))

    for (let index = 0; index < Users.length; index++) {
        console.log(Users[index])
        var liElement = document.createElement("li");
        var att = document.createAttribute("id");
        att.value = Users[index].name;
        liElement.setAttributeNode(att);
        liElement.innerHTML = `
            <a href="#" onclick="handleClick(event)">
            <ion-icon name="trash-outline"></ion-icon>
            ${Users[index].name}( ${Users[index].email})
            </a>`
        document.getElementById("list").appendChild(liElement)
    }
}


const handleClick = (event) => {
    var Users = JSON.parse(localStorage.getItem("Users"))

    event.target.parentNode.remove()


    // localStorage.removeItem("")
}