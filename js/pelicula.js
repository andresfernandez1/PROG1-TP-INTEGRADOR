let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
<<<<<<< HEAD
console.log(qsObj);
let id_pelicula = qsObj.get('id'); 
console.log(id_pelicula);
let banercitoo = document.querySelector("#banercitoo")
let h1pelicula = document.querySelector("#h1pelicula")
=======
let id_pelicula = qsObj.get("id"); 




let poster = document.querySelector("#banercitoo")
let bannerpeli = document.querySelector("#bannerpeli")
>>>>>>> 3deb1fe99c6b10a06968d9d70232f4a526e55c2d

let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaVaLaAPIKey}`


fetch(url)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    let banercitoo = document.querySelector("#banercitoo")

    console.log(data);
<<<<<<< HEAD
    let miData = data.results;
    banercitoo.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    let h1pelicula = document.querySelector(".h1pelicula")
    h1pelicula.innerHTML = data.title 




=======
    poster.innerText = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
>>>>>>> 3deb1fe99c6b10a06968d9d70232f4a526e55c2d


})
.catch(function (error) {
    console.log(error);
})
