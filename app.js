let botones=document.querySelectorAll('.expandirInfo');
let textos_expan=document.querySelectorAll('.textoExpandible');

botones.forEach((elemento, clave)=>{
    elemento.addEventListener('click',()=>{
        console.log("hola")
        textos_expan[clave].classList.toggle("abrir_cerrar")
    })
});