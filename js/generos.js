let acaVaLaAPIKey = "e085a8d4a0502afc1d3c8e65c53af130";

cajaGenero = document.querySelector('.cajagenero')
cajaGeneros = document.querySelector('.cajageneros')

urlPGeneros = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`
urlSGeneros = `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`

fetch(urlPGeneros)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let miData = data.genres;
    let contenido = "";

    for (let i = 0; i < miData.length; i++) {
      contenido += `<h3 class="generoh3"><a href="./genero.html">${miData[i].name}</a></h3>`;
    }

    cajaGenero.innerHTML = contenido;
  })
  .catch(function (error) {
    console.log(error);
  });

  fetch(urlSGeneros)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let miData = data.genres;
    let contenido = "";

    for (let i = 0; i < miData.length; i++) {
      contenido += `<h3 class="generoh3"><a href="./genero.html">${miData[i].name}</a></h3>`;
    }

    cajaGeneros.innerHTML = contenido;
  })
  .catch(function (error) {
    console.log(error);
  });