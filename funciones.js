function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

console.log(calcularPrecio(4,8))
console.log(calcularPrecio(10,4))
console.log(calcularPrecio(3,6))

//Función de reserva

function puedeReservar(cantidadReserva){
    return cantidadReserva<=2}

//Otra forma de calcular la función sería:
//function puedeReservar(cantidadReserva)}
//if (cantidadReserva <= 2) {
//return true;
//} else {
//return false;
//}
