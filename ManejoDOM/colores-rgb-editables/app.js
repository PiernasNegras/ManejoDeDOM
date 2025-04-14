//referencias que corresponden a los ID del HTML
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

//defino las variable de los colores y les doy el valor con value(extrae del html)
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//cambio los textos de los parrafos de html por el valor(numero) que acabo extraigo cada que se hace una modificacion
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

//Desarrollo la funcion que va a actualizar los colores y el fondo
function actualizarColor(rojo,verde,azul){
  //obtengo los valores directos de las variables y las guardo en una costante
  const  colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  //con esa constante actualizo el color del fondo de la pantalla a travez del body
  document.body.style.backgroundColor = colorRGB;
}

//actualizar el rojo agregando un evento "cambio"
inputRojo.addEventListener('change',(e)=>{
  // obtengo el valor mediante target de la variable global
  rojo = e.target.value;
  //se encarga de actualizar el contenido del elemento HTML 
  //con el ID texto-rojo con el valor de la variable rojo
  textoRojo.innerText = rojo;
  actualizarColor(rojo,verde,azul);
});

//actualizar el verde agregando un evento "cambio"
inputVerde.addEventListener('change',(e)=>{
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo,verde,azul);
});

//actualizar el azul agregando un evento "cambio"
inputAzul.addEventListener('change', (e)=>{
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo,verde,azul);
})