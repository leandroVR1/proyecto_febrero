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


