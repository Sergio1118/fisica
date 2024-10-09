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

    const nombre = document.getElementById('nombre').value.trim();
    const comentario = document.getElementById('comentario').value.trim();

    // Verificar que ambos campos no estén vacíos
    if (nombre && comentario) {
        // Crear objeto de comentario y guardarlo en el array
        const nuevoComentario = { nombre, comentario };
        comentarios.push(nuevoComentario);

        // Guardar comentarios en formato JSON en el almacenamiento local
        localStorage.setItem('comentarios', JSON.stringify(comentarios));

        // Limpiar el formulario
        this.reset();

        // Mostrar los comentarios
        mostrarComentarios();
    } else {
        alert('Ambos campos son obligatorios. Por favor, intenta de nuevo.');
    }
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
