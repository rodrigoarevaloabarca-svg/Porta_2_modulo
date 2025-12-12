//carga del documento
    $(document).ready(function () {
//revisar alertas
        $('alert-container').empty();
//variables
    var $form = $('#form');
    var urlMEnu = "menu.html";
//captura datos
$form.on('submit', function (evento) {
    evento.preventDefault();
    $('alert-container').empty();

    var email = $form.find('#email').val().trim();
    console.log(email);
    var password = $form.find('#password').val().trim();
    console.log(password);

//validacion-alerta-redireccion-reseteoCampos

    if (email === 'sence@gmail.com' && password === 'sence') {
        showAlert('custom','!!Inicio de sesión exitoso!! Redirecionando a Su Menu Principal');
        setTimeout(function () {
            window.location.href = urlMEnu;
        },1000)

        $form[0].reset();

    } else {
        showAlert('danger','Credenciales incorrectas. Por favor intenta nuevamente.');
        $form[0].reset();

    }
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
