let num=1 ;
let foto;
function adelante() {
    num++;
    if(num>4)
        num=1;
    foto=document.getElementById("foto");
    foto.scr="foto"+num+"playa2.jpg";
    
}
