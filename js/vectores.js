// Función para convertir coordenadas polares a cartesianas
function convertirPolaresACartesianas() {
    const radio = parseFloat(document.getElementById('radio').value);
    const angulo = parseFloat(document.getElementById('angulo').value);
    const errorRadio = document.getElementById('errorRadio');
    const errorAngulo = document.getElementById('errorAngulo');

    // Validar entrada
    if (isNaN(radio) || radio <= 0) {
        errorRadio.textContent = 'Por favor, ingresa un radio válido.';
        return;
    } else {
        errorRadio.textContent = '';
    }

    if (isNaN(angulo)) {
        errorAngulo.textContent = 'Por favor, ingresa un ángulo válido.';
        return;
    } else {
        errorAngulo.textContent = '';
    }

    // Convertir
    const x = radio * Math.cos(angulo * Math.PI / 180);
    const y = radio * Math.sin(angulo * Math.PI / 180);
    document.getElementById('resultado').innerText = `Coordenadas Cartesianas: (X: ${x.toFixed(2)}, Y: ${y.toFixed(2)})`;
}

// Función para convertir coordenadas cartesianas a polares
function convertirCartesianasAPolares() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const errorX = document.getElementById('errorX');
    const errorY = document.getElementById('errorY');

    // Validar entrada
    if (isNaN(x)) {
        errorX.textContent = 'Por favor, ingresa un valor válido para X.';
        return;
    } else {
        errorX.textContent = '';
    }

    if (isNaN(y)) {
        errorY.textContent = 'Por favor, ingresa un valor válido para Y.';
        return;
    } else {
        errorY.textContent = '';
    }

    // Convertir
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x) * (180 / Math.PI);
    document.getElementById('resultado').innerText = `Coordenadas Polares: (r: ${r.toFixed(2)}, θ: ${theta.toFixed(2)}°)`;
}

// Función para calcular la suma de dos vectores
document.getElementById('calcular').addEventListener('click', function() {
    const vectorA = parseFloat(document.getElementById('vectorA').value);
    const vectorB = parseFloat(document.getElementById('vectorB').value);
    const resultadoDiv = document.querySelector('.resultado');

    // Validar entrada
    if (isNaN(vectorA) || vectorA < 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa una magnitud válida para el Vector A.';
        return;
    }

    if (isNaN(vectorB) || vectorB < 0) {
        resultadoDiv.innerHTML = 'Por favor, ingresa una magnitud válida para el Vector B.';
        return;
    }

    // Calcular la suma
    const suma = vectorA + vectorB;
    resultadoDiv.innerHTML = `Resultado de la Suma: ${suma}`;
});

// Manejar el envío de comentarios
document.getElementById('comentarioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    const comentariosDiv = document.getElementById('comentarios');

    // Validar entrada
    if (!nombre || !comentario) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Añadir comentario
    const nuevoComentario = document.createElement('div');
    nuevoComentario.innerHTML = `<strong>${nombre}:</strong> ${comentario}`;
    comentariosDiv.appendChild(nuevoComentario);

    // Limpiar el formulario
    document.getElementById('comentarioForm').reset();
});
