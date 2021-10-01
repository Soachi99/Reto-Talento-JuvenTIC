

function masProducto(num){   
    var valuebtn = document.getElementById("plus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count + 1;   
    document.getElementById("numero_productos_" + valuebtn ).innerHTML = count.toString();
}

function menosProducto(num){  
    var valuebtn = document.getElementById("minus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count - 1;   
    if(count<0){
        count = 0;
    }
    document.getElementById("numero_productos_" + valuebtn ).innerHTML = count.toString();
}

function addCarrito(num){
    var valuebtn = document.getElementById("add_" + num.toString()).value;
    console.log(valuebtn);
    let count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    let producto = document.getElementById("nombre_"+ valuebtn).textContent;
    let descripcion = document.getElementById("des_"+ valuebtn).textContent;
    let precio = document.getElementById("precio_"+ valuebtn).textContent;

    const productos = {
        producto, descripcion, precio, count
    }
     
    if(localStorage.getItem('productos') == null) {
        let adddatos = []
        adddatos.push(productos);
        localStorage.setItem('productos', JSON.stringify(adddatos));
        console.log('producto agregado al carrito')
        document.getElementById("numero_productos_" + valuebtn ).innerHTML = 0;
        swal("Completado", "El producto seleccionado se ha añadido al carrito de compras", "success");
    } else {
        let adddatos = JSON.parse(localStorage.getItem('productos'));
        adddatos.push(productos);
        localStorage.setItem('productos', JSON.stringify(adddatos));
        console.log('mas productos')
        document.getElementById("numero_productos_" + valuebtn ).innerHTML = 0;        
        swal("Completado", "El producto seleccionado se ha añadido al carrito de compras", "success");
    }    
}
