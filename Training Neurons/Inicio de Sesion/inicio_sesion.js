let correo = document.querySelector("#correo")
let password = document.querySelector("#password")

if(correo.value != "" && password.value != "") {
    correo.classList.add("is-valid");
    correo.classList.remove("is-valid");
    password.classList.add("is-valid");
    password.classList.remove("is-valid");
}
else{
    correo.classList.add("is-valid");
    correo.classList.remove("is-valid");
    password.classList.add("is-valid");
    password.classList.remove("is-valid");
}
person.forEach((person) => {
    console.log(correo.value, password.value)
    if (
    person.correo == correo.value &&
    person.password == password.value
    ) {
    window.location.href = "./salir.html";
    sessionStorage.setItem('usurioLogeado', true)
    sessionStorage.setItem('imagenes',String(person.imagenes))
    sessionStorage.setItem('saludo',person.nombre)
    }

});

