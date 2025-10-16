// funcion flecha que devuelve un número aleatorio entre 1 y n
const numeroAleatorio = (n) => {
  return Math.floor(Math.random() * n) + 1;
};

// Probamos 
console.log(numeroAleatorio(10)); // Esto puede sacar cualquier número del 1 al 10
console.log(numeroAleatorio(5));  // Esto puede sacar cualquier número del 1 al 5
