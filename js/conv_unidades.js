function convert() {
    // Obtener el valor introducido por el usuario
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let unit = document.getElementById("unitSelect").value;
    let result;

    // Verificar que se ha introducido un valor válido
    if (isNaN(inputValue)) {
        alert("Por favor, introduce un valor.");
        return;
    }

    // Lógica de conversión
    switch (unit) {
        case "centimeters":
            result = inputValue * 100; // metros a centímetros
            break;
        case "millimeters":
            result = inputValue * 1000; // metros a milímetros
            break;
        case "micrometers":
            result = inputValue * 1e6; // metros a micrómetros
            break;
        case "nanometers":
            result = inputValue * 1e9; // metros a nanómetros
            break;
        case "meters":
            result = inputValue; // ya está en metros
            break;
        case "kilometers":
            result = inputValue / 1000; // metros a kilómetros
            break;
        case "inches":
            result = inputValue * 39.3701; // metros a pulgadas
            break;
        case "feet":
            result = inputValue * 3.28084; // metros a pies
            break;
        case "yards":
            result = inputValue * 1.09361; // metros a yardas
            break;
        case "miles":
            result = inputValue / 1609.34; // metros a millas
            break;
        case "nautical_miles":
            result = inputValue / 1852; // metros a millas náuticas
            break;
        default:
            result = "Unidad no válida.";
    }

    // Mostrar el resultado en el párrafo de resultado
    document.getElementById("result").textContent = result.toFixed(2) + " " + unit;
}

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
