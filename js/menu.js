//Menu Principal//
$(document).ready(function () {
//variables    url
    var urldeposit ="deposit.html";
    var urlsend ="sendmoney.html";
    var urltrans ="transactions.html";
    var urllogin ="login.html";

//balance Inicial
    var balance = 500000;
//   variables saldo deposito tranferencias
    var balanceDisplay = $('#balance');
    var amountInput = localStorage.getItem('depositAmount');
    var sendMoney = localStorage.getItem('sendMoney');
//funcion actualizar Balance
    function updateBalance() {
        balanceDisplay.text(balance.toFixed(0));
        localStorage.setItem('balance', balance);
    }
    if(amountInput) {
        const amount = parseInt(amountInput);


        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            updateBalance();
            localStorage.setItem('amount', amount.toString());
        }
    }
    if (sendMoney) {
        const envioDinero = parseInt(sendMoney);

        if (!isNaN(envioDinero) && envioDinero <= balance) {
            balance -= envioDinero ;
            updateBalance();
            localStorage.setItem('envioDinero', envioDinero.toString());

        }

    }

    updateBalance();
    localStorage.removeItem('depositAmount');
    localStorage.removeItem('sendMoney');


//botones

$('#btnD').on('click', function () {
    showAlert('success', 'Redirigiendo a Depositos');
    setTimeout(function () {
        window.location.href = urldeposit;
    }, 1000)
    })

$('#btnEn').on('click', function () {
    showAlert('success', 'Redirigiendo a Transferencias');
    setTimeout(function () {
        window.location.href = urlsend;
    }, 1000)

})
$('#btnS').on('click', function () {
    showAlert('success', 'Estas Saliendo de tu Banco Nos Vemos Pronto');
    setTimeout(function () {
        window.location.href = urllogin;
    },1000)
})
$('#btnUm').on('click', function () {
    showAlert('success', 'Redirigiendo a Ultimos Movimientos');
    setTimeout(function () {
        window.location.href = urltrans;
    },1000)
})

});
//alerta
function showAlert(type, message) {

    var alertHtml = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                
</button>
            </div>
        `;

    $('#alert-container').append(alertHtml);
}
