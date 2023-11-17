// Definir la clave de la API
let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

// Obtener el parámetro 'id' de la consulta en la URL
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_peli = qsObj.get("id");

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
let urlPeli = `https://api.themoviedb.org/3/movie/${id_peli}?api_key=${acaVaLaAPIKey}`;
let ulrRecomendaciones = `https://api.themoviedb.org/3/movie/${id_peli}/recommendations?api_key=${acaVaLaAPIKey}`;

// Obtener información de la película
fetch(urlPeli)
.then(function(response) {
  return response.json();
})
.then(function(data) {
    console.log(data);

    // Actualizar elementos del DOM con la información de la película
  titulo.innerText = data.title;
  descripcion.innerText = data.overview;
  valoracion.innerText = `Valoracion: ${data.vote_average} / 10`;
  estreno.innerText = `Fecha de estreno: ${data.release_date}`;
  ultEpisodio.innerText = `Duración: ${data.runtime} minutos`;
  banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`;
  poster.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

    // Construir la lista de géneros
  let contenido = "<h3>Género/s:</h3>";
  for (let i = 0; i < data.genres.length; i++) {
    contenido += `<div id="generitos">
                      <a id="fantasia" href="#">${data.genres[i].name}</a>
                    </div>`;
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
                        <a href="./pelicula.html?id=${miData[i].id}"><img class="img-recomendaciones" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt=""></a>
                        <a class="texto-a" href="./pelicula.html?id=${miData[i].id}">${miData[i].title}</a>
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

let favoritos = [];
let recuperoStorage = localStorage.getItem('favoritos');
if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage);
}
let fav = document.querySelector('.favorito-boton');
if (favoritos.includes(id_peli)) {
    fav.innerText = 'Quitar de Favoritos ♥'
}

fav.addEventListener('click', function() {
    if (favoritos.includes(id_peli)) {
        let indice = favoritos.indexOf(id_peli)
        favoritos.splice(indice, 1);
        fav.innerText = 'Agregar a favorito ♡'
    } else {
        favoritos.push(id_peli);
        fav.innerText = 'Quitar de favorito ♥'
    }

    let favoritosToString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favoritosToString )
  });

function irAFav() {
  // Redirige a la página de favoritos
  window.location.href = './favorito.html'
}