// Datos simulados
const equipos = {
    "América": { victorias: 12, empates: 3, derrotas: 2, goles: 28 },
    "Chivas": { victorias: 8, empates: 6, derrotas: 3, goles: 20 },
    "Tigres": { victorias: 10, empates: 5, derrotas: 2, goles: 25 }
};

// Historial de predicciones (simulado)
const historial = [
    { partido: "América vs Chivas", prediccion: "Gana América" },
    { partido: "Tigres vs América", prediccion: "Empate" },
    { partido: "Chivas vs Tigres", prediccion: "Gana Tigres" }
];

// Función para mostrar estadísticas
function mostrarEstadisticas() {
    const contenedor = document.getElementById("estadisticas");
    contenedor.innerHTML = "";
    for (let equipo in equipos) {
        const stats = equipos[equipo];
        contenedor.innerHTML += `
            <div class="card">
                <h3>${equipo}</h3>
                <p>Victorias: ${stats.victorias}</p>
                <p>Empates: ${stats.empates}</p>
                <p>Derrotas: ${stats.derrotas}</p>
                <p>Goles: ${stats.goles}</p>
            </div>`;
    }
}

// Función para mostrar historial de predicciones
function mostrarHistorial() {
    const contenedor = document.getElementById("historial");
    contenedor.innerHTML = "";
    historial.forEach(p => {
        contenedor.innerHTML += `
            <div class="card">
                <p><strong>${p.partido}</strong></p>
                <p>Predicción: ${p.prediccion}</p>
            </div>`;
    });
}

// Ejecutar al cargar la página
window.onload = function() {
    mostrarEstadisticas();
    mostrarHistorial();
};
