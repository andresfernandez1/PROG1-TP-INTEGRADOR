// Variable para almacenar la API Key
let APIKey = "e085a8d4a0502afc1d3c8e65c53af130";

// Obtener la cadena de consulta de la URL y extraer el valor del parámetro 'buscar'
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let valorBusqueda = qsObj.get("buscar");

// Seleccionar el elemento del DOM donde se mostrarán los resultados de la búsqueda
let seccionBuscar = document.querySelector(".card-sec");

// Construir la URL de la API para la búsqueda
let urlBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${valorBusqueda}`;

// Imprimir el valor de búsqueda en la consola para verificar
console.log('Valor de búsqueda:', valorBusqueda);

// Realizar la solicitud de búsqueda y mostrar los resultados
fetch(urlBusqueda)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.results);

    let miData = data.results;
    let contenido = "";
    let miPeli = document.querySelector(".busqueda-h1");

    // Verificar si no hay resultados
    if (miData.length === 0) {
        contenido = `<li>
                        <h2 class="h1-index">No hay resultados para su búsqueda</h2>
                    </li>`;
    } else {
        // Iterar sobre los resultados y construir las tarjetas
        for (let i = 0; i < miData.length; i++) {
            contenido += `<article class="card">
                            <a href="./pelicula.html?id=${miData[i].id}"><img class="img_main" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt=""></a>
                            <a class="texto-a" href="./pelicula.html">${miData[i].title}</a>
                        </article>`;
        }
    }

    // Mostrar los resultados en el elemento correspondiente del DOM
    seccionBuscar.innerHTML = contenido;

    // Actualizar el texto para indicar la búsqueda actual
    miPeli.innerText = `Resultados para tu búsqueda: ${valorBusqueda}`;
})
.catch(function(errors) {
    // Manejar errores en la consola
    console.log(errors);
});
