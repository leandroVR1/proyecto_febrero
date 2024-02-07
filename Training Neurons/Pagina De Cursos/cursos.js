



let root = document.getElementById('root');
var container = document.createElement('div');
container.classList.add('container2');
root.appendChild(container);

let apiCursos = "http://localhost:3000/categories";
let datos = [];

function cargarDatos() {
    fetch(apiCursos)
        .then(response => response.json())
        .then(data => {
            datos = data;
            cargarTargetas();
        })
        .catch(error => console.error("error al cargar los datos", error));
}

function cargarTargetas() {
    let idCurso = localStorage.getItem('cursos');
    console.log(idCurso);

    let userCourses = datos.filter(function (dato) {
        return dato.categoria == idCurso;
    });

    container.innerHTML = '';

    let row = document.createElement('div');
    row.classList.add('row', 'mt-5');
    container.appendChild(row);

    userCourses.forEach(categories => {
        let cursoCard = document.createElement("div");
        cursoCard.className = "col-md-4"; 

        cursoCard.innerHTML = `
            <div class="card" id="${categories.id}">
                <div class="content">
                    <div class="encabezado">
                        <div class="icono" onclick="agregarCurso('${categories.id}')">
                            <button id="boton${categories.id}"><i class="fas fa-star" style="color: #f6d32d;"></i></button>
                        </div>
                        <div class="categoria">
                            <label for="">${categories.categoria}</label>
                        </div>
                    </div>

                    <div class="titulo">
                        <h2>${categories.title}</h2>
                    </div>

                    <div class="descripcion">
                        <p>${categories.description}</p>
                    </div>

                    <div class="separacion"></div>

                    <div class="piedetarjeta">
                        <div class="boton">
                            <button onclick="redirigir('${categories.website}')">Unirse</button>
                        </div>

                        <div class="icono2">
                            <img src="./../img/IconPsicologia.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        `;

        cursoCard.querySelector('.boton button').onclick = function () {
            redirigir(categories.website);
        };

        row.appendChild(cursoCard);
    });
}

function redirigir(url) {
    window.open(url, "_blank");
}

cargarDatos();

let userData3 = localStorage.getItem("user");
let user = JSON.parse(userData3);

// Extrae el ID del usuario
let userId2 = user.id;

function agregarCurso(cursoId) {
  // Obtener el usuario almacenado en localStorage
  let userData = localStorage.getItem("user");

  // Verificar si el usuario existe
  if (userData) {
      // Parsear el JSON para obtener el objeto del usuario
      let userObject = JSON.parse(userData);

      // Verificar si el campo misCursos existe en el objeto del usuario
      if (!userObject.misCursos) {
          userObject.misCursos = []; // Inicializar misCursos como un array si no existe
      }

      // Obtener el ID del curso y verificar si ya está en la lista de "Mis Cursos"
      if (!userObject.misCursos.includes(cursoId)) {
          // Si no está, agrégalo a la lista
          userObject.misCursos.push(cursoId);

          // Actualizar el objeto del usuario en localStorage
          localStorage.setItem("user", JSON.stringify(userObject));

          
          console.log('Curso agregado a Mis Cursos: ' + cursoId);

          // Enviar la actualización al servidor con el ID del usuario
          enviarActualizacionAlServidor(userObject.userId, userObject);
      } else {
          // Si ya está en la lista, mostrar un mensaje  que ya se ha unido
          console.log('Ya te has unido a este curso: ' + cursoId);
      }
  }
}

// Función para enviar la actualización al servidor con el ID del usuario
function enviarActualizacionAlServidor(userId, userObject) {
  // Utilizar fetch para enviar la actualización al servidor
  fetch('http://localhost:3000/users/' + userId2, {  
      method: 'PUT', // 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject),
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Error al actualizar datos en el servidor');
          }
          
          return response.json();
      })
      .catch(error => {
          console.error('Error:', error);
      });
}
