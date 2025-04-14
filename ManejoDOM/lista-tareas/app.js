
const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');


function agregarTarea(){
  // input.value me dice si el usuario a ingresado un valor o no
  if(input.value){
    // Creo el elemento div con la clase tarea
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    // creo un elemento parrafo
    let texto = document.createElement('p');
    // le asigno a texto el string que el usuario ingresa por el input
    texto.innerText = input.value;
    tareaNueva.appendChild(texto); //esto siginifica agregar al final como hijo

    // crear y agregar contenedor de iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos);     //a la tarea nueva le agrego el texto y el icono

    //ICONOS 
    //crea un icono como elemento i usando boostrap
    let completar = document.createElement('i');
    //le agrego clases de boostrap + personal para modificaciones
    completar.classList.add('bi','bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click',completarTarea);


    let eliminar = document.createElement('i');
    eliminar.classList.add('bi','bi-trash3-fill','icono-eliminar');
    eliminar.addEventListener('click',eliminarTarea);

    let editar = document.createElement('i');
    editar.classList.add('bi','bi-pencil-fill', 'icono-editar');
    editar.addEventListener('click', editarTarea);

    iconos.append(completar,editar,eliminar);

    // AGREGAR LA TAREA A LA LISTA
    listaDeTareas.appendChild(tareaNueva);

  }else {
    alert('Por favor ingrese una tarea.');
  }
}

// la funcion recive el evento, lo utiliza de target sube por los nodos padres hasta llegar a la tarea en si
// (el valor de target es el icono) y va a agregarle la clase 'completada' o eliminarla si ya se encuentra
function completarTarea(e){
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada');
}

// Funcion para eliminar una tarea
function eliminarTarea(e){
  let tarea = e.target.parentNode.parentNode; // voy hasta el contenedor
  tarea.remove();
}

// Funcion para editar el texto
function editarTarea(e){
  let tarea = e.target.parentNode.parentNode; // Obtener la tarea actual
  let texto = tarea.querySelector('p'); // Encontrar el párrafo con el texto

  
  // Crear un input para editar el texto
  let inputEdicion = document.createElement('input');
  inputEdicion.type = 'text';
  inputEdicion.value = texto.innerText; // Establecer el valor inicial como el texto actual de la tarea.

  //reemplaza el párrafo (<p>) que contiene el texto de la tarea con el nuevo elemento de entrada (<input>)
  tarea.replaceChild(inputEdicion, texto); // para permitir la edición del texto.

  // Escuchar el evento "blur" (cuando el usuario hace clic fuera del input)
  inputEdicion.addEventListener('blur', () => {
    if (inputEdicion.value.trim() !== '') { // Verificar que el valor no esté vacío después de eliminar espacios en blanco
      // Actualizar el texto con el valor del input
      texto.innerText = inputEdicion.value;
    } else {
      // Si el valor está vacío, restaurar el texto original
      inputEdicion.value = texto.innerText;
    }
    
    // Restaurar el párrafo en lugar del input
    tarea.replaceChild(texto, inputEdicion);
  });

  // Enfocar el input automáticamente para que el usuario pueda escribir y editar rapidamente
  inputEdicion.focus();
}

// funcion que va a llamar a agregarTarea cuando el usuario haga click
boton.addEventListener('click',agregarTarea);


// funcion que va a llamar a agregarTarea pero cuando el usuario escriba algo y presione enter
input.addEventListener('keydown',(e)=>{
  if(e.key === 'Enter'){
    agregarTarea();
  }
})

