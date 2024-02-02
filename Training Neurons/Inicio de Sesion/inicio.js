/* // Función para generar un ID único
function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('iniciar').addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!name || !lastname || !phone || !birthdate || !country || !city || !gender || !email || !password) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    // Crea un objeto con los datos del usuario
    var userData = {
      id: generateUniqueId(),
      name: name,
      lastname: lastname,
      phone: phone,
      birthdate: birthdate,
      country: country,
      city: city,
      gender: gender,
      email: email,
      password: password,
      misCursos: []  // Agrega el campo misCursos e inicialízalo como un array vacío
    };

    localStorage.setItem("user", JSON.stringify(userData));

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);

        // Si los datos se envían correctamente al servidor, realiza la redirección
        window.location.href = "http://127.0.0.1:5501/Training%20Neurons/index.html";

      })
      .catch(error => {
        console.error('Error al enviar datos:', error);
      });
  });

 */

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
        sessionStorage.setItem("name",user.name);
        window.location.href = "http://127.0.0.1:5502/Training%20Neurons/index.html";
      } 
      else{
        verification.innerHTML = "Correo o contraseña es invalido"
        verification.style.color = "red";
      }
    })
  })
};
