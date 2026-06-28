/**
 * jugadores.js — carga fotos de jugadores desde TheSportsDB API (gratuita)
 * Uso: agregar data-player="Nombre Jugador" a cada .player-card
 */

const SPORTSDB = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=';

// Cache para evitar llamadas duplicadas
const photoCache = {};

async function fetchPlayerPhoto(name) {
    if (photoCache[name] !== undefined) return photoCache[name];

    try {
        const res  = await fetch(SPORTSDB + encodeURIComponent(name));
        const data = await res.json();
        const player = data.player?.[0];
        const url = player?.strThumb || player?.strCutout || null;
        photoCache[name] = url;
        return url;
    } catch {
        photoCache[name] = null;
        return null;
    }
}

async function loadAllPlayerPhotos() {
    const cards = document.querySelectorAll('.player-card[data-player]');

    await Promise.all([...cards].map(async (card) => {
        const name    = card.dataset.player;
        const imgEl   = card.querySelector('.player-photo');

        if (!imgEl) return;

        const url = await fetchPlayerPhoto(name);

        if (url) {
            imgEl.src = url;
            imgEl.classList.remove('loading');
            imgEl.alt = name;
        } else {
            // Sin foto: muestra silueta con número
            imgEl.classList.remove('loading');
            imgEl.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'%3E%3Ccircle cx='45' cy='45' r='45' fill='%231e271e'/%3E%3Ccircle cx='45' cy='32' r='14' fill='%236b8a6b'/%3E%3Cellipse cx='45' cy='72' rx='22' ry='16' fill='%236b8a6b'/%3E%3C/svg%3E";
        }
    }));
}

document.addEventListener('DOMContentLoaded', loadAllPlayerPhotos);
