const seccionBatalla = document.getElementById('campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;
let puntajeJugador = 0;
let puntajePc = 0;

const puntajeObjetivo = 3;

const imagenes = [
    {
        name: "Piedra",
        url: "assets/Piedra.PNG" 
    },
    {
        name: "Papel",
        url: "assets/Papel.PNG" 
    },
    {
        name: "Tijeras",
        url: "assets/Tijeras.PNG" 
    }
];

function iniciar(){
    seccionBatalla.style.display = 'none';
};

btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    opPc();
});

btnTijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    opPc();
});

function opPc(){
    var aleaorio = nAleatorio();

    if(aleaorio == 0){
        opcionPc = "Piedra";
    }else if(aleaorio == 1){
        opcionPc = "Papel";
    }else if(aleaorio == 2){
        opcionPc = "Tijeras";
    };

    batalla();
};

function batalla(){
    if(opcionJugador == opcionPc){
        msjBatalla.innerHTML = "Empate";
    }else if(opcionJugador == "Piedra" && opcionPc == "Tijeras" ||
             opcionJugador == "Papel" && opcionPc == "Piedra" ||
             opcionJugador == "Tijeras" && opcionPc == "Papel"){
        msjBatalla.innerHTML = "Ganaste";
        puntajeJugador++;
    }else{
        msjBatalla.innerHTML = "Perdiste";
        puntajePc++;
    };

    actualizarPuntaje();
    verificarGanador();
    addImagenes();
}

function actualizarPuntaje(){
    const puntajeJugadorElem = document.getElementById('puntaje-jugador');
    const puntajePcElem = document.getElementById('puntaje-pc');
    puntajeJugadorElem.textContent = `Jugador: ${puntajeJugador}`;
    puntajePcElem.textContent = `Computadora: ${puntajePc}`;
}

function verificarGanador(){
    if(puntajeJugador >= puntajeObjetivo){
        alert("Ganaste el juego");
        reiniciarJuego();
    }else if(puntajePc >= puntajeObjetivo){
        alert("Perdiste el juego");
        reiniciarJuego();
    }
}

function reiniciarJuego(){
    puntajeJugador = 0;
    puntajePc = 0;
    actualizarPuntaje();
    seccionBatalla.style.display = 'none';
    msjBatalla.innerHTML = "";
    imgAtaqueJugador.innerHTML = "";
    imgAtaquePc.innerHTML = "";
}

function nAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}

function addImagenes(){
    for(let i = 0; i < imagenes.length; i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
    };

    seccionBatalla.style.display = 'flex';
};

window.addEventListener('load', iniciar);
