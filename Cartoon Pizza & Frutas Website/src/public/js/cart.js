function leerdatos(){
    let data = JSON.parse(localStorage.getItem('productos'));       
    let contenido = document.querySelector('#contenedor_productos');
    contenido.innerHTML = '';
    var total = 0;
    var final_total = 0;
    for (let item of data) {  
        
        total = item.count * item.precio;
        final_total += total;
        contenido.innerHTML += `
        <li class="list-group-item">
          <div class="card">
              <div class="row g-0">
                  <div class="col-md-4">
                      <img src= "${item.imagen}" class="img-fluid rounded mx-auto d-block"> </img>
                  </div>
                  <div class="col-md-8">
                      <div class="info_producto card-body">
                          <h5 class="card-title fw-bold" id="nombre_${item.ID}">${item.producto}</h5>
                          <p class="card-text" id="des_${item.ID}">${item.descripcion}
                          </p>
                          <p class="card-text fs-4" id="precio_${item.ID}"><small class="text-muted"> Precio unitario: $${item.precio} <br> Precio Total: $${total} </small>
                          </p>

                          <div class="botones">
                              <button type="button" class="boton btn btn-dark" id="minus_${item.ID}" onclick="menosProducto(${item.ID})" value="${item.ID}"
                                  style="width: 50px; height: 50px;"> - </button>
                              <p class="boton border border-dark text-center pt-3" id="numero_productos_${item.ID}"
                                  style="width: 50px; height: 50px;"> ${item.count} </p>
                              <button type="button" class="boton btn btn-dark" id="plus_${item.ID}" onclick="masProducto(${item.ID})" value="${item.ID}"
                                  style="width: 50px; height: 50px;"> + </button>
                          </div>

                          <div class="botones_detalles">
                          <button type="button" class="btn btn-dark" id="delete_${item.ID}" onclick="deleteCarrito(${item.ID})" style="width: 185px;"> Eliminar del carrito </button>
                         </div>

                      </div>
                  </div>
              </div>
          </div>
          </li>              
        `

    }

    if(final_total == 0 || final_total == null) 
    {
        document.getElementById("total_final").innerHTML = "Total productos:" 
        document.getElementById("servicio").innerHTML = "Servicio:"        
        document.getElementById("gran_total").innerHTML = "Total:"
    }
    else{
        document.getElementById("total_final").innerHTML = "Total productos: $" + final_total.toString();
        document.getElementById("servicio").innerHTML = "Servicio: $3500"
        let gran_total = final_total + 3500;
        document.getElementById("gran_total").innerHTML = "Total: $" + gran_total.toString();
    }
    
}

leerdatos();

