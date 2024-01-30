document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera convencional
  
    
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var birthdate = document.getElementById('birthdate').value;
    var country = document.getElementById('country').value;
    var city = document.getElementById('city').value;
    var gender = document.querySelector('input[name="Genero"]:checked').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
   
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
      // Puedes realizar acciones adicionales según la respuesta del servidor
    })
    .catch(error => {
      console.error('Error al enviar datos:', error);
      // Maneja el error de manera adecuada
    });
  });