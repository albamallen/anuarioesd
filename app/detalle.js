window.onload = () => {
    let obtenerParam = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=","");
        return urlParam;
    }
    let articuloID = obtenerParam(document.URL);
    console.log(articuloID);
    let articuloHTML = document.querySelector("#articulo");
    fetch('assets/data/data.json')
    .then( res => res.json())
    .then(data => {
        data.forEach((articulo, index)=>{
            if (index==articuloID) {
                let lista = document.querySelector("#articulos");
                let imagen = articulo.imagenes.split(", ");
                articuloHTML.innerHTML =  `<div class="container">
                <div class="titulos">
                    <h1 class="h1det">${articulo.titulo}</h1>
                    <h3 class="h3det">${articulo.subtitulo}</h3> 
                </div>
               
                <div class="alumno">
                    <h5 class="h5-bold">${articulo.nombre_estudiante}</h5>
                    <h5 class="h5-light">${articulo.redes_estudiante}</h5>
                    <h5 class="h5-regular">${articulo.correo_estudiante}</h5>
                </div>
              </div>
        
              <div class="columns-container">
                <div class="column">
                  <div class="row">
                      <h5 class="bold">Asignatura</h5>
                      <p>${articulo.asignatura}</p>
                  </div>
                  <div class="row">
                      <h5 class="bold">Curso</h5>
                      <p>${articulo.curso}</p>
                  </div>
                  <div class="row">
                      <h5 class="bold">Especialidad</h5>
                      <p>${articulo.especialidad}</p>
                  </div>
                </div>
                
                <div class="column">
                  <div class="row">
                    <h5 class="bold">Lineas de investigación</h5>
                    <p >${articulo.linea_investigacion}</p>
                  </div>
                  <div class="row">
                    <h5 class="bold">Docente</h5>
                    <p>${articulo.nombre_docente}</p>
                    <p>${articulo.otros_docentes}</p>
                  </div>
                </div>
              </div>
              <div class="descripcion">
                <div class="image-containerdet1">
                  <p class="pdet">${articulo.descripcion} </br>${articulo.desc_img1}</p>
                  <img class="imgdet1" src="${imagen[0]}" alt="">
                </div>
                <div class="image-containerdet">
                  <img class="imgdet" src="${imagen[1]}" alt="">
                  <p class="pdet">${articulo.desc_img2}</p>
                </div>
                <div class="image-containerdet">
                  <p class="pdet">${articulo.desc_img3}</p>
                  <img class="imgdet" src="${imagen[2]}" alt="">
                </div>
                <div class="image-containerdet">
                  <img class="imgdet" src="${imagen[3]}" alt="">
                  <p class="pdet">${articulo.desc_img4}</p>
                </div>
                <div class="image-containerdet">
                  <p class="pdet">${articulo.desc_img5}</p>
                  <img class="imgdet" src="${imagen[4]}" alt="">
                </div>
              </div>
              `;
              
            }
        })
    })
}