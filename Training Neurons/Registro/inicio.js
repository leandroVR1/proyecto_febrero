document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera convencional

    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var birthdate = document.getElementById('birthdate').value;
    var country = document.getElementById('country').value;
    var city = document.getElementById('city').value;

    // Verifica si se seleccionó alguna opción de radio antes de intentar obtener el valor
    var genderElement = document.querySelector('input[name="Genero"]:checked');
    var gender = genderElement ? genderElement.value : null;

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verifica si al menos uno de los campos requeridos está vacío
    if (!name || !lastname || !phone || !birthdate || !country || !city || !gender || !email || !password) {
      alert('Por favor, completa todos los campos del formulario.');
      return; // Evita continuar con la solicitud si hay campos vacíos
    }

    var userData = {
      name: name,
      lastname: lastname,
      phone: phone,
      birthdate: birthdate,
      country: country,
      city: city,
      gender: gender,
      email: email,
      password: password
    };

    fetch('http://192.168.21.165:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        sessionStorage.setItem("nombre", name);
        // Si los datos se envían correctamente al servidor, realiza la redirección
        window.location.href = "http://127.0.0.1:5500/Logeado/index.html";
      })
      .catch(error => {
        console.error('Error al enviar datos:', error);

      });
  });
});
