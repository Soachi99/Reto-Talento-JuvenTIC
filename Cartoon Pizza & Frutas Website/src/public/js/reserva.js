document.querySelector('#form').addEventListener('submit', añadirReserva);

function añadirReserva(e) {    
    
    let nombre = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let telefono = document.querySelector('#telefono').value;
    let numeroPersonas = document.querySelector('#numeroPersonas').value;
    let servicio = document.querySelector('#servicio');
    let servicioSelected = servicio.options[servicio.selectedIndex].text;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let indicacionesEspeciales = document.querySelector('#indicionesEspeciales').value;    
    const datosFormulario = {
        nombre,
        email,
        telefono,
        numeroPersonas,                
        servicioSelected,
        fecha,
        hora,
        indicacionesEspeciales
    };

    
    if(localStorage.getItem('datosFormulario') === null) {
        let almacenarDatos = []
        almacenarDatos.push(datosFormulario);
        localStorage.setItem('datosFormulario', JSON.stringify(almacenarDatos));
        console.log('reserva añadida')
    } else {
        let almacenarDatos = JSON.parse(localStorage.getItem('datosFormulario'));
        almacenarDatos.push(datosFormulario);
        localStorage.setItem('datosFormulario', JSON.stringify(almacenarDatos));
        console.log('reserva añadida')
    }
    
    mostrarReserva();
        
    document.querySelector('#form').reset()

        
    //e.preventDefault();
}

function mostrarReserva() {
    let datosGuardados = JSON.parse(localStorage.getItem('datosFormulario'));
    let mostrarReserva = document.querySelector('.mostrarReserva');
    mostrarReserva.innerHTML = '';

    //crear elemento html
    let titulo = document.createElement('H2');
    titulo.classList.add('titulo-reservas');
    titulo.textContent = 'reservas enviadas';
    mostrarReserva.appendChild(titulo);

    for(let i = 0; i < datosGuardados.length; i++) {
        let nombre = datosGuardados[i].nombre;
        let email = datosGuardados[i].email;
        let telefono = datosGuardados[i].telefono;
        let numeroPersonas = datosGuardados[i].numeroPersonas;
        let servicioSelected = datosGuardados[i].servicioSelected;
        let fecha = datosGuardados[i].fecha;
        let hora = datosGuardados[i].hora;
        let indicaciones = datosGuardados[i].indicacionesEspeciales;

        if(indicaciones == "") {
            mostrarReserva.innerHTML += `
            <div class="card">
                <p>Nombre: <span>${nombre}</span></p>
                <p>Correo: <span>${email}</span></p>
                <p>Teléfono: <span>${telefono}</span></p>
                <p>Número de personas: <span>${numeroPersonas}</span></p>
                <p>Servicio: <span>${servicioSelected}</span></p>
                <p>Fecha: <span>${fecha}</span></p>
                <p>Hora: <span>${hora}</span></p>
                <p>Indicaciones especiales: <span>Ninguna</span></p>
                <div class="btn-reserva">
                <button class="btn-eliminar" onclick="eliminarReserva('${email}')">Eliminar Reserva</button>
                <button class="btn-enviar" onclick="">Enviar Reserva</button>
                </div>
            </div>
        `;
        }
        else {
            mostrarReserva.innerHTML += `
            <div class="card">
                <p>Nombre: <span>${nombre}</span></p>
                <p>Correo: <span>${email}</span></p>
                <p>Teléfono: <span>${telefono}</span></p>
                <p>Número de personas: <span>${numeroPersonas}</span></p>
                <p>Servicio: <span>${servicioSelected}</span></p>
                <p>Fecha: <span>${fecha}</span></p>
                <p>Hora: <span>${hora}</span></p>
                <p>Indicaciones especiales: <span>${indicaciones}</span></p>
            </div>
        `;
        }
        
    }
}
mostrarReserva();

/*function eliminarReserva() {
    let datosGuardados = JSON.parse(localStorage.getItem('datosFormulario')); 
    for(let i = 0; i < datosGuardados.length; i++) {
        if(datosGuardados[i].email == email) {
            datosGuardados.splice(i, 1);
            console.log('Reserva eliminada');
        }
    }
    localStorage.setItem('datosFormulario', JSON.stringify(datosGuardados));
    mostrarReserva();
}
*/