function popup() {
    window.alert("Gracias por comunicarte, en brebe te responderé");
}

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector ("#menu");
btnMenu.addEventListener("click",function(){
    menu.classList.toggle("mostrar");
});