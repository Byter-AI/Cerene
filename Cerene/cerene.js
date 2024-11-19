function mostrarMas(producto) {
    var descripcion = document.getElementById('descripcion-' + producto);
    var imagenesAdicionales = document.getElementById('imagenes-adicionales-' + producto);
    
    // Toggle de la clase visible para la descripción
    descripcion.classList.toggle('visible');
    
    // Toggle de la visualización de imágenes adicionales
    if (imagenesAdicionales.style.display === 'none' || imagenesAdicionales.style.display === '') {
        imagenesAdicionales.style.display = 'flex';
    } else {
        imagenesAdicionales.style.display = 'none';
    }
}