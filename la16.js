 // Función para mostrar la vista previa de la imagen seleccionada
 function mostrarImagen(event) {
    const imagen = document.getElementById('ver-imagen'); // Selecciona el elemento de imagen de vista previa
    imagen.src = URL.createObjectURL(event.target.files[0]); // Crea una URL temporal para mostrar la imagen seleccionada
    imagen.style.display = 'block'; // Muestra la imagen en la página
}

// Función para validar el formulario antes de enviarlo
document.getElementById('registroForm').addEventListener('submit', function(event) {
    // Obtiene los valores de cada campo del formulario
    const nombre = document.querySelector('input[name="nombre"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Verifica que todos los campos estén completos
    if (nombre === '' || email === '' || password === '') {
        alert('Por favor completa todos los campos.'); // Muestra una alerta si algún campo está vacío
        event.preventDefault(); // Evita el envío del formulario
    } else {
        alert('Registro exitoso'); // Muestra una alerta de éxito si todos los campos están completos
    }
});