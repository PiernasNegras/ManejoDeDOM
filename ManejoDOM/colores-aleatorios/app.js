// selecionar elementos en JS
const boton = document.querySelector('button'); //solo tengo un boton sino deberia seleccionar por ID
const color = document.getElementById('color');

function generarColorAleatorio(){
  let digitos = '0123456789ABCDEF'; // defino la variable para luego seleccionar un valor aleatorio (string)
  let colorHex = '#';
    
  for (let i = 0; i < 6 ; i++){
    let indiceAleatorio = Math.floor(Math.random() * 16); //genero un indice aleatorio
    colorHex += digitos[indiceAleatorio]; // a colorHex le voy agregando el valor que haya tomado por indice de mi string
  }

  return colorHex;
}

boton.addEventListener('click', function(){
  //guardo en color aleatorio el array que me retorna la funcion "generarColorAleatorio"
  let colorAleatorio = generarColorAleatorio();
  //Actualizo el texto para que coincida con el color de fondo
  color.textContent = colorAleatorio
  //Actualiza el color de fondo que se muestra
  document.body.style.backgroundColor = colorAleatorio
});