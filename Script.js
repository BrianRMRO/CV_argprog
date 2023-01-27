function popup() {
    window.alert("Gracias por comunicarte, en brebe te responderé");
}

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector ("#menu");
btnMenu.addEventListener("click",function(){
    menu.classList.toggle("mostrar");
});


function escribirEnPantalla(texto){
    let arr=texto.split("");
    i=0;
   let intervalo= setInterval(function(){
      if(i==arr.length-1){ 
        document.getElementById("cabecera").innerHTML+=arr[i];
        clearInterval(intervalo);} 
      else {
      if(arr[i]==" "){
       document.getElementById("cabecera").innerHTML+=arr[i];
       document.getElementById("cabecera").innerHTML+=arr[i+1];
        i+=2;
      }else{
      document.getElementById("cabecera").innerHTML+=arr[i];
      i++;
        }
      }
    },150); 
  }
  
  escribirEnPantalla("Pablo Vasquez, desarrollador web");