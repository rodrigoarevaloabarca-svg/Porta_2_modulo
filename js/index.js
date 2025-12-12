$(document).ready(function(){
    $('alert-container').empty();
    var urlLogin = "login.html";



$('#btnS').click(function(){
    showAlert('custom','Felicitaciones Vamos al Login')
    setTimeout(function(){
        window.location.href = urlLogin;
    },1000)

})
})

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