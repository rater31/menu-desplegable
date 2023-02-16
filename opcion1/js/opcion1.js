// barras
let barra1=document.querySelector("#barra1");
let barra2=document.querySelector("#barra2");
let barra3=document.querySelector("#barra3");
// menu desplegable
let menuDesplegable=document.querySelector("#menu");


barra2.addEventListener("click", animacion);
barra3.addEventListener("click", animacion);



function animacion(){
    barra1.classList.toggle('barra1');
    barra2.classList.toggle('barra2');
    barra3.classList.toggle('barra3');

    menuDesplegable.classList.add('animacion');
    console.log('Entro ');
}
