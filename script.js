var actual= 0;


// se crea la funcion de mostrar para que los puntos funcionen

function mostrar(n){
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
    if(actual > 8){
        actual = 0;
    }
    mostrar(actual);
}
// se crea la funcion anterior para la flecha "anterior"
function anterior(){
    actual--;
    if(actual < 0){
        actual = 8;
    }
    mostrar(actual);
}

function  automatic(){
    let velocidad=15000;
   auto= setInterval("siguiente()", 15000);
 }