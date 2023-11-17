// Definir la clave de la API
let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

// Obtener el parámetro 'id' de la consulta en la URL
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_serie = qsObj.get("id"); 

// Seleccionar elementos del DOM
let poster = document.querySelector("#banercitoo");
let titulo = document.querySelector("#h1-pelicula");
let descripcion = document.querySelector(".descripcion");
let valoracion = document.querySelector(".valoracion");
let estreno = document.querySelector(".estreno");
let ultEpisodio = document.querySelector(".ultimo-episodio");
let genero = document.querySelector("#generitos");
let banner = document.querySelector(".banner-serie");
let cardReco = document.querySelector(".card-recomendaciones");
let recomendaciones = document.querySelector(".recomendaciones");

// Construir las URLs de las API
let urlSeries = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`;
let ulrRecomendaciones = `https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${acaVaLaAPIKey}`;

// Obtener información de la serie
fetch(urlSeries)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    // Actualizar elementos del DOM con la información de la serie
    titulo.innerText = data.name;
    descripcion.innerText = data.overview;
    valoracion.innerText = `Valoracion: ${data.vote_average} / 10`;
    estreno.innerText = `Fecha de estreno: ${data.first_air_date}`;
    ultEpisodio.innerText = `Último Episodio: ${data.last_air_date}`;
    banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`;
    poster.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

    // Construir la lista de géneros
    let contenido = "<h3>Género/s:</h3>";
    for (let i = 0; i < data.genres.length; i++) {
      contenido += `<div id="generitos">
                      <a id="fantasia" href="#">${data.genres[i].name}</a>
                    </div>` ;
    }
    genero.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log(error);
  });

// Evento para mostrar/ocultar recomendaciones
recomendaciones.addEventListener('click', function(e) {
  if (recomendaciones.innerText === "Mostrar Recomendaciones:") {
    cardReco.style.display = "flex";
    recomendaciones.innerText = "Ocultar recomendaciones:";
  } else {
    cardReco.style.display = "none";
    recomendaciones.innerText = "Mostrar Recomendaciones:";
  }
});

// Eventos para cambiar el color de fondo del botón de recomendaciones
recomendaciones.addEventListener('mouseover', function(e) {
  recomendaciones.style.backgroundColor = 'gold';
});

recomendaciones.addEventListener('mouseout', function(e) {
  recomendaciones.style.backgroundColor = 'lightgrey';
});

// Obtener y mostrar las recomendaciones
fetch(ulrRecomendaciones)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let miData = data.results;
    let recomenda = '';

    if (miData.length > 0) {
      for (let i = 0; i < 3; i++) {
        recomenda += `<article class="carta-recomendaciones">
                        <a href="./series.html?id=${miData[i].id}"><img class="img-recomendaciones" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt=""></a>
                        <a class="texto-a" href="./series.html?id=${miData[i].id}">${miData[i].name}</a>
                      </article>`;
      }
    } else {
      recomenda = `<h2 class="h1-index">No hay resultados para su búsqueda</h2>`;
    }

    cardReco.innerHTML = recomenda;
  })
  .catch(function(error) {
    console.log(error);
  });

