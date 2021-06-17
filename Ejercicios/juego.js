var player;
var cp;

if(player === "Tijera" && cp === "Papel"){
    console.log("¡Ganaste!");
}
else if(player === "Piedra" && cp === "Tijeras"){
    console.log("¡Ganaste!");
}

else if(player === "Papel" && cp === "Piedra"){
    console.log("¡Ganaste!");
    }

else if(player === cp){
    console.log("Empate");
        }
else {
    console.log("Perdiste")
}
