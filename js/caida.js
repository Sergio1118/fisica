const gravedad = -9.8; // Gravedad en m/s²

function validarFormulario(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores de los campos
    const altura = parseFloat(document.getElementById("altura").value); // Añadido para validar
    const velocidadInicial = parseFloat(document.getElementById("velocidadInicial").value);
    const velocidadFinal = parseFloat(document.getElementById("velocidadFinal").value);
    const tiempo = parseFloat(document.getElementById("tiempo").value);
    const opcionSeleccionada = document.getElementById("calculo").value;

    let contador = 0;

    // Verificar si los campos tienen valores
    if (!isNaN(altura)) contador++;
    if (!isNaN(velocidadInicial)) contador++;
    if (!isNaN(velocidadFinal)) contador++;
    if (!isNaN(tiempo)) contador++;

    // Seleccionar el párrafo del mensaje de error
    const mensajeError = document.getElementById("mensajeError");

    // Verificar si se han llenado dos o más campos
    if (contador <1) {
        mensajeError.innerText = "Por favor, completa 2 o más campos.";
        mensajeError.style.display = "block"; // Mostrar el mensaje
    } else {
        mensajeError.style.display = "none";  // Ocultar el mensaje de error

        // Llamar a la función para calcular según la opción seleccionada
        if (opcionSeleccionada === "velocidadFinal") {
            calcularVelocidadFinal(velocidadInicial, tiempo);
        } else if (opcionSeleccionada === "velocidadInicial") {
            calcularVelocidadInicial(velocidadFinal,tiempo )
        } else if (opcionSeleccionada === "tiempo") {
            calcularTiempo(velocidadInicial, velocidadFinal )
        }else if (opcionSeleccionada == "altura"){
            calcularAltura(velocidadInicial,tiempo)
        }
        else {
            document.getElementById("resultado").innerText = "Selecciona una opción válida.";
        }
        
        return true
    }
}

function calcularVelocidadFinal(velocidadInicial, tiempo) {
    // Verificar si los valores son números válidos
    if (isNaN(velocidadInicial) || isNaN(tiempo)) {
        document.getElementById("resultado").innerText = "Error: Por favor introduce números válidos.";
        return;
    }
    // Calcular la velocidad final
    let velocidadFinal = velocidadInicial - (gravedad * tiempo);
    // Mostrar el resultado con dos decimales
    document.getElementById("resultado").innerText = "La velocidad final es: " + velocidadFinal.toFixed(2) + " m/s";
}

function calcularVelocidadInicial(velocidadFinal,tiempo ) {
    // Verificar si los valores son números válidos
    if (isNaN(velocidadFinal) || isNaN(tiempo)) {
        document.getElementById("resultado").innerText = "Error: Por favor introduce números válidos.";
        return;
    }
    // Calcular la velocidad final
    let velocidadInicial = velocidadFinal-(gravedad*tiempo);
    // Mostrar el resultado con dos decimales
    document.getElementById("resultado").innerText = "La velocidad Inicial es de : " +velocidadInicial.toFixed(2) + "m/s";
}

function calcularTiempo(velocidadInicial,velocidadFinal ) {
    // Verificar si los valores son números válidos
    if (isNaN(velocidadInicial) || isNaN(velocidadFinal)) {
        document.getElementById("resultado").innerText = "Error: Por favor introduce números válidos.";
        return;
    }
    // Calcular la velocidad final
    let tiempo = (velocidadInicial*velocidadFinal) / (-(gravedad));
    // Mostrar el resultado con dos decimales
    document.getElementById("resultado").innerText = "El tiempo es de : " +tiempo.toFixed(2) + " s";
}

function calcularAltura(velocidadInicial,tiempo) {
    // Verificar si los valores son números válidos
    if (isNaN(tiempo) || isNaN(velocidadInicial))  {
        document.getElementById("resultado").innerText = "Error: Por favor introduce números válidos.";
        return;
    }
    // Calcular la velocidad final
    let altura = (velocidadInicial*tiempo)+ (0.5 * gravedad * tiempo ** 2);
    // Mostrar el resultado con dos decimales
    document.getElementById("resultado").innerText = "La altura es de: " +altura.toFixed(2) + " s";
}
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
        const container = document.getElementById('comentariosContainer');
        container.innerHTML = ''; // Limpiar comentarios anteriores

        comentarios.forEach(comentario => {
        const divComentario = document.createElement('div');
        divComentario.classList.add('comentario');
        divComentario.innerHTML = `<strong>${comentario.nombre}</strong><p>${comentario.comentario}</p>`;
        container.appendChild(divComentario);
        });
    }