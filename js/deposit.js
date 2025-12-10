//deposit
const urllogin ="login.html"
const urelmenu="menu.html"
const btnS = document.querySelector('#btnS');
const btnMp = document.querySelector('#btnMp');
const form=document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const depositAmount = document.getElementById("depositAmount").value;
    console.log(depositAmount);

   if ( depositAmount > 0) {
       localStorage.setItem("depositAmount", depositAmount);
       alert(`---Vas a Depositar ${depositAmount} Pesos a tu cuenta el deposito se vera 
    reflejado en el menu principal---`)
       window.location.href = urelmenu;
       return;
   }else {
       alert("los montos deben ser positivos")

   }
})
//botones
btnS.addEventListener('click', e => {
    alert("Esperamos Vuelvas Pronto");
    window.location.href = urllogin;
})
btnMp.addEventListener('click', e => {
    alert("Redirigiendo a Menu Principal");
    window.location.href= urelmenu;
})

