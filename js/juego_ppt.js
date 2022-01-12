var rock = document.getElementById("piedra");
var paper = document.getElementById("papel");
var scissors = document.getElementById("tijera");

var piedra = 0;
var papel = 1;
var tijeras = 2;

rock.addEventListener("click", () => {
    resultado(piedra);
});

paper.addEventListener("click", () => {
    resultado(papel);
});

scissors.addEventListener("click", () => {
    resultado(tijeras);
});


function resultado(UserChoice,CpuChoice){

    var CpuChoice = Math.floor(Math.random() * (3));
    console.log(CpuChoice);    

    if(UserChoice === CpuChoice){
        document.getElementById("empate").style.display ="flex";
        document.getElementById("TijerasLoss").style.display = "none";
        document.getElementById("TijerasWin").style.display = "none";
        document.getElementById("PiedraLoss").style.display = "none";
        document.getElementById("PiedraWin").style.display = "none";
        document.getElementById("PapelLoss").style.display = "none";
        document.getElementById("PapelWin").style.display = "none";

    }
    else if(UserChoice === piedra && CpuChoice === 1){
        document.getElementById("PapelLoss").style.display = "flex";
        document.getElementById("TijerasLoss").style.display = "none";
        document.getElementById("TijerasWin").style.display = "none";
        document.getElementById("PiedraLoss").style.display = "none";
        document.getElementById("PiedraWin").style.display = "none";
        document.getElementById("PapelWin").style.display = "none";
        document.getElementById("empate").style.display ="none";


    }
    else if(UserChoice === piedra && CpuChoice === 2){
        document.getElementById("TijerasWin").style.display = "flex";
        document.getElementById("TijerasLoss").style.display = "none";
        document.getElementById("PiedraLoss").style.display = "none";
        document.getElementById("PiedraWin").style.display = "none";
        document.getElementById("PapelWin").style.display = "none";
        document.getElementById("PapelLoss").style.display = "none";
        document.getElementById("empate").style.display ="none";
        
    }
    else if(UserChoice === papel && CpuChoice === 0){
        document.getElementById("PiedraWin").style.display = "flex";
        document.getElementById("TijerasLoss").style.display = "none";
        document.getElementById("TijerasWin").style.display = "none";
        document.getElementById("PiedraLoss").style.display = "none";
        document.getElementById("PapelWin").style.display = "none";
        document.getElementById("PapelLoss").style.display = "none";
        document.getElementById("empate").style.display ="none";
    }
    else if(UserChoice === papel && CpuChoice === 2){
        document.getElementById("TijerasLoss").style.display = "flex";
        document.getElementById("TijerasWin").style.display = "none";
        document.getElementById("PiedraLoss").style.display = "none";
        document.getElementById("PiedraWin").style.display = "none";
        document.getElementById("PapelWin").style.display = "none";
        document.getElementById("PapelLoss").style.display = "none";
        document.getElementById("empate").style.display ="none";
        
    }
    else if(UserChoice === tijeras && CpuChoice === 0){
        document.getElementById("PiedraLoss").style.display = "flex";
        document.getElementById("PiedraWin").style.display = "none";
        document.getElementById("TijerasLoss").style.display = "none";
        document.getElementById("TijerasWin").style.display = "none";
        document.getElementById("PapelWin").style.display = "none";
        document.getElementById("PapelLoss").style.display = "none";
        document.getElementById("empate").style.display ="none";

        
    }
    else if(UserChoice === tijeras && CpuChoice === 1){
        document.getElementById("PapelWin").style.display = "flex";
        document.getElementById("PiedraLoss").style.display = "none";
        document.getElementById("PiedraWin").style.display = "none";
        document.getElementById("TijerasLoss").style.display = "none";
        document.getElementById("TijerasWin").style.display = "none";
        document.getElementById("PapelLoss").style.display = "none";
        document.getElementById("empate").style.display ="none";
    }
    else{
        console.log("Juego Terminado");
    }
    
}