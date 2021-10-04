function masProducto(num) {
    var valuebtn = document.getElementById("plus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count + 1;
    document.getElementById("numero_productos_" + valuebtn).innerHTML = count.toString();

    var precio_text = document.getElementById("precio_" + valuebtn).textContent;
    var precio_u = parseInt(precio_text.substr(19, 22));
    var total = count * precio_u;
    document.querySelector("#precio_" + valuebtn).innerHTML = `<small class="text-muted"> Precio unitario: $${precio_u}<br> Precio Total: $${total} </small>`;


    var total_text = document.getElementById("total_final").textContent;
    var final_total = parseInt(total_text.substr(18, 38)) + precio_u;
    document.getElementById("total_final").innerHTML = "Total productos: $" + final_total.toString();
    document.getElementById("servicio").innerHTML = "Servicio: $3500";
    let gran_total = final_total + 3500;
    document.getElementById("gran_total").innerHTML = "Total: $" + gran_total.toString();

    let data = JSON.parse(localStorage.getItem('productos'));
    for (let i = 0; i < data.length; i++) {
        if (data[i].ID == valuebtn) {
            data[i].count = count;
        }
    }
    localStorage.setItem('productos', JSON.stringify(data));

}

function menosProducto(num) {
    var valuebtn = document.getElementById("minus_" + num.toString()).value;
    var count = parseInt(document.getElementById("numero_productos_" + valuebtn).textContent);
    count = count - 1;
    if (count < 1) {
        count = 1;
    }
    else {
        var precio_text = document.getElementById("precio_" + valuebtn).textContent;
        var precio_u = parseInt(precio_text.substr(19, 22));
        var total = count * precio_u;
        document.querySelector("#precio_" + valuebtn).innerHTML = `<small class="text-muted"> Precio unitario: $${precio_u}<br> Precio Total: $${total} </small>`;

        var total_text = document.getElementById("total_final").textContent;
        var final_total = parseInt(total_text.substr(18, 38)) - precio_u;
        document.getElementById("total_final").innerHTML = "Total productos: $" + final_total.toString();
        document.getElementById("servicio").innerHTML = "Servicio: $3500";
        let gran_total = final_total + 3500;
        document.getElementById("gran_total").innerHTML = "Total: $" + gran_total.toString();
    }
    document.getElementById("numero_productos_" + valuebtn).innerHTML = count.toString();

    let data = JSON.parse(localStorage.getItem('productos'));
    for (let i = 0; i < data.length; i++) {
        if (data[i].ID == valuebtn) {
            data[i].count = count;
        }
    }
    localStorage.setItem('productos', JSON.stringify(data));
}

function deleteCarrito(num) {
    let datos = JSON.parse(localStorage.getItem('productos'));
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].ID == num) {
            datos.splice(i, 1);
        }
    }
    localStorage.setItem('productos', JSON.stringify(datos));
    var count_products = localStorage.getItem('num_productos');
    count_products = count_products - 1;
    localStorage.setItem('num_productos', count_products);
    swal("Completado", "El producto seleccionado se ha eliminado del carrito de compras", "success");
    cargarNumProducts();
    leerdatos();
}


function validarproductos() {
    if (localStorage.getItem('productos') == null) {
        $("#confirmacion_modal").modal('hide');
        swal("No has seleccionado ningún producto", "Ve a la pagina del menu donde estan nuestros mejores productos y agregalos a tu carrito de compra", "error");
    }
    else {
        $("#confirmacion_modal").modal('show');
    }
}

function validardatos() {
    let nombre_cliente = document.getElementById("nombre_cliente").value;
    let email_cliente = document.getElementById("email_cliente").value;
    let observaciones = document.getElementById("observaciones").value;

    if (nombre_cliente == null || nombre_cliente == "" || email_cliente == null || email_cliente == "") {
        swal("No llenaste los datos", "Error", "error");
    }
    else {
        let datos = JSON.parse(localStorage.getItem('productos'));
        var total = 0;
        var final_total = 0;
        var contentHtml = `
        <h1>Confirmación del pedido</h1>
        <p>Señor/a ${nombre_cliente}, sus productos han sido reservados correctamente, estos fueron:</p>  
        <ul>    
        `;

        for (let item of datos) {
            total = item.count * item.precio;
            final_total += total;
            console.log(item.producto);
            contentHtml += ` <li> ${item.producto}, cantidad: ${item.count}, precio unitario: $${item.precio}, subtotal: ${total} </li>
        `;
        }
        final_total += 3500;
        contentHtml += `</ul>
        <p> Total a cancelar, contando servicio ($3500): $${final_total} </p> 
        <p> Observaciones: ${observaciones} </p>
        <h2> Gracias por contar con Cartoon Pizza y Frutas, ¡Te esperamos! </h2>
        `;

        Email.send({
            Host: "smtp.gmail.com",
            Username: "cartoonpyf@gmail.com",
            Password: "cartoonpizza",
            From: "cartoonpyf@gmail.com",
            To: [email_cliente],
            Subject: "Confirmación de los productos reservados",
            Body: contentHtml
        }).then(
            swal("Completado", "Los productos se han reservado correctamente. Una copia de tu reserva llegara a tu correo en unos instantes", "success")
        );

        $("#confirmacion_modal").modal('hide');
        document.getElementById("total_final").innerHTML = "Total productos:";
        document.getElementById("servicio").innerHTML = "Servicio:";
        document.getElementById("gran_total").innerHTML = "Total:";
        localStorage.clear();
        cargarNumProducts();
        leerdatos();
    }


}
