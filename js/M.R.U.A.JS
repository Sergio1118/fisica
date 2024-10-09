function formulario(desicion){

    let form1, form2, form3, form4;
    form1 = document.getElementById('modal1')
    form2 = document.getElementById('modal2')
    form3= document.getElementById('modal3')
    form4 = document.getElementById('modal4')



    switch (desicion) {
        case 1:
            form2.style. display = "none"; form3.style. display = "none"; form4.style. display = "none";form1.style. display = "flex";
            break;
    
        case 2:
            form1.style. display = "none"; form3.style. display = "none"; form4.style. display = "none";form2.style. display = "flex";

            break;
        
        case 3:
            form1.style. display = "none"; form2.style. display = "none"; form4.style. display = "none";form3.style. display = "flex";

            break;
        
        case 4:
            form1.style. display = "none"; form3.style. display = "none"; form2.style. display = "none";form4.style. display = "flex";

            break;

        default:

            break;
    }

}

function cerrar(){
    let form1, form2, form3, form4;
    form1 = document.getElementById('modal1')
    form2 = document.getElementById('modal2')
    form3= document.getElementById('modal3')
    form4 = document.getElementById('modal4')

    form2.style. display = "none"; form3.style. display = "none"; form4.style. display = "none";form1.style. display = "none";
}



function imprimirEnTabla(tipoCalculo, resultado) {
    // Obtiene la tabla
    const tabla = document.getElementById("tabla-resultados").getElementsByTagName('tbody')[0];

    // Crea una nueva fila
    const nuevaFila = tabla.insertRow();

    // Crea las celdas
    const celdaTipoCalculo = nuevaFila.insertCell(0);
    const celdaResultado = nuevaFila.insertCell(1);

    // Inserta los valores en las celdas
    celdaTipoCalculo.textContent = tipoCalculo;
    celdaResultado.textContent = resultado;
}


function imprimirEnTabla2(tipoCalculo, resultado) {
    const tabla = document.getElementById("tabla-resultados").getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();
    const celdaTipoCalculo = nuevaFila.insertCell(0);
    const celdaResultado = nuevaFila.insertCell(1);
    celdaTipoCalculo.textContent = tipoCalculo;
    celdaResultado.textContent = resultado;
}


// v=v0+at Esta fórmula describe cómo la velocidad cambia con el tiempo cuando la aceleración es constante.

function velocidad_F() {
    const tiempo = parseFloat(document.getElementById("Tiempo").value);
    const velocidad_I = parseFloat(document.getElementById("Velocidad_I").value);
    const aceleracion = parseFloat(document.getElementById("Aceleracion").value);
    const velocidad_final = parseFloat(document.getElementById("Velocidad_F").value);

    // Verificamos que los valores son válidos
    if (!isNaN(tiempo) && !isNaN(velocidad_I) && !isNaN(aceleracion)) {

        const vf = velocidad_I + tiempo * aceleracion;
        imprimirEnTabla("La velocidad final es: " , vf + " m/s");

    } else if (!isNaN(velocidad_I) && !isNaN(aceleracion) && !isNaN(velocidad_final)) {

        const t = (velocidad_final - velocidad_I) / aceleracion;
        imprimirEnTabla("El tiempo es: " + t + " s");

    } else if (!isNaN(tiempo) && !isNaN(velocidad_I) && !isNaN(velocidad_final)) {

        const a = (velocidad_final - velocidad_I) / tiempo;
        imprimirEnTabla("La aceleración es: " , a + " m/s²");

    } else if (!isNaN(tiempo) && !isNaN(aceleracion) && !isNaN(velocidad_final)) {

        const vi = velocidad_final - aceleracion * tiempo;
        imprimirEnTabla("La velocidad inicial es: " , vi + " m/s");
    }
}


//x=x0+v0*t+ 0.5*a*t²  Esta formula describe cómo cambia la posición de un objeto con el tiempo bajo una aceleración constante.

