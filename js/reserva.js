const formulario = document.getElementById("formReserva");
const mensaje = document.getElementById("mensaje");
const vueloGuardado = localStorage.getItem("vueloSeleccionado");
let vuelo = null;
if (vueloGuardado) {
    vuelo = JSON.parse(vueloGuardado);
    document.getElementById("rutaVuelo").textContent =
        vuelo.origen + " → " + vuelo.destino;
    document.getElementById("fechaVuelo").textContent =
        vuelo.fecha;
    document.getElementById("horaVuelo").textContent =
        vuelo.hora;
    document.getElementById("precioVuelo").textContent =
        "$" + Number(vuelo.precio).toLocaleString("es-CO");
} else {
    document.getElementById("rutaVuelo").textContent =
        "No se ha seleccionado un vuelo";
    document.getElementById("fechaVuelo").textContent =
        "-";
    document.getElementById("horaVuelo").textContent =
        "-";
    document.getElementById("precioVuelo").textContent =
        "$0";
}
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const reserva = {
        id: Date.now(),
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        documento: document.getElementById("documento").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        ruta: vuelo
            ? vuelo.origen + " → " + vuelo.destino
            : "",
        fecha: vuelo
            ? vuelo.fecha
            : "",
        hora: vuelo
            ? vuelo.hora
            : "",
        precio: vuelo
            ? "$" + Number(vuelo.precio).toLocaleString("es-CO")
            : "$0"
    };
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(reserva);
    localStorage.setItem( "reservas", JSON.stringify(reservas));

    mensaje.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>¡Reserva realizada con éxito!</strong>
            Tu reserva ha sido guardada.
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert">
            </button>
        </div>
    `;
formulario.reset();
localStorage.removeItem("vueloSeleccionado");
document.getElementById("nombre").focus();
setTimeout(() => {
    mensaje.innerHTML = "";
}, 10000);
});