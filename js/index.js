function buscarDestino(destino) {
    window.location.href =
        "pages/vuelos.html?destino=" +
        encodeURIComponent(destino);
}

const destinos = [
    { id: 'reloj-colombia', timezone: 'America/Bogota' },
    { id: 'reloj-miami', timezone: 'America/New_York' },
    { id: 'reloj-madrid', timezone: 'Europe/Madrid' },
    { id: 'reloj-paris', timezone: 'Europe/Paris' }
];

// Función de respaldo nativa (por si la API externa falla)
function obtenerHoraNativa(timezone) {
    return new Date().toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: timezone
    });
}

// Función para consultar API externa con timeout de 3 segundos
async function obtenerHoraExterna(timezone) {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // Cancela si tarda más de 3s

        // Usamos TimeAPI.io (más estable y con mejor soporte CORS)
        const respuesta = await fetch(`https://timeapi.io/api/time/current/zone?timeZone=${timezone}`, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!respuesta.ok) throw new Error(`HTTP Error: ${respuesta.status}`);

        const datos = await respuesta.json();
        
        // Formatear hora recibida de la API
        const fecha = new Date();
        fecha.setHours(datos.hour, datos.minute, datos.seconds);

        return fecha.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

    } catch (error) {
        console.warn(`[API Externa falló para ${timezone}] Usando reloj local como respaldo.`);
        // Si la API falla, bloquea o se agota el tiempo, recurre al calculador local
        return obtenerHoraNativa(timezone);
    }
}

async function actualizarRelojes() {
    for (const destino of destinos) {
        const elemento = document.getElementById(destino.id);
        if (elemento) {
            const hora = await obtenerHoraExterna(destino.timezone);
            elemento.textContent = hora;
        }
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    actualizarRelojes();
    
    // Actualiza cada 10 segundos para no saturar la red y mantener sincronizado
    setInterval(actualizarRelojes, 10000); 
});