function posicion_F(){
    let tiempo = parseFloat(document.getElementById("Tiempo2").value);
    let velocidad_I = parseFloat(document.getElementById("Velocidad_I2").value);
    let aceleracion = parseFloat(document.getElementById("Aceleracion2").value);
    let posicion_final = parseFloat(document.getElementById("Posicion_final2").value);
    let posicion_inicial = parseFloat(document.getElementById("Posicion_inicial2").value)
    if (!isNaN(posicion_inicial) && !isNaN(aceleracion) && !isNaN(tiempo) && !isNaN(velocidad_I)) {

        const pf = posicion_inicial + velocidad_I * tiempo + 0.5 * aceleracion * Math.pow(tiempo, 2);
        imprimirEnTabla2("posición final: ", pf + " m");

    } else if (!isNaN(posicion_final) && !isNaN(velocidad_I) && !isNaN(aceleracion) && !isNaN(posicion_inicial)) {

        // Para encontrar el tiempo
        const diferencia_posicion = posicion_final - posicion_inicial;
        const cuadratica = Math.pow(velocidad_I, 2) - 2 * aceleracion * diferencia_posicion;

        if (cuadratica >= 0) {

            const tiempo_1 = (velocidad_I + Math.sqrt(cuadratica)) / aceleracion;
            const tiempo_2 = (velocidad_I - Math.sqrt(cuadratica)) / aceleracion;
            imprimirEnTabla2("Las posibles soluciones para el tiempo son:" , "tiempo 1 = " + tiempo_1.toFixed(2) + " s\n" +"tiempo 2 = " + tiempo_2.toFixed(2) + " s");

        } else {

            imprimirEnTabla2("No hay soluciones para el tiempo. Por favor revisa los valores ingresados");
        }
    } else if (!isNaN(posicion_final) && !isNaN(tiempo) && !isNaN(velocidad_I) && !isNaN(aceleracion)) {

        const PI = posicion_final - velocidad_I * tiempo - 0.5 * aceleracion * Math.pow(tiempo, 2);
        imprimirEnTabla2("posición inicial: " , PI+ " m");

    } else if (!isNaN(velocidad_I) && !isNaN(tiempo) && !isNaN(posicion_final) && !isNaN(posicion_inicial)) {

        // Calcular la aceleración
        const a = (2 * (posicion_final - posicion_inicial - (velocidad_I * tiempo))) / Math.pow(tiempo, 2);
        imprimirEnTabla2("aceleración: ",  a.toFixed(2) + " m/s²");

    } else if (!isNaN(aceleracion) && !isNaN(tiempo) && !isNaN(posicion_final) && !isNaN(posicion_inicial)) {

        // Calcular la velocidad inicial
        const  vI = (posicion_final - posicion_inicial - (0.5 * aceleracion * Math.pow(tiempo, 2))) / tiempo;
        imprimirEnTabla2("velocidad: ", vI.toFixed(2) + " m/s");
    }
} 


//v²=v0²+2*a*(x−x0) Esta fórmula permite calcular la velocidad final de un objeto en función de su posición, sin depender del tiempo.

function velocidad_cuadrada(){
    let velocidad_I = parseFloat(document.getElementById("Velocidad_I3").value);
    let velocidad_final = parseFloat(document.getElementById("Velocidad_F3").value)
    let aceleracion = parseFloat(document.getElementById("Aceleracion3").value);
    let posicion_final = parseFloat(document.getElementById("Posicion_final3").value);
    let posicion_inicial = parseFloat(document.getElementById("Posicion_inicial3").value)
    let vf,Vcuadrada,VI,a,PF,PI;
    if(!isNaN(velocidad_I) && !isNaN(aceleracion) && !isNaN(posicion_final) && !isNaN(posicion_inicial)){
        vf = Math.pow(velocidad_I, 2) + 2 * aceleracion * (posicion_final - posicion_inicial);
        Vcuadrada = Math.sqrt(vf);
        imprimirEnTabla("velocidad final:", Vcuadrada + "m/s")

    }else if (!isNaN(velocidad_final) && !isNaN(posicion_inicial) && !isNaN(posicion_final) && !isNaN(aceleracion)){

        VI =  Math.pow(velocidad_final, 2) - 2 * aceleracion * (posicion_final - posicion_inicial);
        imprimirEnTabla("velocidad inicial:",VI + "m/s");

    }else if (!isNaN(velocidad_I) && !isNaN(velocidad_final) && !isNaN(posicion_final) && !isNaN(posicion_inicial)){
        a =  (Math.pow(velocidad_final, 2) - Math.pow(velocidad_I, 2)) / (2 * (posicion_final - posicion_inicial));
        imprimirEnTabla("velocidad inicial:",a + "m/s²");

    }else if(!isNaN(velocidad_I) && !isNaN(velocidad_final) && !isNaN(aceleracion) && !isNaN(posicion_inicial)){
        PF = posicion_inicial + (Math.pow(velocidad_final, 2) - Math.pow(velocidad_I, 2)) / (2 * aceleracion);
        imprimirEnTabla("posicion final:", PF +"m")
    }else if(!isNaN(velocidad_I) && !isNaN(velocidad_final) && !isNaN(aceleracion) && !isNaN(posicion_final)){
        PI = posicion_final - ((Math.pow(velocidad_final, 2) - Math.pow(velocidad_I, 2)) / (2 * aceleracion));
        imprimirEnTabla("posicion inicial:", PI +"m")

    }
}

//Δx=v0*t+0.5*a*t²  Desplazamiento en Función del Tiempo
function poscion_total(){
    
    const velocidad_I = parseFloat(document.getElementById("Velocidad_I4").value);
    const tiempo = parseFloat(document.getElementById("Tiempo4").value);
    const aceleracion = parseFloat(document.getElementById("Aceleracion4").value);
    let  posicion_general;

    if (!isNaN(velocidad_I) && !isNaN(tiempo) && !isNaN(aceleracion)){

        posicion_general = velocidad_I * tiempo + 0.5 * aceleracion * Math.pow(tiempo, 2);
        imprimirEnTabla("desplazamiento: ",  posicion_general.toFixed(2) + "m");
    }
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