let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`
let url2 = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`


let cardsec = document.querySelector("#cardsec");
let cardter = document.querySelector("#cardter");


fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let miData = data.results;
    let contenido = "";
    for (let i = 0; i < 6; i++) {
        
        console.log(miData[i]);

        contenido += `<article class="card">
                        <a href="./pelicula.html?id=${miData[i].id}"><img class="img_main" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path} " alt=""></a>
                        <a class="texto-a" href="./pelicula.html">${miData[i].title}</a>
                      </article>`
    }

    cardsec.innerHTML=contenido;


})
.catch(function (error) {
    console.log(error);
})

fetch(url2)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let miData = data.results;
    let contenido = "";
    for (let i = 0; i < 6; i++) {
        
        console.log(miData[i]);

        contenido += `<article class="card">
                            <a href="./series.html?id=${miData[i].id}"><img class="img_main" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path} " alt=""></a>
                            <a class="texto-a" href="./series.html">${miData[i].name}</a>
                        </article>`
    }

    cardter.innerHTML=contenido;
})
.catch(function (error) {
    console.log(error);
});