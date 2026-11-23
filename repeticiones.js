const ventasHoy = [2, 4, 6, 3]
let totalVentas = 0

for (const ventas of ventasHoy) {
     totalVentas = totalVentas + ventas;
}

if (totalVentas >= 15)   {
    console.log("Meta alcanzada")}

else {console.log ("No se alcanzó la meta")
}

console.log (totalVentas)

for (let i = 0; i < 5; i++) {
  console.log("Your turn is " + i);
}

