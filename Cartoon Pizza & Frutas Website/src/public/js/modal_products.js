function cargarProductos()
{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'js/productos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        
        let products = JSON.parse(this.responseText);  
        let cont = document.querySelector('#mod');
        cont.innerHTML = '';
        for(let item of products)
        {
            cont.innerHTML += `
            <div class="modal fade" id="modal_${item.modal}">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title fw-bold">Detalles ${item.nombre}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>                    
                             </div>
                        <div class="modal-body">
                             <img src="${item.imagen}" class="img-fluid rounded mx-auto d-block"> </img>
                            <p class="text-center me-5 ms-5 mt-3 ">${item.descripcion}</p>
                        </div>
                    </div>
                </div>
               </div>
            `
        }

    }
}

cargarProductos();