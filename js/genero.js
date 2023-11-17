let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_genero = qsObj.get("id"); 

let urlGenerosP = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}&with_genres=${id_genero}`
let urlGenerosS= `https://api.themoviedb.org/3/discover/tv?api_key=${acaVaLaAPIKey}&with_genres=${id_genero}`

let cardsec = document.querySelector("#cardsec");
let cardter = document.querySelector("#cardter")

fetch(urlGenerosP)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);

    let miData = data.results
    let contenido = "";

    console.log(miData);
    if (miData.length ===0){
        contenido += `<li>
                        <h2 class="h1-index">No hay resultados para su búsqueda</h2>
                    </li>`;
        } else {
        for (let i = 0; i < 6; i++) {
            
            console.log(miData[i]);
    
            contenido += `<article class="card">
                                <a href="./pelicula.html?id=${miData[i].id}"><img class="img_main" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt=""></a>
                                <a class="texto-a" href="./pelicula.html">${miData[i].title}</a>
                            </article>`
        }
        }
        
    cardsec.innerHTML=contenido;
})
.catch(function (error) {
    console.log(error);
})

fetch(urlGenerosS)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let miData = data.results;
    let contenido = "";
    if (miData.length ===0){
    contenido += `<li>
                    <h2 class="h1-index">No hay resultados para su búsqueda</h2>
                </li>`;
    } else {
    for (let i = 0; i < 6; i++) {
        
        console.log(miData[i]);

        contenido += `<article class="card">
                            <a href="./series.html?id=${miData[i].id}"><img class="img_main" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt=""></a>
                            <a class="texto-a" href="./series.html">${miData[i].name}</a>
                        </article>`
    }
    }
    cardter.innerHTML=contenido;

})
.catch(function (error) {
    console.log(error);
})

