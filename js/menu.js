//Menu Principal//
const urldeposit ="deposit.html"
const urlsend ="sendmoney.html"
const urltrans ="transactions.html"
const urllogin ="login.html"
const btnD = document.querySelector('#btnD');
const btnEn = document.querySelector('#btnEn');
const btnUm = document.querySelector('#btnUm');
const btnS = document.querySelector('#btnS');

//balance//

document.addEventListener('DOMContentLoaded', function(e) {
    e.preventDefault()

    let balance =500000;



    const balanceDisplay = document.getElementById('balance');
    const amountInput = localStorage.getItem('depositAmount');
    console.log(amountInput)
    const sendMoney = localStorage.getItem('sendMoney');
    console.log (sendMoney);

    function updateBalance() {
        balanceDisplay.textContent = balance.toFixed(0);
        console.log(balanceDisplay.textContent)
        localStorage.setItem('balance', balance);
    }
    if(amountInput) {
        console.log(amountInput)

        const amount = parseInt(amountInput);


        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            updateBalance();
            localStorage.setItem('amount', amount.toString());
        }
        }
    if (sendMoney) {
        const envioDinero = parseInt(sendMoney);
        console.log(envioDinero);

        if (!isNaN(envioDinero) && envioDinero <= balance) {
            balance -= envioDinero ;
            updateBalance();
            localStorage.setItem('envioDinero', envioDinero.toString());

        }

    }

      updateBalance();
    localStorage.removeItem('depositAmount');
    localStorage.removeItem('sendMoney');
    });


//botones//
btnD.addEventListener('click', () => {
    alert("Redirigiendo a Depositos");
    window.location.href = urldeposit;
})
btnEn.addEventListener('click', () => {
    alert("Redirigiendo a Enviar Dinero");
    window.location.href = urlsend;
})
btnUm.addEventListener('click', () => {
    alert("Redirigiendo a Ultimos Movimientos");
    window.location.href = urltrans;
})
btnS.addEventListener('click', () => {
    alert("Esperamos Vuelvas Pronto");
    window.location.href = urllogin;
})