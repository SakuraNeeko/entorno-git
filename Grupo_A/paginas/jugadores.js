// ============================================================
// jugadores.js — Álbum Virtual de Cromos del Mundial 2026
// ============================================================


// ── Estudiante A: Arreglo global que guarda todos los jugadores ──
const cromosMundial = [];


// ── Estudiante A: Función fábrica ──
// Recibe los datos del jugador y devuelve un objeto con la estructura correcta
function crearJugador(id, nombre, pais, posicion, urlImagen, urlBandera, colorFondoHex, goles, partidos, destacado, curiosidad) {
    return {
        id,
        nombre,
        pais,
        posicion,
        urlImagen,
        urlBandera,
        colorFondoHex,
        estadisticas: {
            goles,
            partidos
        },
        destacado,
        curiosidad
    };
}


// ── Estudiante B: Jugadores de los Grupos A y B (IDs 1 al 6) ──
cromosMundial.push(
    crearJugador(
        1, "Lionel Messi", "Argentina", "Delantero",
        "https://ui-avatars.com/api/?name=Lionel+Messi&background=74acdf&color=fff&size=200",
        "🇦🇷", "#74acdf", 106, 187, true,
        "Único jugador en ganar 8 Balones de Oro. Campeón del Mundo en Qatar 2022."
    ),
    crearJugador(
        2, "Julián Álvarez", "Argentina", "Delantero",
        "https://ui-avatars.com/api/?name=Julian+Alvarez&background=2a5298&color=fff&size=200",
        "🇦🇷", "#2a5298", 25, 74, true,
        "Marcó 4 goles en el Mundial 2022. Ganó la Champions League con Manchester City en 2023."
    ),
    crearJugador(
        3, "Moisés Caicedo", "Ecuador", "Mediocampista",
        "https://ui-avatars.com/api/?name=Moises+Caicedo&background=003DA5&color=fff&size=200",
        "🇪🇨", "#003DA5", 5, 65, true,
        "Mediocampista más caro de la historia: fichó por el Chelsea por más de 115 millones de euros."
    ),
    crearJugador(
        4, "Enner Valencia", "Ecuador", "Delantero",
        "https://ui-avatars.com/api/?name=Enner+Valencia&background=FFD100&color=000&size=200",
        "🇪🇨", "#b89600", 40, 93, false,
        "Máximo goleador histórico de Ecuador. Marcó los 3 goles de La Tri en Brasil 2014."
    ),
    crearJugador(
        5, "Pedro Gallese", "Perú", "Portero",
        "https://ui-avatars.com/api/?name=Pedro+Gallese&background=D91023&color=fff&size=200",
        "🇵🇪", "#D91023", 0, 82, false,
        "Uno de los mejores porteros de la historia peruana. Juega en el Orlando City de la MLS."
    ),
    crearJugador(
        6, "Michael Olunga", "Kenia", "Delantero",
        "https://ui-avatars.com/api/?name=Michael+Olunga&background=006600&color=fff&size=200",
        "🇰🇪", "#006600", 32, 74, true,
        "Goleador del Kashiwa Reysol en Japón. Máximo anotador histórico de los Harambee Stars."
    )
);


// ── Estudiante C: Jugadores de los Grupos C y D (IDs 7 al 12) ──
cromosMundial.push(
    crearJugador(
        7, "Kylian Mbappé", "Francia", "Delantero",
        "https://ui-avatars.com/api/?name=Kylian+Mbappe&background=002395&color=fff&size=200",
        "🇫🇷", "#002395", 48, 79, true,
        "Campeón del Mundo con Francia en 2018. Máximo goleador histórico del PSG."
    ),
    crearJugador(
        8, "Antoine Griezmann", "Francia", "Mediocampista",
        "https://ui-avatars.com/api/?name=Antoine+Griezmann&background=ED2939&color=fff&size=200",
        "🇫🇷", "#ED2939", 44, 137, true,
        "MVP de la Copa del Mundo 2018 y tercer máximo goleador de la historia de Francia."
    ),
    crearJugador(
        9, "Lamine Yamal", "España", "Extremo",
        "https://ui-avatars.com/api/?name=Lamine+Yamal&background=AA151B&color=fff&size=200",
        "🇪🇸", "#AA151B", 8, 32, true,
        "El jugador más joven en marcar en una Eurocopa. Debutó en la selección española con 15 años."
    ),
    crearJugador(
        10, "Pedri", "España", "Mediocampista",
        "https://ui-avatars.com/api/?name=Pedri+Gonzalez&background=F1BF00&color=000&size=200",
        "🇪🇸", "#c49a00", 6, 54, false,
        "Ganó el Premio Golden Boy en 2021. Considerado el heredero de Xavi e Iniesta en el Barcelona."
    ),
    crearJugador(
        11, "Vinicius Jr", "Brasil", "Extremo",
        "https://ui-avatars.com/api/?name=Vinicius+Junior&background=009C3B&color=fff&size=200",
        "🇧🇷", "#009C3B", 26, 75, true,
        "Figura del Real Madrid. Marcó el gol de la victoria en la final de la Champions League 2022."
    ),
    crearJugador(
        12, "Erling Haaland", "Noruega", "Delantero",
        "https://ui-avatars.com/api/?name=Erling+Haaland&background=EF2B2D&color=fff&size=200",
        "🇳🇴", "#EF2B2D", 36, 68, true,
        "Rompió el récord de goles en una temporada de la Premier League con 36 goles en 2022-23."
    )
);


