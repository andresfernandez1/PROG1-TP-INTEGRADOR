form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const valorBusqueda = form.elements.buscar.value;
    busqueda.innerText = `Resultados según tu búsqueda: "${valorBusqueda}"`
});
