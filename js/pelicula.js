let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_pelicula = qsObj.get("id"); 




let poster = document.querySelector("#banercitoo")
let bannerpeli = document.querySelector("#bannerpeli")


let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`


fetch(url)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    let banercitoo = document.querySelector("#banercitoo")

    console.log(data);
    poster.innerText = `https://image.tmdb.org/t/p/w500/${data.poster_path}`


})
.catch(function (error) {
    console.log(error);
})
