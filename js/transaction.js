//botones
const urllogin ="login.html"
const urlmenu="menu.html"
const btnS = document.querySelector('#btnS');
const btnMp = document.querySelector('#btnMp');
const amount = localStorage.getItem("amount");
console.log(amount);
const envioDinero = localStorage.getItem("envioDinero");
console.log(envioDinero);


document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
function agregarElemento() {

    const lista = document.getElementById("listaMovimientos");

    if (!lista) {
        console.error("No se encontró el elemento con id='miLista'.");
        return;
    }

    const nuevoLi = document.createElement("li");
    const nuevoContenido = document.createTextNode(`Deposito ${amount}`);

    nuevoLi.appendChild(nuevoContenido);

    lista.appendChild(nuevoLi);
}
if (amount > 0){
    agregarElemento();
}
})
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    function agregarElemento() {

        const lista = document.getElementById("listaMovimientos");

        if (!lista) {
            console.error("No se encontró el elemento con id='miLista'.");
            return;
        }

        const nuevoLi = document.createElement("li");
        const nuevoContenido = document.createTextNode(`Retiro ${envioDinero}`);

        nuevoLi.appendChild(nuevoContenido);

        lista.appendChild(nuevoLi);
    }
    if (envioDinero > 0){
        agregarElemento();
    }
})


//botone
btnS.addEventListener('click', () => {
    alert("Esperamos Vuelvas Pronto");
    window.location.href = urllogin;
})
btnMp.addEventListener('click', () => {
    alert("Redirigiendo a Menu Principal");
    window.location.href= urlmenu;
})