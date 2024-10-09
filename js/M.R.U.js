// Función para calcular y mostrar resultados
function calcular() {
    const tiempo = parseFloat(document.getElementById('tiempo').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
    const velocidad = parseFloat(document.getElementById('velocidad').value);
    
    const resultadoDiv = document.querySelector('.resultado');
    const resultadoDistanciaDiv = document.querySelector('.resultado_distancia');


    resultadoDiv.innerHTML = '';
    resultadoDistanciaDiv.innerHTML = '';

  
    if (tiempo < 0 || distancia < 0 || velocidad < 0) {
        alert('Por favor, ingresa valores no negativos para tiempo, distancia y velocidad.');
        return; 
    }

    const datosIngresados = [tiempo, distancia, velocidad].filter(dato => !isNaN(dato) && dato > 0).length;

    if (datosIngresados < 2) {
        alert('Se requieren al menos 2 datos para calcular.');
        return; 
    }

    
    if (!isNaN(distancia) && !isNaN(tiempo) && tiempo > 0) {
        const velocidadCalculada = distancia / tiempo;
        resultadoDiv.innerHTML += `La velocidad calculada es: ${velocidadCalculada.toFixed(2)} m/s.<br>`;
        document.getElementById('velocidad').value = velocidadCalculada.toFixed(2);
    }

    if (!isNaN(velocidad) && !isNaN(tiempo) && tiempo > 0) {
        const distanciaRecorrida = velocidad * tiempo;
        resultadoDistanciaDiv.innerHTML += `La distancia recorrida es: ${distanciaRecorrida.toFixed(2)} m.<br>`;
        document.getElementById('distancia').value = distanciaRecorrida.toFixed(2); 
    }

    
    if (!isNaN(distancia) && !isNaN(velocidad) && velocidad > 0) {
        const tiempoCalculado = distancia / velocidad;
        resultadoDiv.innerHTML += `El tiempo calculado es: ${tiempoCalculado.toFixed(2)} s.<br>`;
        document.getElementById('tiempo').value = tiempoCalculado.toFixed(2);
    }
}

function calcularVelocidadPromedio() {
    const desplazamientoTotal = parseFloat(document.getElementById('desplazamiento').value);
    const tiempoTotal = parseFloat(document.getElementById('tiempo_total').value);
    const resultadoVelocidadPromedioDiv = document.querySelector('.resultado_velocidad_promedio');

    resultadoVelocidadPromedioDiv.innerHTML = '';

    if (desplazamientoTotal < 0 || tiempoTotal < 0) {
        alert('Por favor, ingresa valores no negativos para desplazamiento total y tiempo total.');
        return; 
    }

    if (!isNaN(desplazamientoTotal) && !isNaN(tiempoTotal) && tiempoTotal > 0) {
        const velocidadPromedio = desplazamientoTotal / tiempoTotal;
        resultadoVelocidadPromedioDiv.innerHTML += `La velocidad promedio es: ${velocidadPromedio.toFixed(2)} m/s.<br>`;
    } else {
        resultadoVelocidadPromedioDiv.innerHTML += `Por favor, ingresa valores válidos para desplazamiento total y tiempo total.<br>`;
    }
}

document.getElementById('calcular').addEventListener('click', calcular);
document.getElementById('calcularVelocidadPromedio').addEventListener('click', calcularVelocidadPromedio);

//Comentarios 

const comentarios = [];

// Cargar comentarios desde el almacenamiento local al cargar la página
window.onload = function() {
    const comentariosGuardados = localStorage.getItem('comentarios');
    if (comentariosGuardados) {
        comentarios.push(...JSON.parse(comentariosGuardados));
        mostrarComentarios();
    }
};

document.getElementById('comentarioForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    // Crear objeto de comentario y guardarlo en el array
    const nuevoComentario = { nombre, comentario };
    comentarios.push(nuevoComentario);

    // Guardar comentarios en formato JSON en el almacenamiento local
    localStorage.setItem('comentarios', JSON.stringify(comentarios));

    // Limpiar el formulario
    this.reset();

    // Mostrar los comentarios
    mostrarComentarios();
});

function mostrarComentarios() {
    const comentariosDiv = document.getElementById('comentarios');
    comentariosDiv.innerHTML = ''; // Limpiar comentarios anteriores

    comentarios.forEach(comentario => {
        const comentarioElement = document.createElement('div');
        comentarioElement.className = 'comentario';
        comentarioElement.innerHTML = `<strong>${comentario.nombre}:</strong> <p>${comentario.comentario}</p>`;
        comentariosDiv.appendChild(comentarioElement);
    });
}
