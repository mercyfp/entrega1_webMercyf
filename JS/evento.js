// Seleccionar todos los botones
const botones = document.querySelectorAll('.container_menu button');

// Iterar sobre cada botón y agregar un event listener
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        // Obtener el valor de data-target del botón
        const targetClass = boton.getAttribute('data-target');
        
        // Ocultar todos los contenedores
        document.querySelectorAll('.container_img, .container_biografia, .container_mascotas, .container_hobbies').forEach(contenedor => {
            contenedor.style.display = 'none';
        });

        // Mostrar el contenedor correspondiente al botón clicado
        const contenedor = document.querySelector(`.${targetClass}`);
        if (contenedor) {
            contenedor.style.display = 'block'; // Cambia a 'block', 'flex' o cualquier valor que necesites
        }
    });
});
