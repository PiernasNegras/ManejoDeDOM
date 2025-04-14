// selecciono todos los botones y los almaceno en la variable toppings
const toppings = document.querySelectorAll('button');

// recorro todos los toppings con un forEach
toppings.forEach((topping) => {
  // por cada iteracion le va a agregar un evento a cada boton
  topping.addEventListener('click',elegirToppings =() =>{
    // cada que se presione un boton va a alternar la clase "elegido" pintandolo de verde
    topping.classList.toggle('elegido');
  });
}) 
  
