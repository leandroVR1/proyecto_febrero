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






let root = document.getElementById('root');
var container = document.createElement('div');
container.classList.add('container2');
root.appendChild(container);



var row = document.createElement('div');
row.classList.add('row', 'mt-5');
container.appendChild(row)

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
    let idCurso = localStorage.getItem('cursos');//codigo para traer lo que esta guardado en el local 


    filtro = datos.filter(function (dato) {
        return dato.categoria == idCurso;
    });

    filtro.forEach((dato) => {

        let col = document.createElement('div')
        col.classList.add('col-md-4');
        row.appendChild(col);

        let card = document.createElement('div')
        card.classList.add('card')
        card.style.marginRight = '20px';
        col.appendChild(card)

        let content = document.createElement('div')
        content.classList.add("content")
        card.appendChild(content)

        let encabezado = document.createElement('div')
        encabezado.classList.add('encabezado')
        content.appendChild(encabezado)

        let icono = document.createElement('div')
        icono.classList.add('icono')
        encabezado.appendChild(icono)

        let i = document.createElement('i')
        i.classList.add('fa-solid', 'fa-star')
        i.style.color = '#f6d32d';
        icono.appendChild(i)

        let categoria = document.createElement('div')
        categoria.classList.add('categoria')
        categoria.id = ('categoria')
        encabezado.appendChild(categoria)

        let label = document.createElement('label')
        label.innerText = dato.categoria;
        label.setAttribute('for', 'categoria')
        categoria.appendChild(label);

        let title = document.createElement('div')
        title.classList.add('titulo')
        content.appendChild(title)

        let h2 = document.createElement('h2')
        h2.innerText = dato.title
        title.appendChild(h2)

        let description = document.createElement('div')
        description.classList.add('descripcion')
        content.appendChild(description)

        let p = document.createElement('p')
        p.innerText = dato.description;
        description.appendChild(p);

        let separacion = document.createElement('div')
        separacion.classList.add('separacion')
        content.appendChild(separacion);

        let pieTarjeta = document.createElement('div')
        pieTarjeta.classList.add('pietarjeta')
        content.appendChild(pieTarjeta)


        let button = document.createElement("button");
        button.classList.add('boton');
        button.style.border = "none";
        button.innerText = "Ir al curso";
        pieTarjeta.appendChild(button);

        let icono2 = document.createElement('div')
        icono2.classList.add('icono2')
        pieTarjeta.appendChild(icono2)


        let img = document.createElement('img')
        img.classList.add('img-fluid')
        img.setAttribute('src', `${dato.img}`);
        icono2.appendChild(img)




        button.onclick = function () {
            redirigir(dato.website);

        }


        container.appendChild(row);
    })

}
function redirigir(url) {
    window.open(url, "_blank");
}

cargarDatos();
