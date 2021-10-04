function cargarNumProducts(){
    if(localStorage.getItem('num_productos') == null) {
        var count_products = 0;
        document.getElementById("numero").innerHTML = count_products.toString();
    }
    else
    {        
        var count_products = localStorage.getItem('num_productos');
        document.getElementById("numero").innerHTML = count_products.toString();
    }
}

cargarNumProducts();