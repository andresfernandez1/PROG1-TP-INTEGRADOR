// Definir la API Key
let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

// Seleccionar los elementos del DOM donde se mostrarán los géneros de películas y series
let cajaGenero = document.querySelector('.cajagenero');
let cajaGeneros = document.querySelector('.cajageneros');

// URLs de las API para obtener la lista de géneros de películas y series
let urlPGeneros = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`;
let urlSGeneros = `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`;

// Obtener y mostrar los géneros de películas
fetch(urlPGeneros)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let miData = data.genres;
    let contenido = "";

    // Iterar sobre la lista de géneros de películas
    for (let i = 0; i < miData.length; i++) {
      // Construir el contenido para mostrar los géneros de películas
      contenido += `<h3 class="generoh3"><a href="./genero.html">${miData[i].name}</a></h3>`;
    }

    // Mostrar los géneros de películas en el elemento correspondiente del DOM
    cajaGenero.innerHTML = contenido;
  })
  .catch(function (error) {
    // Manejar errores en la consola
    console.log(error);
  });

// Obtener y mostrar los géneros de series
fetch(urlSGeneros)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let miData = data.genres;
    let contenido = "";

    // Iterar sobre la lista de géneros de series
    for (let i = 0; i < miData.length; i++) {
      // Construir el contenido para mostrar los géneros de series
      contenido += `<h3 class="generoh3"><a href="./genero.html">${miData[i].name}</a></h3>`;
    }

    // Mostrar los géneros de series en el elemento correspondiente del DOM
    cajaGeneros.innerHTML = contenido;
  })
  .catch(function (error) {
    // Manejar errores en la consola
    console.log(error);
  });
