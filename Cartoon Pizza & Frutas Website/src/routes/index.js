const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const {google} = require('googleapis');

router.get('/', (req, res) => {
    res.render('index.html');    
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros.html');
});

router.get('/menu', (req, res) => {
    res.render('menu.html');
})

router.get('/servicio', (req, res) => {
    res.render('servicio.html');
});

router.get('/servicio/reserva', (req, res) => {
    res.render('reserva.html');
});

router.post('/envio-reserva', (req, res) => {
    const {
        nombre,
        email,
        telefono,
        numPersonas,
        servicio,
        fecha,
        hora,
        mensaje
    } = req.body;

    /*const contentHTML = `
        <h1>Datos de la reserva:<h1>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Correo: ${email}</li>
            <li>Telefono: ${telefono}</li>
            <li>Numero de personas para la reserva: ${numPersonas}</li>
            <li>Servicio: ${servicio}</li>
            <li>Fecha: ${fecha}</li>
            <li>Hora: ${hora}</li>
        </ul>
        <p>Indicaciones especiales: ${mensaje}</p>
    `;*/

    console.log(req.body);

    res.render('envioreserva.html', {
        nombre : nombre,
        correo : email,
        telefono : telefono,
        numeroPersonas : numPersonas,
        servicio: servicio,
        fecha : fecha,
        hora: hora,
        indicacionesEspeciales : mensaje
    });
});

router.get('/contactenos', (req, res) => {
    res.render('contactenos.html');
});

router.get('/carrito-de-compras', (req, res) => {
    res.render('carrito.html');
})

router.get('/mapa-del-sitio', (req, res) => {
    res.render('mapa.html');
})

module.exports = router;