// ── Estudiante C: Calcula y muestra los goles acumulados de los jugadores del Grupo C y D ──
function calcularGolesGrupoCD() {
    // .filter() para quedarse solo con los jugadores del Estudiante C (IDs 7 al 12)
    const jugadoresCD = cromosMundial.filter(function(jugador) {
        return jugador.id >= 7 && jugador.id <= 12;
    });

    // .reduce() para sumar todos los goles
    const totalGoles = jugadoresCD.reduce(function(suma, jugador) {
        return suma + jugador.estadisticas.goles;
    }, 0);

    // Muestra el resultado en el HTML
    const elemento = document.getElementById('goles-grupo-cd');
    if (elemento) {
        elemento.textContent = totalGoles + ' goles';
    }
}


// ── Estudiante A: Función principal de renderizado ──
// Recorre el arreglo con .forEach() e inyecta cada tarjeta en el DOM
function renderizarAlbum(jugadores) {
    const contenedor = document.getElementById('album-contenedor');
    contenedor.innerHTML = ''; // Limpia el contenedor antes de renderizar

    // Si no hay jugadores que mostrar, muestra un mensaje
    if (jugadores.length === 0) {
        contenedor.innerHTML = '<p class="sin-resultados">No se encontraron jugadores con ese filtro.</p>';
        return;
    }

    // .forEach() recorre cada jugador y crea su tarjeta
    jugadores.forEach(function(jugador) {

        // Crea el elemento HTML de la tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card-cromo bloqueado'; // empieza bloqueada (Estudiante F)
        tarjeta.dataset.id = jugador.id;

        // Inyecta el HTML interno de la tarjeta
        tarjeta.innerHTML = `
            <div class="cromo-inner" style="background-color: ${jugador.colorFondoHex}">
                <div class="cromo-bandera">${jugador.urlBandera}</div>
                <img
                    class="cromo-foto"
                    src="${jugador.urlImagen}"
                    alt="${jugador.nombre}"
                    onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(jugador.nombre)}&background=333&color=fff&size=200'">
                <div class="cromo-info">
                    <div class="cromo-nombre">${jugador.nombre}</div>
                    <div class="cromo-pais">${jugador.pais}</div>
                    <div class="cromo-posicion">${jugador.posicion}</div>
                    <div class="cromo-stats">
                        <span>⚽ ${jugador.estadisticas.goles} goles</span>
                        <span>🏟️ ${jugador.estadisticas.partidos} partidos</span>
                    </div>
                    <div class="cromo-curiosidad">${jugador.curiosidad}</div>
                </div>
                <div class="bloqueo-overlay">
                    <div class="bloqueo-icono">🔒</div>
                    <button class="btn-desbloquear" onclick="desbloquearCromo(${jugador.id})">
                        Desbloquear Cromo
                    </button>
                </div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });

    actualizarContador(); // Actualiza el contador cada vez que se re-renderiza
}


// ── Estudiante E: Configura los filtros de búsqueda ──
function configurarFiltros() {
    const inputBusqueda = document.getElementById('filtro-nombre');
    const selectPais    = document.getElementById('filtro-pais');

    // Rellena el <select> con los países únicos del arreglo (sin repetir)
    const paises = [...new Set(cromosMundial.map(function(j) { return j.pais; }))].sort();
    paises.forEach(function(pais) {
        const opcion = document.createElement('option');
        opcion.value = pais;
        opcion.textContent = pais;
        selectPais.appendChild(opcion);
    });

    // Escucha el texto escrito en el input
    inputBusqueda.addEventListener('input', aplicarFiltros);

    // Escucha el país seleccionado en el select
    selectPais.addEventListener('change', aplicarFiltros);
}

// Aplica ambos filtros al mismo tiempo y actualiza el álbum
function aplicarFiltros() {
    const texto = document.getElementById('filtro-nombre').value.toLowerCase();
    const pais  = document.getElementById('filtro-pais').value;

    // .filter() filtra los jugadores que coincidan con ambos criterios
    const jugadoresFiltrados = cromosMundial.filter(function(jugador) {
        const coincideNombre = jugador.nombre.toLowerCase().includes(texto);
        const coincidePais   = pais === '' || jugador.pais === pais;
        return coincideNombre && coincidePais;
    });

    renderizarAlbum(jugadoresFiltrados);
}


// ── Estudiante F: Desbloquea el cromo del jugador con el id indicado ──
function desbloquearCromo(id) {
    const tarjeta = document.querySelector('.card-cromo[data-id="' + id + '"]');

    if (tarjeta && tarjeta.classList.contains('bloqueado')) {
        tarjeta.classList.remove('bloqueado');
        tarjeta.classList.add('desbloqueado', 'destello');

        // Quita la clase de animación cuando el destello termina (600ms)
        setTimeout(function() {
            tarjeta.classList.remove('destello');
        }, 600);

        actualizarContador();
    }
}

// Actualiza el contador de cromos desbloqueados en la cabecera
function actualizarContador() {
    const total          = document.querySelectorAll('.card-cromo').length;
    const desbloqueados  = document.querySelectorAll('.card-cromo.desbloqueado').length;
    const porcentaje     = total > 0 ? Math.round((desbloqueados / total) * 100) : 0;

    const contador = document.getElementById('contador-desbloqueados');
    if (contador) {
        contador.textContent = desbloqueados + ' / ' + total + ' cromos desbloqueados (' + porcentaje + '%)';
    }
}


// ── INICIO: Se ejecuta cuando la página termina de cargar completamente ──
document.addEventListener('DOMContentLoaded', function() {
    configurarFiltros();           // Prepara los filtros
    renderizarAlbum(cromosMundial); // Muestra todos los jugadores
    calcularGolesGrupoCD();        // Muestra el contador de goles
});
