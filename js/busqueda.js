let APIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let valorBusqueda = qsObj.get("buscar");

let seccionBuscar = document.querySelector(".card-sec");

let urlBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${valorBusqueda}`

// Aquí puedes agregar un console.log para verificar el valor de valorBusqueda
console.log('Valor de búsqueda:', valorBusqueda);


fetch(urlBusqueda)
.then(function(response) {
    return response.json();
  })
.then(function(data) {
    console.log(data.results);

    let miData = data.results;
    let contenido = "";
    let miPeli = document.querySelector(".busqueda-h1");

    if (miData.length === 0) {
        contenido = `<li>
                        <h2 class="h1-index">No hay resultados para su búsqueda</h2>
                    </li>`;
    } else {
        for (let i = 0; i < miData.length; i++) {
            contenido += `<article class="card">
                            <a href="./pelicula.html?id=${miData[i].id}"><img class="img_main" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt=""></a>
                            <a class="texto-a" href="./pelicula.html">${miData[i].title}</a>
                        </article>`;
        }
    }
    seccionBuscar.innerHTML = contenido;
    miPeli.innerText = `Resultados para tu búsqueda: ${valorBusqueda}`
})
.catch(function(errors) {
    console.log(errors);
});
