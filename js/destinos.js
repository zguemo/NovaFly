function buscarDestino(destino) {
    localStorage.setItem(
        "destinoSeleccionado",
        destino
    );
    window.location.href = "vuelos.html";
}