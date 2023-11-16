// Definir la API Key
let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

// URLs de las API para películas y series
let urlMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`;
let urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`;

// Seleccionar los elementos del DOM donde se mostrarán las tarjetas de películas y series
let cardsec = document.querySelector("#cardsec");
let cardter = document.querySelector("#cardter");

// Función para realizar la solicitud y mostrar las películas
fetch(urlMovies)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Obtener los resultados de la respuesta
        let miData = data.results;
        let contenido = "";

        // Iterar sobre los primeros 6 resultados
        for (let i = 0; i < 6; i++) {
            // Mostrar información en la consola para verificar
            console.log(miData[i]);

            // Construir el contenido de la tarjeta de película
            contenido += `<article class="card">
                            <a href="./pelicula.html?id=${miData[i].id}"><img class="img_main" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt=""></a>
                            <a class="texto-a" href="./pelicula.html">${miData[i].title}</a>
                          </article>`;
        }

        // Mostrar las tarjetas de películas en el elemento correspondiente del DOM
        cardsec.innerHTML = contenido;
    })
    .catch(function (error) {
        // Manejar errores en la consola
        console.log(error);
    });

// Función para realizar la solicitud y mostrar las series
fetch(urlSeries)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Obtener los resultados de la respuesta
        let miData = data.results;
        let contenido = "";

        // Iterar sobre los primeros 6 resultados
        for (let i = 0; i < 6; i++) {
            // Mostrar información en la consola para verificar
            console.log(miData[i]);

            // Construir el contenido de la tarjeta de serie
            contenido += `<article class="card">
                                <a href="./series.html?id=${miData[i].id}"><img class="img_main" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt=""></a>
                                <a class="texto-a" href="./series.html">${miData[i].name}</a>
                            </article>`;
        }

        // Mostrar las tarjetas de series en el elemento correspondiente del DOM
        cardter.innerHTML = contenido;
    })
    .catch(function (error) {
        // Manejar errores en la consola
        console.log(error);
    });
