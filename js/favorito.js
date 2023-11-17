// Clave de la API (puedes mantener este nombre)
let apiKey = "e085a8d4a0502afc1d3c8e65c53af130";

// Recuperar datos de favoritos desde el almacenamiento local
let favoritosStorage = localStorage.getItem('favoritos');

// Convertir el JSON (cadena) en objeto o array
let peliculasFavoritas = JSON.parse(favoritosStorage);

// Seleccionar la sección en el DOM
let seccionPeliculas = document.querySelector('.card-sec');

// Variable para almacenar el contenido HTML de las películas favoritas
let contenidoPeliculas = '';

// Verificar si no hay favoritos o está vacío
if (peliculasFavoritas == null || peliculasFavoritas.length === 0) {
    // Mostrar un mensaje si no hay favoritos
    seccionPeliculas.innerHTML = `<li>
                                    <h2 class="h1-index">No hay resultados para su búsqueda</h2>
                                </li>`;
} else {
    // Recorrer el array de favoritos y obtener la información de cada película
    for (let i = 0; i < peliculasFavoritas.length; i++) {
        // Construir la URL para obtener detalles de la película
        let url = `https://api.themoviedb.org/3/movie/${peliculasFavoritas[i]}?api_key=${apiKey}`;

        // Realizar la solicitud de la API para obtener detalles de la película
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // Construir el HTML de cada película favorita
            contenidoPeliculas += `<article class="card">
                                        <a href="./pelicula.html?id=${data.id}"><img class="img_main" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt=""></a>
                                        <a class="texto-a" href="./pelicula.html">${data.title}</a>
                                    </article>`;

                // Actualizar la sección con las películas favoritas
            seccionPeliculas.innerHTML = contenidoPeliculas;
        })
        .catch(function (error) {
            console.log(error);
        });
}};
