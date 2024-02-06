

// Inicio de sesion 
function iniciar(){
  let correo = document.querySelector("#email")
  let password = document.querySelector("#password")
  let verification = document.querySelector("#verification");
 
  fetch ('http://localhost:3000/users')
  .then(response => {return response.json()})
  .then(data => {
    data.forEach(function(user){
      if(correo.value == user.email & password.value == user.password){
        localStorage.setItem("user", JSON.stringify(user));

        location.href = "./../index.html";
      } 
      else{
        verification.innerHTML = "Correo o contraseña es invalido"
        verification.style.color = "red";
      }
    })
  })
};
