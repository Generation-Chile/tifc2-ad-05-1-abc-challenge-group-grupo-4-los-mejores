const colores = ['green', 'blue', 'red'];

// Función que devuelve un color aleatorio
function obtenerColorAleatorio(listaColores) {
    const colorAleatorio =  listaColores[Math.floor(Math.random() * listaColores.length)];
    return colorAleatorio
}

const cambioColor = document.getElementsByTagName("h5");

cambioColor[0].addEventListener("click", function(){
    cambioColor[0].style.color = obtenerColorAleatorio(colores);
})