const formularioBusqueda = document.getElementById("formBusqueda");
const parametros = new URLSearchParams(window.location.search);
const destinoSeleccionado = parametros.get("destino");
const origenSeleccionado = parametros.get("origen");
const fechaSeleccionada = parametros.get("fechaIda");

const vuelos = [
    {
        origen: "bogota",
        destino: "cartagena",
        origenNombre: "Bogotá",
        destinoNombre: "Cartagena",
        horaSalida: "08:00 AM",
        horaLlegada: "09:30 AM",
        precio: 249900
    },
    {
        origen: "medellin",
        destino: "san andres",
        origenNombre: "Medellín",
        destinoNombre: "San Andrés",
        horaSalida: "10:40 AM",
        horaLlegada: "12:15 PM",
        precio: 389900
    },

    {
        origen: "bogota",
        destino: "madrid",
        origenNombre: "Bogotá",
        destinoNombre: "Madrid",
        horaSalida: "06:30 PM",
        horaLlegada: "10:20 AM",
        precio: 2499000
    },
    {
        origen: "medellin",
        destino: "madrid",
        origenNombre: "Medellín",
        destinoNombre: "Madrid",
        horaSalida: "08:00 PM",
        horaLlegada: "11:50 AM",
        precio: 2699000
    },

    {
        origen: "bogota",
        destino: "cartagena",
        origenNombre: "Bogotá",
        destinoNombre: "Cartagena",
        horaSalida: "06:30 AM",
        horaLlegada: "08:00 AM",
        precio: 249900
    },
    {
        origen: "bogota",
        destino: "miami",
        origenNombre: "Bogotá",
        destinoNombre: "Miami",
        horaSalida: "09:15 AM",
        horaLlegada: "02:10 PM",
        precio: 1299000
    },
    {
        origen: "medellin",
        destino: "cartagena",
        origenNombre: "Medellín",
        destinoNombre: "Cartagena",
        horaSalida: "11:00 AM",
        horaLlegada: "12:15 PM",
        precio: 289000
    },
    {
        origen: "bogota",
        destino: "madrid",
        origenNombre: "Bogotá",
        destinoNombre: "Madrid",
        horaSalida: "06:45 PM",
        horaLlegada: "10:30 AM",
        precio: 2499000
    },
    {
        origen: "bogota",
        destino: "paris",
        origenNombre: "Bogotá",
        destinoNombre: "París",
        horaSalida: "05:20 PM",
        horaLlegada: "09:40 AM",
        precio: 3299000
    },
    {
        origen: "cartagena",
        destino: "bogota",
        origenNombre: "Cartagena",
        destinoNombre: "Bogotá",
        horaSalida: "04:15 PM",
        horaLlegada: "05:40 PM",
        precio: 219900
    },
    {
        origen: "cali",
        destino: "miami",
        origenNombre: "Cali",
        destinoNombre: "Miami",
        horaSalida: "07:00 AM",
        horaLlegada: "12:00 PM",
        precio: 1350000
    },
    {
        origen: "barranquilla",
        destino: "bogota",
        origenNombre: "Barranquilla",
        destinoNombre: "Bogotá",
        horaSalida: "08:30 AM",
        horaLlegada: "10:00 AM",
        precio: 220000
    },
    {
        origen: "medellin",
        destino: "cancun",
        origenNombre: "Medellín",
        destinoNombre: "Cancún",
        horaSalida: "10:30 AM",
        horaLlegada: "02:15 PM",
        precio: 1150000
    },
    {
        origen: "bogota",
        destino: "buenosaires",
        origenNombre: "Bogotá",
        destinoNombre: "Buenos Aires",
        horaSalida: "09:00 PM",
        horaLlegada: "05:30 AM",
        precio: 1890000
    },
    {
        origen: "medellin",
        destino: "miami",
        origenNombre: "Medellín",
        destinoNombre: "Miami",
        horaSalida: "02:00 PM",
        horaLlegada: "06:45 PM",
        precio: 1320000
    },
    {
        origen: "bogota",
        destino: "sanandres",
        origenNombre: "Bogotá",
        destinoNombre: "San Andrés",
        horaSalida: "07:45 AM",
        horaLlegada: "09:55 AM",
        precio: 380000
    },

    {
        origen: "bogota",
        destino: "santamarta",
        origenNombre: "Bogotá",
        destinoNombre: "Santa Marta",
        horaSalida: "05:50 AM",
        horaLlegada: "07:20 AM",
        precio: 215000
    },
    {
        origen: "medellin",
        destino: "orlando",
        origenNombre: "Medellín",
        destinoNombre: "Orlando",
        horaSalida: "10:15 AM",
        horaLlegada: "03:10 PM",
        precio: 1450000
    },
    {
        origen: "cartagena",
        destino: "miami",
        origenNombre: "Cartagena",
        destinoNombre: "Miami",
        horaSalida: "01:30 PM",
        horaLlegada: "05:25 PM",
        precio: 1180000
    },
    {
        origen: "cali",
        destino: "bogota",
        origenNombre: "Cali",
        destinoNombre: "Bogotá",
        horaSalida: "06:00 AM",
        horaLlegada: "07:05 AM",
        precio: 195000
    },
    {
        origen: "bogota",
        destino: "nuevayork",
        origenNombre: "Bogotá",
        destinoNombre: "Nueva York",
        horaSalida: "11:20 PM",
        horaLlegada: "06:05 AM",
        precio: 1980000
    },
    {
        origen: "barranquilla",
        destino: "medellin",
        origenNombre: "Barranquilla",
        destinoNombre: "Medellín",
        horaSalida: "02:45 PM",
        horaLlegada: "03:50 PM",
        precio: 230000
    },
    {
        origen: "pereira",
        destino: "bogota",
        origenNombre: "Pereira",
        destinoNombre: "Bogotá",
        horaSalida: "09:10 AM",
        horaLlegada: "10:05 AM",
        precio: 185000
    },
    {
        origen: "bogota",
        destino: "lima",
        origenNombre: "Bogotá",
        destinoNombre: "Lima",
        horaSalida: "03:15 PM",
        horaLlegada: "06:20 PM",
        precio: 920000
    },
    {
        origen: "medellin",
        destino: "bogota",
        origenNombre: "Medellín",
        destinoNombre: "Bogotá",
        horaSalida: "07:00 PM",
        horaLlegada: "08:00 PM",
        precio: 190000
    },
    {
        origen: "bogota",
        destino: "santiago",
        origenNombre: "Bogotá",
        destinoNombre: "Santiago de Chile",
        horaSalida: "10:00 PM",
        horaLlegada: "05:40 AM",
        precio: 1650000
    },
    {
        origen: "cali",
        destino: "cartagena",
        origenNombre: "Cali",
        destinoNombre: "Cartagena",
        horaSalida: "08:10 AM",
        horaLlegada: "09:40 AM",
        precio: 275000
    },
    {
        origen: "bogota",
        destino: "londres",
        origenNombre: "Bogotá",
        destinoNombre: "Londres",
        horaSalida: "08:30 PM",
        horaLlegada: "01:15 PM",
        precio: 3850000
    }

];

