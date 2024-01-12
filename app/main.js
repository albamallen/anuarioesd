window.onload = () => {
// generador formato1
let generarFormato1 = (id, nombre_estudiante, titulo, imagen) =>
`<div class="rectangle-containeruno articulo" id="${id}">
<div class="rectangleuno">
    <img src="${imagen}" alt="">
    <div class="text-bottom-left">
        <h4>${nombre_estudiante}</h4>
        <h2>${titulo}</h2>
    </div>
</div>
</div>`;
// generador formato2
let generarFormato2 = (id,nombre_estudiante,titulo,descripcion, imagen) =>
`<div class="section-container articulo" id="${id}">
<div class="image-container">
    <img src="${imagen}" alt="Descripción de la imagen">
</div>
<div class="text-container">
    <h4>${nombre_estudiante}</h4>
    <h1>${titulo}</h1>
    <p>${descripcion}</p>
</div>
</div>`;
// generador formato3
let generarFormato3 = (id,nombre_estudiante,titulo, imagen) =>
`<div class="rectangletres articulo" id="${id}">
<img src="${imagen}" alt="">
<div class="text-left">
    <h4>${nombre_estudiante}</h4>
    <h3>${titulo}</h3>
</div>
</div>`;
// generador formato4 
let generarFormato4 = (id,nombre_estudiante,titulo,descripcion, imagen) =>
`<div class="section-container2 articulo" id="${id}">
<div class="text-container2">
    <h4>${nombre_estudiante}</h4>
    <h1>${titulo}</h1>
    <p>${descripcion}</p>
</div>
<div class="image-container2">
    <img src="${imagen}" alt="">
</div>
</div>`;
// generador formato5
let generarFormato5 = (id,nombre_estudiante,titulo, imagen) =>
`<div class="rectangledos articulo" id="${id}">
  <img src="${imagen}" alt="Descripción de la imagen 2">
  <div class="text-leftdos">
    <h4>${nombre_estudiante}</h4>
    <h2>${titulo}</h2>
  </div>
</div>`;

// inicializador formato3
let iniciarFormato3 = `<div class="rectangle-containertres"><div class="flex-container">`;
// finalizar formato3
let finalizarFormato3 = `</div></div>`;
// inicializador formato5
let iniciarFormato5 = `<div class="rectangle-containerdos">`;
// finalizar formato5
let finalizarFormato5 = `</div>`;

let verDetalle = (e) =>{
    window.open(`../detalle.html?id=${e.currentTarget.id}`, "_self")
}

// leer json  pasar JSON a array
//let datos=[];
let contadorGrupo = 0;
let lista = document.querySelector("#articulos");
let grupoHTML = "";
fetch('assets/data/data.json')
    .then( res => res.json())
    .then(data => {
        let ndatos = data.length;
        data.forEach((articulo, index)=>{
        // para cada grupo de 8
        contadorGrupo++;
//        let grupoHTML = "";
        // iniciar el subgrupo
            // si es el 3 inicializo formato 3
            if (contadorGrupo == 3){
                grupoHTML += iniciarFormato3;
            }
            // si es el 7 inicializo formato 5
            if (contadorGrupo == 7){
                grupoHTML += iniciarFormato5;
            }
        // generar cada articulo con su formato
        let imagenes = articulo.imagenes.split (", ");

            switch (contadorGrupo) {
                case 1 : 
                    grupoHTML += generarFormato1 (index, articulo.nombre_estudiante, articulo.titulo, imagenes[0]);
                    break;
                case 2 : grupoHTML += generarFormato2 (index, articulo.nombre_estudiante, articulo.titulo, articulo.descripcion, imagenes[0]);
                    break;
                case 3 :
                case 4 :
                case 5 : grupoHTML += generarFormato3 (index, articulo.nombre_estudiante, articulo.titulo, imagenes[0]);
                    break;
                case 6 : grupoHTML += generarFormato4 (index, articulo.nombre_estudiante, articulo.titulo,articulo.descripcion, imagenes[0]);
                    break;
                case 7 :
                case 8 : grupoHTML += generarFormato5 (index, articulo.nombre_estudiante, articulo.titulo, imagenes[0]);
                    break;
            }
        // finalizar subgrupo
            // si es el 5 o es el ultimo articulo - finalizar formato3
            if (contadorGrupo == 5 || index==ndatos-1){
                console.log(`Articulo ${index+1}, contador grupo ${contadorGrupo}, ndatos ${ndatos}`);
                grupoHTML += finalizarFormato3;
            }
            // si es el 8 o es el ultimo articulo - finalizar formato5
            if (contadorGrupo == 8 || index==ndatos-1){
                grupoHTML += finalizarFormato5;
            }

        if (contadorGrupo == 8){
            contadorGrupo = 0;
        }

        if (index == ndatos - 1) lista.innerHTML += grupoHTML;

        });
    })
    .then( () =>{
        let articulos = document.querySelectorAll(".articulo")
        articulos.forEach((articulo) => {
            articulo.addEventListener("click", verDetalle, true);
        })
    })


}
