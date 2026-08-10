const tabla = document.getElementById("tablaReservas");
let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
mostrarReservas();
function mostrarReservas() {
    tabla.innerHTML = "";
    if (reservas.length === 0) {
        tabla.innerHTML = `
            <tr>
                <td colspan="7" class="text-center py-4">
                    No tienes reservas registradas.
                </td>
            </tr>
        `;
        return;
    }
    reservas.forEach((reserva, index) => {
        tabla.innerHTML += `
            <tr>
                <td>
                    ${reserva.nombre} ${reserva.apellido}
                </td>
                <td>
                    ${reserva.documento}
                </td>
                <td>
                    ${reserva.ruta}
                </td>
                <td>
                    ${reserva.fecha}
                </td>
                <td>
                    ${reserva.hora || "—"}
                </td>
                <td>
                    ${reserva.precio}
                </td>
                <td>
                    <div class="d-flex gap-2">
                        <button
                            class="btn btn-warning btn-sm"
                            onclick="editarReserva(${index})">
                            <i class="bi bi-pencil"></i>
                            Editar
                        </button>
                        <button
                            class="btn btn-danger btn-sm"
                            onclick="eliminarReserva(${index})">
                            <i class="bi bi-trash"></i> Eliminar
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
}
function eliminarReserva(index) {
    reservas.splice(index, 1);
    localStorage.setItem(
        "reservas",JSON.stringify(reservas)
    );
    mostrarReservas();
}
function editarReserva(index) {
    const reserva = reservas[index];
    document.getElementById("editarId").value = index;
    document.getElementById("editarNombre").value = reserva.nombre;
    document.getElementById("editarApellido").value = reserva.apellido;
    document.getElementById("editarDocumento").value = reserva.documento;
    document.getElementById("editarTelefono").value = reserva.telefono;
    document.getElementById("editarCorreo").value = reserva.correo;
    const modal = new bootstrap.Modal( document.getElementById("modalEditar")
    );

    modal.show();

}
const formEditar = document.getElementById("formEditar");
formEditar.addEventListener("submit", function (e) {

    e.preventDefault();
    const index = document.getElementById("editarId").value;
    reservas[index].nombre =
        document.getElementById("editarNombre").value;
    reservas[index].apellido =
        document.getElementById("editarApellido").value;
    reservas[index].documento =
        document.getElementById("editarDocumento").value;
    reservas[index].telefono =
        document.getElementById("editarTelefono").value;
    reservas[index].correo =
        document.getElementById("editarCorreo").value;
    localStorage.setItem(  "reservas", JSON.stringify(reservas)
    );
    mostrarReservas();
    const modal = bootstrap.Modal.getInstance(
        document.getElementById("modalEditar")
    );
    modal.hide();
});