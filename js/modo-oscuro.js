const btnModoOscuro = document.getElementById("btnModoOscuro");

if (btnModoOscuro) {

    btnModoOscuro.addEventListener("click", function () {

        document.body.classList.toggle("modo-oscuro");

        if (document.body.classList.contains("modo-oscuro")) {
            localStorage.setItem("modoOscuro", "activado");
            btnModoOscuro.innerHTML =
                '<i class="bi bi-sun"></i> Modo claro';
        } else {
            localStorage.setItem("modoOscuro", "desactivado");
            btnModoOscuro.innerHTML =
                '<i class="bi bi-moon"></i> Modo oscuro';
        }

    });

    if (localStorage.getItem("modoOscuro") === "activado") {
        document.body.classList.add("modo-oscuro");
        btnModoOscuro.innerHTML =
            '<i class="bi bi-sun"></i> Modo claro';
    }

}