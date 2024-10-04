// Función para cambiar el color de fondo de la tarjeta
function cambiarColorFondo() {
    const color = document.getElementById('color').value;
    document.getElementById('tarjeta').style.backgroundColor = color;
}

// Función para cambiar el color del texto
function cambiarColorTexto(idColor) {
    const color = document.getElementById(idColor).value;
    if (idColor === 'colorDedicatoria') {
        document.getElementById('dedicatoria').style.color = color;
    } else if (idColor === 'colorEncabezado') {
        document.getElementById('encabezado').style.color = color;
    } else if (idColor === 'colorMensaje') {
        document.getElementById('mensaje').style.color = color;
    }
}

// Función para cambiar las imágenes y marcos según el tema
function tema() {
    const temaSeleccionado = document.getElementById('tema').value;

    const marco1 = document.getElementById('marco1');
    const marco2 = document.getElementById('marco2');
    const marco3 = document.getElementById('marco3');

    const foto1 = document.getElementById('foto1');
    const foto2 = document.getElementById('foto2');
    const foto3 = document.getElementById('foto3');

    if (temaSeleccionado === 'navidad') {
        marco1.src = './img/Navidad1.png';
        marco2.src = './img/Navidad2.png';
        marco3.src = './img/Navidad3.avif';

        foto1.src = './img/N1.png';
        foto2.src = './img/N2.png';
        foto3.src = './img/N3.png';
    } else if (temaSeleccionado === 'halloween') {
        marco1.src = './img/Halloween1.webp';
        marco2.src = './img/Halloween2.webp';
        marco3.src = './img/Halloween3.avif';

        foto1.src = './img/H1.png';
        foto2.src = './img/H2.webp';
        foto3.src = './img/H3.png';
    } else if (temaSeleccionado === 'diademuertos') {
        marco1.src = './img/DiaDeMuertos1.webp';
        marco2.src = './img/DiaDeMuertos2.jpg';
        marco3.src = './img/DiaDeMuertos3.jpg';

        foto1.src = './img/D1.png';
        foto2.src = './img/D2.png';
        foto3.src = './img/D3.png';
    }
}

// Función para seleccionar una imagen
function seleccionarImagen(fotoId) {
    const imagenSeleccionada = document.getElementById(fotoId).src;
    document.getElementById('fotoGrande').src = imagenSeleccionada;
}

// Función para seleccionar un marco
function seleccionarMarco(marcoId) {
    const marcoSeleccionado = document.getElementById(marcoId).src;
    document.getElementById('marcoSeleccionado').src = marcoSeleccionado;
}

// Función para actualizar los textos en la tarjeta
function actualizarTexto() {
    const dedicatoria = document.getElementById('inputDedicatoria').value;
    const encabezado = document.getElementById('inputEncabezado').value;
    const mensaje = document.getElementById('inputMensaje').value;

    document.getElementById('dedicatoria').innerText = dedicatoria;
    document.getElementById('encabezado').innerText = encabezado;
    document.getElementById('mensaje').innerText = mensaje;
}

// Función para abrir la tarjeta en una nueva ventana
function abrirTarjeta() {
    const tarjetaHtml = document.getElementById('tarjeta').outerHTML;
    const nuevaVentana = window.open('', '', 'width=400,height=500');
    nuevaVentana.document.write(`
        <html>
        <head>
            <title>Tarjeta de Felicitaciones</title>
            <link rel="stylesheet" href="./css/estilo.css">
        </head>
        <body>
            ${tarjetaHtml}
            <button onclick="window.print()">Imprimir</button>
        </body>
        </html>
    `);
    nuevaVentana.document.close();
}
