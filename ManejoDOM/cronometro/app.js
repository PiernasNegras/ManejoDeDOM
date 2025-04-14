// con esto puedo tener acceso al html en los id especificados
const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

// defino las variables horas minutos y segundos, y las inicializo en 0
let [horas, minutos, segundos] = [0,0,0];

let intervaloDeTiempo;

let estadoCronometro = 'pausado';

function actualizarCronometro(){
  segundos++; //cada que llamo a la funcion me agrega un segundo
  // logica del reloj, si pasan 60 minutos en realidad es una hora...
  if (segundos / 60 == 1){
    segundos = 0;
    minutos++;

    if(minutos / 60 == 1){
    minutos = 0 ;
    horas++;
    }
  }

  // necesito agregarle un formato a los numeros para poder agregarle el cero a la izq
  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  // reemplazo el texto de "cronometro" para poder mostrar los valores del cronometro pero con formato
  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}


// defino una funcion donde voy a agregarlo el cero a la izq si el numero todavia es menor a 10
function asignarFormato(unidadDeTiempo){
  // si la unidad de tiempo es menor a 10 muestro un cero mas la unidad de tiempo
  // sino solo muestro la unidad de tiempo correspondiente
  return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
};

// añado los eventos
botonInicioPausa.addEventListener('click',()=>{
  if (estadoCronometro === 'pausado'){
    // defino un intervaloDeTiempo marcando cada cuanto quiero que se actualice el cronometro
    intervaloDeTiempo = window.setInterval(actualizarCronometro,1000);
    // modifico el html para que en vez de Play, este el icono de pausa con bootstrap
    // (esto en proyectos grandes no se hace porque puede haber problemas de seguridad)
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
    // tengo que remover la clase "iniciar" para quitarle los estilos al boton
    botonInicioPausa.classList.remove('iniciar');
    botonInicioPausa.classList.add('pausar');
    // cambio el estado del cronometro
    estadoCronometro = 'iniciado'
  }else {
    // eliminar ese intervalo
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove('pausar');
    botonInicioPausa.classList.add('iniciar');
    estadoCronometro = 'pausado'
    }

})

botonReiniciar.addEventListener('click',()=>{
  window.clearInterval(intervaloDeTiempo);
  horas = 0;
  minutos = 0;
  segundos = 0;
  
  // reinicio
  cronometro.innerText = '00:00:00';
  estadoCronometro = 'pausado'
  // reinicio botones
  botonInicioPausa.classList.remove('pausar');
  botonInicioPausa.classList.add('iniciar');
  botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';


});