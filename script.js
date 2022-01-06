
let audio1 = document.getElementById("audio");
//

function mudarAudio()
{

let NDM = document.getElementById("NDM");

if( NDM.value != ""){
    nomeDamusica.innerHTML = NDM.value;
}

    audio1.setAttribute("src",url1.value);
}


// chamadas para mudar o nome e pegar a url do input
let audioo = document.getElementById("audio-container");

let url1 = document.getElementById("url1");
let nomeDamusica = document.getElementById("nomeDaMusica");


// para mudar o nome do audio e adicionar musica por url






// let aumentarSom= document.getElementById("aumentarSom");
    
// let diminuirSom= document.getElementById("diminuir-som");




// funcao para mudar o html da velocidade e cálculos


let aumentarVel = document.getElementById("aumentar-vel");

let diminuirVel = document.getElementById("diminuir-vel");

let kk = 1;
let vel = document.getElementById("vel");


aumentarVel.addEventListener("click",function(){
    kk += 0.1;
    if( kk == 1){
        vel.innerHTML = `01`;
    }else{
vel.innerHTML = `${kk}`;
}
});


diminuirVel.addEventListener("click",function(){
    kk -= 0.1;
    if( kk == 1){
        vel.innerHTML = `01`;
    }else{
        vel.innerHTML = `${kk}`;
    if(kk < 0){
        vel.innerHTML = "0.1";
    }
    }
});



// --------------- funcao para mudar a minutagem e seus cálculos

let minutagem = document.getElementById("num");

setInterval(function(){

    let y;

    let z;

if( audio1.currentTime < 60){

    y = 0;

}

if(audio1.currentTime >= 60){
y = Math.floor(audio1.currentTime/60)


}

z = Math.floor(audio1.currentTime%60);

if(y < 10 && z < 10){minutagem.innerHTML = `0${y}:0${z}`}
if(y < 10 && z >= 10){minutagem.innerHTML = `0${y}:${z}`}
if(y > 10 && z < 10){minutagem.innerHTML = `${y}:0${z}`}
if(y > 10 && z > 10){minutagem.innerHTML = `${y}:${z}`}

},200);








// -------------------------------------------chamada para o  IR para


// let irPara = document.getElementById("pular-para");
 
let segundos = document.getElementById("second");
let minutos = document.getElementById("minute");

// let purlarFinal = document.getElementById("pular-para-final")

// let pular5s =document.getElementById("pular5s");

// let recuar5s = document.getElementById("recuar5s");

// let reproduzir = document.getElementById("reproduzir");

// let pausar = document.getElementById("pausar");
// funcoes




// funcoes básicas desde aumentar o volume até dar o play
 

function aumentar_Som(){
   audio1.volume += .1 ;
}
function diminuir_Som(){
    audio1.volume -= .1 ;
 }

 function diminuir_vel(){
    audio1.playbackRate -= .1 ;
 }

 function aumentar_vel(){
    audio1.playbackRate += .1 ;
 }


 // Ir para
 function IrPara(){
    audio1.currentTime = (minutos.value * 60) + Bas();
 }

 function Bas(){
        return parseInt(segundos.value) ;
 }

// final do ir para

function PPinicio(){
    audio1.currentTime = 0;
}

function avancar5s (){

    audio1.currentTime += 5;

}

function recuar5s (){

    audio1.currentTime -= 5;

}
function tocar(){

    audio1.play();

}

function pausar(){

    audio1.pause();

}




// funçoes para definir Intervalo


// chamando as variáveis
let pontA = document.getElementById("pontoA");
let pontB = document.getElementById("pontoB");

let ponta = document.getElementById("pontoa");
let pontb = document.getElementById("pontob");

var Aa;



// para definir o ponto a


pontA.addEventListener("click",function (){
Aa = audio1.currentTime;
pontA.style.backgroundColor ="orange";
if(Aa < 10){
    ponta.value = `00:0${Math.floor(Aa)}`
}
else if( Aa >= 10 && Aa < 60){
    ponta.value = `00:${Math.floor(Aa)}`
}
else{
    if(Math.floor(Aa%60) > 10 ||  Math.floor(Aa)/60 > 10){
        ponta.value = `0${Math.floor(Math.floor(Aa)/60)}:${Math.floor(Aa%60)}`
    }else{
ponta.value = `0${Math.floor(Math.floor(Aa)/60)}:0${Math.floor(Aa%60)}`
}}
})


// para definir o pont b

var Bb ;


pontB.addEventListener("click",function xe(){
     Bb = audio1.currentTime;
    if( Bb <= Aa  ){

        return console.log("toma no cu")
    }else{
pontB.style.backgroundColor ="orange";
if(Bb < 10){
    pontb.value = `00:0${Math.floor(Bb)}`
}
else if( Bb >= 10 && Bb< 60){
    pontb.value = `00:${Math.floor(Bb)}`
}
else{
   if(Math.floor(Bb%60) > 10 ||  Math.floor(Bb)/60 > 10){
                        pontb.value = `0${Math.floor(Math.floor(Bb)/60)}:${Math.floor(Bb%60)}` }else{
pontb.value = `0${Math.floor(Math.floor(Bb)/60)}:0${Math.floor(Bb%60)}`
}
}
}
definidoIntervalo();
});


// para voltar ao ponto a sempre que chegar no ponto b
var binterval;
function definidoIntervalo()
{
console.log(1);
binterval = setInterval(function(){
if(
audio1.currentTime >= Bb
){
audio1.currentTime = Aa;
}
}, 200)
}


// Para limpar o intervalo
function limparkk(){

clearInterval(binterval);


let aaa = document.getElementById("pontoa");
let bbb = document.getElementById("pontob");
aaa.value = "início";
bbb.value = "final";
pontB.style.backgroundColor ="#f0f8ff";
pontA.style.backgroundColor ="#f0f8ff";
}






