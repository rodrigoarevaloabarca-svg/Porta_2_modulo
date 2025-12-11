//carga documento
$(document).ready(function(){
//alertas
    $('alert-container').empty();
//variables
    var urlMEnu = "menu.html";
    var urllogin ="login.html";
    var balance = localStorage.getItem('balance');
    var balanceDisplay = $('#balance');
//mostrar balance
    balanceDisplay.text(balance);

//deposito
$('#form').on('submit',function(evento){
    evento.preventDefault();

    var depositAmount = $('#depositAmount').val().trim();

    if ( depositAmount > 0) {
        localStorage.setItem("depositAmount", depositAmount);
        showAlert('success',`!!Felicitaciones Has Realizado un Deposito de $${depositAmount}`);
        setTimeout(function(){
            window.location.href = urlMEnu;
    },2000)
    }else {
        showAlert('danger','los Montos Deben Ser Positivos')
        setTimeout(function(){
        $form[0].reset();
    },1500)

    }
})

$('#btnS').on('click', function () {
    showAlert('success', 'Estas Saliendo De Tu Banco Nos Vemos Pronto');
    setTimeout(function () {
        window.location.href = urllogin;
    }, 1000)
})
$('#btnMp').on('click', function () {
    showAlert('success', 'Redirecionando A Su Menu Principal');
    setTimeout(function () {
        window.location.href = urlMEnu;
    },1000)

})

});
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


