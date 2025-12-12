//cargar documento
$(document).ready(function () {
//revisar alertas
    $('alert-container').empty();

//variables
const urllogin ="login.html"
const urlmenu="menu.html"
const form = document.querySelector('#form');
//ver Saldo de la Cuenta
var balance = localStorage.getItem('balance');
var balanceDisplay = $('#balance');

    balanceDisplay.text(balance);
//validacion-Traferencia-guardado
form.addEventListener('submit', (e) => {
    e.preventDefault();
//variables de otros document
    const sendMoney = document.getElementById("sendMoney").value;
    const balance = localStorage.getItem('balance');

    if ( sendMoney >= 0 && sendMoney <= balance) {
       showAlert('custom', `Envio Exitoso enviaras $${sendMoney} a ,Redirigido al Menu Principal`);
       setTimeout(function (){
              window.location.href = urlmenu;
    },1000)
    localStorage.setItem("sendMoney",sendMoney);
    }else {
            showAlert('danger','El monto no es valido o no tienes saldo suficiente')
        }

})
//contactos
const searchInput = document.getElementById('searchInput');
const contactList = document.getElementById('contactList');
const contactItems = contactList.getElementsByTagName('li');
const selectedContactInfo = document.getElementById('selectedContactInfo');
const envioSection = document.getElementById('envioSection');
searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();

    for (let i = 0; i < contactItems.length; i++) {
        const item = contactItems[i];
        const textValue = item.textContent || item.innerText;

        if (textValue.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
});
//Añadir contactos-modificar li y cerrar
    const formAgregarContactos = document.getElementById('formAgregarContactos');
    const datosBancariosModal = new bootstrap.Modal(document.getElementById('datosBancariosModal'));

    formAgregarContactos.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombreNuevo').value.trim();
        const rut = document.getElementById('rutNuevo').value.trim();
        const alias = document.getElementById('aliasNuevo').value.trim();
        const banco = document.getElementById('bancoNuevo').value.trim();
        const nuevoContactoLi = document.createElement('li');

        nuevoContactoLi.className = 'list-group-item';
        nuevoContactoLi.dataset.rut = rut;
        nuevoContactoLi.dataset.alias = alias;
        nuevoContactoLi.dataset.banco = banco;

        nuevoContactoLi.innerHTML = `
        <div class="contact-info">
          <span class="contact-name fw-bold">${nombre}</span>
          <span class="contact-details">RUT: ${rut}, Alias: ${alias}, Banco: ${banco}</span>
        </div>
    `;
        contactList.appendChild(nuevoContactoLi);
        showAlert('custom', `El contacto **${nombre}** ha sido agregado con éxito.`);
        datosBancariosModal.hide();
        formAgregarContactos.reset();
    });
//selecionar Contacto
contactList.addEventListener('click', function(event) {
    let selectedItem = event.target.closest('li.list-group-item');

    if (selectedItem) {
        for (let i = 0; i < contactItems.length; i++) {
            contactItems[i].classList.remove('selected');
        }

        selectedItem.classList.add('selected');

        const name = selectedItem.querySelector('.contact-name').textContent;
        const rut = selectedItem.dataset.rut;
        const alias = selectedItem.dataset.alias;
        const banco = selectedItem.dataset.banco;

        selectedContactInfo.innerHTML = `
            <strong>Nombre:</strong> ${name}<br>
            <strong>RUT:</strong> ${rut}<br>
            <strong>Alias:</strong> ${alias}<br>
            <strong>Banco:</strong> ${banco}
        `;
        selectedContactInfo.classList.remove('alert-info');
        selectedContactInfo.classList.add('alert-custom');
        envioSection.classList.remove('d-none');

    }

});

//botone

$('#btnS').on('click', function() {
   showAlert('custom','Estas Saliendo de tu Banco Nos Vemos Pronto');
   setTimeout(function (){
       window.location.href = urllogin;
   },1000)
})
$('#btnMp').on('click', function() {
    showAlert('custom', 'Redirecionando A Su Menu Principal');
    setTimeout(function (){
        window.location.href = urlmenu;
    },1000)
})

})
//Alerta
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