function normalizar(texto) {
    return texto
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

formularioBusqueda.addEventListener("submit", function (e) {
    e.preventDefault();
    const origen = normalizar(
        document.getElementById("origen").value
    );
    const destino = normalizar(
        document.getElementById("destino").value
    );
    const fecha = document.getElementById("fecha").value;
    const pasajeros = Number(
        document.getElementById("pasajeros").value
    );
    const resultados = vuelos.filter(function (vuelo) {

        return vuelo.origen === origen &&
               vuelo.destino === destino;
    });

    mostrarResultados(
        resultados,
        fecha,
        pasajeros
    );

});

function mostrarResultados(
    resultados,
    fecha,
    pasajeros
) {

    const contenedor =
        document.getElementById("resultadosVuelos");
    contenedor.innerHTML = "";
    if (resultados.length === 0) {
        contenedor.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning text-center">
                    <i class="bi bi-exclamation-circle"></i>
                    <strong>
                        No encontramos vuelos
                    </strong>
                    <p class="mb-0">
                        No hay vuelos disponibles
                        para la ruta seleccionada.
                    </p>
                </div>
            </div>
        `;
        return;
    }
    resultados.forEach(function (vuelo) {
        const precioTotal =
            vuelo.precio * pasajeros;
        contenedor.innerHTML += `
            <div class="col-md-6">
                <div class="card shadow-sm border-0 h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div>
                                <h5>
                                    ${vuelo.origenNombre}
                                    <i class="bi bi-arrow-right"></i>
                                    ${vuelo.destinoNombre}
                                </h5>
                                <p class="text-muted mb-1">
                                    ${vuelo.horaSalida}
                                    -
                                    ${vuelo.horaLlegada}
                                </p>
                                <small class="text-muted">
                                    ${pasajeros}
                                    pasajero(s)
                                </small>
                            </div>
                            <div class="text-end">
                                <h4 class="text-primary">
                                    $${precioTotal.toLocaleString("es-CO")}
                                </h4>
                            </div>
                        </div>
                        <button
                            type="button"
                            class="btn btn-primary mt-3"
                            onclick="reservarVuelo(
                                '${vuelo.origenNombre}',
                                '${vuelo.destinoNombre}',
                                '${fecha}',
                                '${vuelo.horaSalida}',
                                ${precioTotal}
                            )">
                            Reservar
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}
function reservarVuelo(
    origen,
    destino,
    fecha,
    hora,
    precio
) {

    const vueloSeleccionado = {
        origen: origen,
        destino: destino,
        fecha: fecha,
        hora: hora,
        precio: precio
    };

    localStorage.setItem(
     "vueloSeleccionado",
    JSON.stringify(vueloSeleccionado)
    );
    window.location.href = "reserva.html";
}

if (origenSeleccionado && destinoSeleccionado) {
    const origen = normalizar(origenSeleccionado);
    const destino = normalizar(destinoSeleccionado);

    const resultados = vuelos.filter(function (vuelo) {
        return vuelo.origen === origen &&
               vuelo.destino === destino;
    });
    mostrarResultados(
        resultados,
        fechaSeleccionada || "",
        1
    );
} else if (destinoSeleccionado) {
    const destino = normalizar(destinoSeleccionado);
    const resultados = vuelos.filter(function (vuelo) {
        return vuelo.destino === destino;
    });
    mostrarResultados(
        resultados,
        "",
        1
    );
} else {
    mostrarResultados(vuelos, "", 1);
}


const destinoGuardado =
    localStorage.getItem("destinoSeleccionado");

if (destinoGuardado) {
    const destinoNormalizado =
        normalizar(destinoGuardado);
    document.getElementById("destino").value =
        destinoGuardado;
    localStorage.removeItem(
        "destinoSeleccionado"
    );
}

