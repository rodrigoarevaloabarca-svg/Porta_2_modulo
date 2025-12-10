//botones
const urllogin ="login.html"
const urlmenu="menu.html"
const btnS = document.querySelector('#btnS');
const btnMp = document.querySelector('#btnMp');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const sendMoney = document.getElementById("sendMoney").value;
    const balance = localStorage.getItem('balance');

    if ( sendMoney >= 0 && sendMoney <= balance) {
        alert(`Envio Exitoso enviaras ${sendMoney} a ,Redirigido al Menu Principal`)
        window.location.href = urlmenu;
        localStorage.setItem("sendMoney",sendMoney);



    }else {
            alert ('El monto no es valido o no tienes saldo suficiente')
        }

})

const searchInput = document.getElementById('searchInput');
const contactList = document.getElementById('contactList');
const contactItems = contactList.getElementsByTagName('li');
const selectedContactInfo = document.getElementById('selectedContactInfo');

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
        selectedContactInfo.classList.add('alert-success');

    }
});
//botone
btnS.addEventListener('click', () => {
    alert("Esperamos Vuelvas Pronto");
    window.location.href = urllogin;
})
btnMp.addEventListener('click', () => {
    alert("Redirigiendo a Menu Principal");
    window.location.href= urlmenu;
})