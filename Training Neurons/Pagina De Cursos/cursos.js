let root=document.getElementById('root');
var container=document.createElement('div');
container.classList.add('container');
root.appendChild(container);



var row=document.createElement('div');
row.classList.add('row','mt-5');
container.appendChild(row)

let apiCursos="http://localhost:3000/categories";
let datos=[];

function cargarDatos(){
    fetch(apiCursos)
    .then(response=>response.json())
    .then(data=>{
        datos=data;
        cargarTargetas();
    })
    .catch(error=>console.error("error al cargar los datos", error));
}

function cargarTargetas(){

    filtro = datos.filter(function(dato){
        return dato.categoria ==idDelBoton;
    });

    filtro.forEach((dato)=>{
        console.log(dato.img)
        let col=document.createElement('div')
        col.classList.add('col-md-3');
        row.appendChild(col);

        let card=document.createElement('div')
        card.classList.add('card','mb-4')
        col.appendChild(card)

        let img=document.createElement('img')
        img.classList.add('img-fluid')
        img.setAttribute('src',`${dato.img}`);
        card.appendChild(img)
        

        let cardbody=document.createElement('div')
        cardbody.classList.add('card-body')
        card.appendChild(cardbody)

        let h2=document.createElement('h2')
        h2.innerText=dato.title
        cardbody.appendChild(h2)

        let p=document.createElement('p')
        p.innerText=dato.description;
        cardbody.appendChild(p);

        let button = document.createElement("button");
        button.classList.add('btn', 'btn-danger', 'w-100', 'mt-4');
        button.style.backgroundColor = "red";
        button.style.border = "none";
        button.innerText = "Ir al curso";

        console.log(dato.website)

        button.onclick=function(){
            redirigir(dato.website);
            
        }

        cardbody.appendChild(button);
        container.appendChild(row);
    })

}
function redirigir(url) {
    window.open(url, "_blank");
}
function capturarID(boton){
    var idDelBoton=boton.id;
   return idDelBoton;
}
cargarDatos();
