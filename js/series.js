let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_serie = qsObj.get("id"); 

let poster = document.querySelector("#banercitoo")
let titulo = document.querySelector("#h1-pelicula")
let descripcion = document.querySelector(".descripcion")
let valoracion = document.querySelector(".valoracion")
let estreno = document.querySelector(".estreno")
let ultEpisodio = document.querySelector(".ultimo-episodio")
let genero = document.querySelector("#generitos")
let banner = document.querySelector(".banner-serie")
let cardReco = document.querySelector(".card-recomendaciones")
let recomendaciones = document.querySelector(".recomendaciones")


let urlSeries = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`
let ulrRecomendaciones = `https://api.themoviedb.org/3/tv/${id_serie}/recommendations?api_key=${acaVaLaAPIKey}`

fetch(urlSeries)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);

    titulo.innerText = data.name
    descripcion.innerText = data.overview
    valoracion.innerText = `Valoracion: ${data.vote_average}`
    estreno.innerText = `Fecha de estreno: ${data.first_air_date}`
    ultEpisodio.innerText = `Ultimo Episodio: ${data.last_air_date}`
    banner.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`
    poster.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    recomendaciones.innerText = "Mostrar recomendaciones:";
    let contenido = "<h3>Genero/s:</h3>";
    for (let i = 0; i < data.genres.length; i++) {

        contenido += `<div id="generitos">
                            <a id="fantasia" href="#">${data.genres[i].name}</a>
                     </div>` 
    }
    genero.innerHTML=contenido;
})
.catch(function(error) {
    console.log(error);
});
recomendaciones.addEventListener('click', function(e) {
    if (cardReco.style.display === "none") {
        cardReco.style.display = "flex";
        recomendaciones.innerText = "Ocultar recomendaciones:"
    } else {
        cardReco.style.display = "none";
        recomendaciones.innerText = "Mostrar recomendaciones:";
    }
});


fetch(ulrRecomendaciones)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    let miData = data.results
    let recomenda = '';
    for (let i = 0; i < 3; i++) {
        recomenda += `<article class="card">
                        <a href="./series.html?id=${miData[i].id}"><img class="img_main" src="https://image.tmdb.org/t/p/w500/${miData[i].backdrop_path} " alt=""></a>
                        <a class="texto-a" href="./series.html">${miData[i].name}</a>
                    </article>`
    }
    cardReco.innerHTML=recomenda
})
.catch(function(error) {
    console.log(error);
});