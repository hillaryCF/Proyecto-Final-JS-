//declaracion de variables//
var actual= 0;
let clear=window.setInterval(siguiente, 15000);

//

// se crea la funcion de mostrar para que los puntos funcionen

function ver(n){
    var img= document.getElementsByClassName("slide","name");
    for(i= 0; i<img.length; i++){
        if(img[i].className.includes("actual")){
            img[i].className = img[i].className.replace("actual", "");
            break;
        }
    }
    actual = n ;
    img[n].className += " actual";
    
    
}
// se crea la funcion siguiente para la flecha "siguiente"
function siguiente(){
    actual++;
    if(actual > 7){
        actual = 0;
    }
    ver(actual);
}
// se crea la funcion anterior para la flecha "anterior"
function anterior(){
    actual--;
    if(actual < 0){
        actual = 7;
    }
    ver(actual);
}
//reporduccion de las imagenes en un determinado timpo que el usuario no intervenga en los botones//

function setinter(){
    clear;
 }
 // se cancela el interval clear, y se ejecuta un nuevo interval
 function cancel(){
    window.clearInterval(clear);
    window.setInterval(siguiente,15000);
 }
 
 //
 //se pone en ejecucion el boton siguiente y anterior para la cancelacin del interval clear
 let cancelButton = document.querySelector('a');
 cancelButton.addEventListener('click', cancel);
 //