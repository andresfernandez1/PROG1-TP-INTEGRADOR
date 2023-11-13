let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_serie = qsObj.get("id"); 

let banner = document.querySelector("#banercitoo")
let titulo = document.querySelector("h1-pelicula")

let urlSeries = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaVaLaAPIKey}`

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);

})
.catch(function(error) {
    console.log(error);
});
