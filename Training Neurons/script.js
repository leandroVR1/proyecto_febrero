//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página
//esto es una prueba

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});


//carousel
var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}


//toggle
const toggle = document.querySelector('.checkbox');
const solIcon = document.getElementById('sol-icon');
 body = document.querySelector('body');


toggle.addEventListener('click', () => {
    body.classList.toggle('active');
    toggle.addEventListener('change', function () {
      // Si el checkbox está marcado, cambia el ícono a la luna, de lo contrario, vuelve al sol
      if (toggle.checked) {
          solIcon.classList.remove('fa-sun');
          solIcon.classList.add('fa-moon');
      } else {
          solIcon.classList.remove('fa-moon');
          solIcon.classList.add('fa-sun');
      }
  });
    

});

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


console.log(userId2);





