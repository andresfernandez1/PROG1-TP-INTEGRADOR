/*                      Recuperar de favoritos                       */

/* Recupero el storage */
let recuperoStorage = localStorage.getItem('favoritos');

/* transformar el json (string) en obj o un array */
let favoritos = JSON.parse(recuperoStorage)

/* Recuperar el elemento del DOM */
let section = document.querySelector('#lista');

/* Crear personajesFavoritos string vaci para luego ser completado con el fetch */
/* Crear personajesFavoritos string vacio para luego ser completado con el fetch */
let personajesFavoritos = '';

/* Preguntar: Favoritos es null O su longitus es igual a 0
TRUE: dar un mensaje en la section diciendo que no hay datos en favoritos
FALSE: Hacer un FOR que recorra favoritos y haga un fetch por cada elemento del array de favoritos*/
    /* No hay favoritos */


if (favoritos == null || favoritos.length == 0) {
    section.innerHTML = '<p>No hay favoritos seleccionados</p>'
} else {

    for (let i = 0; i < favoritos.length; i++) {

        let url = `https://rickandmortyapi.com/api/character/${favoritos[i]}`;

        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            personajesFavoritos += `<article>
                                        <img src=${data.image} alt='' />
                                        <p>Name: ${data.name}</p>
                                        <p>Status: ${data.status} </p>
                                        <a href='detalle.html?id=${data.id}'>Ver más</a>
                                    </article>`;

            section.innerHTML = personajesFavoritos;

        })
        .catch(function(error) {
            console.log(error);
        });

    }
}