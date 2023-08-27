let piedra;
let tijera;
let papel;
let nombre;

function saludar(){
 nombre = document.getElementById('nombre').value;
if (nombre == ''){
    alert('Debe Ingresar su nombre');
}else{
 document.getElementById('saludo').innerHTML = 'Hola'+' '+nombre+'.'+' '+'La partida sera al mejor de 5.'+' '+"ELIJE UNA OPCION.";
 piedra.disabled= false;
 tijera.disabled= false;
 papel.disabled = false;
}

}

document.addEventListener ("DOMContentLoaded", function(){
    botonComenzar  = document.getElementById("botoncomienzo");
    botonComenzar.addEventListener('click', saludar, true);
})

document.addEventListener('DOMContentLoaded', function(){
    botonReiniciar = document.getElementById("reinicio");
    botonReiniciar.addEventListener('click', reinicio, true);
})

function reinicio(){
//El objetivo de esta funcion es reiniciar todos los valores a su opcion por defecto.
location.reload();

}
   
let userPoints = 0;
let machinePoints = 0;
let variable;   

const PIEDRA = 0;
const PAPEL =1;
const TIJERA =2;

const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

document.addEventListener ("DOMContentLoaded", function(){
    piedra = document.getElementById("piedrabt");
    piedra.disabled = true;
    piedra.addEventListener('click', ()=>{
        variable = 'piedra';
        play(PIEDRA);
     
    });
})



document.addEventListener ("DOMContentLoaded", function(){
    tijera = document.getElementById("tijerabt");
    tijera.disabled = true;
    tijera.addEventListener('click', ()=>{
        variable = "tijera";
        play(TIJERA);
       
    })
})


document.addEventListener ("DOMContentLoaded", function(){
    papel = document.getElementById("papelbt");
    papel.disabled = true;
    papel.addEventListener('click', ()=>{  
        variable = 'papel';
        play(PAPEL);
    });
})

function play(userOption){
    //La funcion 'play' toma opcion de la computadora, llama a funcion 'calcResultado' que compara las opciones y devuelve el resultado. 
    //Luego muestra en pantalla el resultado final.
    const machineOption = Math.floor(Math.random() * 3);
    const result = calcResultado(userOption, machineOption);

    let variable1;
 
    if (machineOption===0){
        variable1='piedra';
    }else if(machineOption===1){
        variable1='papel';
    }else{
        variable1='tijera';
    }

    


    switch(result){
        case EMPATE:
            document.getElementById('saludo').innerHTML ="Elegiste, "+variable+' y la computadora eligio '+variable1+'. '+ 'EMPATE! Elije nuevamente.';
            break;
        case GANASTE:
            if(userPoints<2){
            document.getElementById('saludo').innerHTML = 'Elegiste, '+variable+' y la computdora eligio '+variable1+'. '+'GANASTE! Elije nuevamente.';
            userPoints += 1;
            }else{  document.getElementById('saludo').innerHTML =  'Elegiste, '+variable+' y la computdora eligio '+variable1+'. '+'GANASTE LA PARTIDA!';
            userPoints += 1;
            papel.disabled = true;
            tijera.disabled = true;
            piedra.disabled = true;
            botonComenzar.disabled = true;
        }
            break;
        case PERDISTE:
            if(machinePoints<2){
            document.getElementById('saludo').innerHTML = 'Elegiste, '+variable+' y la computadora eligio '+variable1+'. '+'PERDISTE! Elije nuevamente.';
            machinePoints += 1;
            }else{ document.getElementById('saludo').innerHTML = 'Elegiste, '+variable+' y la computadora eligio '+variable1+'. '+'LA COMPUTADORA GANA LA PARTIDA!';
            machinePoints += 1;
            papel.disabled = true;
            tijera.disabled = true;
            piedra.disabled = true;
            botonComenzar.disabled = true;
        }
            break;
    }


    document.getElementById('machinePoints').innerHTML = 'Computadora: '+machinePoints;
    document.getElementById('userPoints').innerHTML = 'Usuario: '+userPoints;
}

function calcResultado (userOption, machineOption){

    if(userOption === PIEDRA){
        if (machineOption === PIEDRA) return EMPATE;
        if (machineOption === PAPEL )  return PERDISTE;
        if (machineOption === TIJERA) return GANASTE;
     }else if(userOption === PAPEL){
        if (machineOption === PIEDRA) return GANASTE;
        if (machineOption === PAPEL) return EMPATE;
        if (machineOption === TIJERA) return PERDISTE;
     }else if(userOption === TIJERA){
        if (machineOption === PIEDRA) return PERDISTE;
        if (machineOption === PAPEL) return GANASTE;
        if (machineOption === TIJERA) return EMPATE;
     }
}





