//carga de documento
$(document).ready(function(){
//revisar alertas
    $('alert-container').empty();
//variables
const urllogin ="login.html"
const urlmenu="menu.html"
const amount = localStorage.getItem("amount");
const envioDinero = localStorage.getItem("envioDinero");

//lista Ficticia
    const listaTransacciones = [
        { fecha: "2025-12-10", tipo: "deposito", descripcion: "Depósito en efectivo", monto: 500.00 },
        { fecha: "2025-12-10", tipo: "compra", descripcion: "Supermercado el 9", monto: -150.75 },
        { fecha: "2025-12-09", tipo: "transferencia_recibida", descripcion: "Pago de Juan Pérez", monto: 200.00 },
        { fecha: "2025-12-08", tipo: "compra", descripcion: "Compra Madame Vandersexxx", monto: -85.50 },
        { fecha: "2025-12-08", tipo: "transferencia_enviada", descripcion: "Pago de servicios Sencillito", monto: -45.00 },
        { fecha: "2025-12-07", tipo: "deposito", descripcion: "Transferencia de otro banco", monto: 100.00 },

    ];
//nuevoa movimientos
    if (envioDinero) {
        listaTransacciones.push({
            fecha: new Date().toISOString().slice(0, 10),
            tipo: "transferencia_enviada",
            descripcion: "Transferencia realizada por usuario",
            monto: -parseFloat(envioDinero)
        });
    }
    if (amount) {
        listaTransacciones.push({
            fecha: new Date().toISOString().slice(0, 10),
            tipo: "deposito",
            descripcion: "Deposito realizada por usuario",
            monto: parseFloat(amount)
        });
    }
//clases transacciones
    function getTipoTransaccion(tipo) {
        const tipos = {
            'compra': 'Compra ',
            'deposito': 'Depósito ',
            'transferencia_recibida': 'Transferencia Recibida ',
            'transferencia_enviada': 'Transferencia Enviada ',
            'todos': 'Todos los Movimientos'
        };
        return tipos[tipo] || tipo;
    }
//actualizar-filtrar
    function mostrarUltimosMovimientos(filtro = 'todos') {
        $('#listaMovimientos').empty();
        let movimientosFiltrados = listaTransacciones;

         if (filtro !== 'todos') {
            movimientosFiltrados = listaTransacciones.filter(transaccion => transaccion.tipo === filtro);
        }

        if (movimientosFiltrados.length === 0) {
            $('#listaMovimientos').append('<li class="list-group-item">No hay movimientos para el filtro seleccionado.</li>');
            return;
        }

        movimientosFiltrados.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

        movimientosFiltrados.forEach(mov => {
            const claseColor = mov.monto < 0 ? 'text-danger' : 'text-success';
            const signo = mov.monto < 0 ? '-' : '+';
            const montoAbsoluto = Math.abs(mov.monto).toFixed(2);
            const tipoLegible = getTipoTransaccion(mov.tipo);

            const listItem = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <small class="text-muted">${mov.fecha}</small>
                    <div class="fw-bold">${tipoLegible}</div>
                    <div>${mov.descripcion}</div>
                </div>
                <span class="fs-5 ${claseColor}">
                    ${signo}$${montoAbsoluto}
                </span>
            </li>
        `;
            $('#listaMovimientos').append(listItem);
        });
    }

    mostrarUltimosMovimientos('todos');

    $('#filtroTipo').on('change', function() {
        const filtroSeleccionado = $(this).val();
        mostrarUltimosMovimientos(filtroSeleccionado);
    });

//botones

$('#btnS').on('click', function() {
    showAlert('custom','Estas Saliendo de tu Banco Nos Vemos Pronto');
    setTimeout(function (){
        window.location.href = urllogin;
    },1000)
})
$('#btnMp').on('click', function() {
    showAlert('custom', 'Redirecionando A Su Menu Principal');
    setTimeout(function () {
        window.location.href = urlmenu;
    }, 1000)
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
