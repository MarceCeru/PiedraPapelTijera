###JUEGO: PIEDRA PAPEL TIJERA
---
###AUTOR: Marcelo Cerutti
---
###HERRAMIENTAS USADAS:
###*HTML,
###*CSS,
###*JAVA SCRIPT,
---
###ALGORITMO PRINCIPAL
...

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

###CASOS DE TEST
---

*Etrada NOMBRE=" ",
SOLUCION..

DESHABILITAR BOTONES DE OPCIONES Y DE COMENZAR..

...

if (nombre == ''){
    alert('Debe Ingresar su nombre');
}else{
        document.getElementById('saludo').innerHTML = 'Hola'+' '+nombre+'.'+' '+'La partida sera al mejor de 5.'+' '+"ELIJE UNA OPCION."}


*SEGUIR JUGANDO CUANDO LA PARTIDA FINALIZO..,
SOLUCION..

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









