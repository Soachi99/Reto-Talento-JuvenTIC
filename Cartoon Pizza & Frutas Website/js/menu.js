function cargarProductos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/productos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {

        let products = JSON.parse(this.responseText);
        let cont = document.querySelector('#cont');
        cont.innerHTML = '';

        for (let item of products) {
            cont.innerHTML += `
            <li class="list-group-item">
              <div class="card">
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src= "${item.imagen}" class="img-fluid rounded mx-auto d-block"> </img>
                      </div>
                      <div class="col-md-8">
                          <div class="info_producto card-body">
                              <h5 class="card-title fw-bold">${item.nombre}</h5>
                              <p class="card-text">${item.descripcion}
                              </p>
                              <p class="card-text fs-4"><small class="text-muted"> Precio: $${item.precio}</small>
                              </p>
  
                              <div class="botones">
                                  <button type="button" class="boton btn btn-dark"
                                      style="width: 50px; height: 50px;"> - </button>
                                  <p class="boton border border-dark text-center pt-3" id="numero_productos"
                                      style="width: 50px; height: 50px;"> # </p>
                                  <button type="button" class="boton btn btn-dark"
                                      style="width: 50px; height: 50px;"> + </button>
                              </div>
  
                              <div class="botones_detalles">
                              <button type="button" class="btn btn-dark" style="width: 185px;"> Agregar al carrito </button>
                              <button type="button" class="btn btn-dark mt-3" data-bs-toggle="modal" data-bs-target="#modal_${item.modal}" style="width: 185px;"> Más detalles </button>
                             </div>
  
                          </div>
                      </div>
                  </div>
              </div>
              </li>              
            `

        }
    }

}

cargarProductos();