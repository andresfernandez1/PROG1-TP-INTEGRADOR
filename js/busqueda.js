let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

const valorBusqueda = form.elements.buscar.value;
let relacionados = document.querySelector('.h1_index')

let urlBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${valorBusqueda}`

fetch(urlBusqueda)
.then(function(response) {
return response.json();
})
.then(function(data) {
console.log(data.results);
let miData = data.results;
let ulBuscar = document.querySelector(".card-sec");
let contenido = "";
let i = 0;
for (i = 0; i < miData.length; i++) {
        contenido += `<article class="card">
                        <a href="./pelicula.html?id=${miData[i].id}"><img class="img_main" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path} " alt=""></a>
                        <a class="texto-a" href="./pelicula.html">${miData[i].title}</a>
                    </article>`
        }   
    if (i == 0) {
    contenido = `<li>
                <h2 class="h1-index">No hay resultados para su búsqueda</h2>
                </li>`
    }
    ulBuscar.innerHTML = contenido;
})
.catch(function(errors) {
console.log(errors);
});

relacionados.innerHTML = `Resultados de búsqueda para: ${valorBusqueda}`;