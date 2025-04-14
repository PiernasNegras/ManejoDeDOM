let botonElem = document.getElementById('boton-cambiar-cita');
//selecciono el elemento donde tengo que cambiar la cita
let citaElem = document.getElementById('cita');
//selecciono el elemento donde debe aparecer el nombre del autor
let autorElem = document.getElementById('autor');


function generarEnteroAleatorio(min,max){
    //sin incluir el max en los valores posibles
    return Math.floor(Math.random() * (max - min) + min);    
}

function cambiarCita(){
    let indiceAleatorio = generarEnteroAleatorio(0,citas.length);
    //selecciono una cita en un indice aleatorio y reemplazo su texto, repito pero con el autor
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}

//llamo de manera manual a la funcion "cambiarCita" con el fin de que la primera vez que habra la pagina ya aparezca una frase escrita
cambiarCita();

//llamo al elemento boton y le asigno un evento de click para actualizar la frase
botonElem.addEventListener('click',cambiarCita);