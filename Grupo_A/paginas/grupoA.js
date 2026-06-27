const DATA = {
    teams: [
        {
            name: 'Ecuador',
            flag: '🇪🇨',
            conf: 'CONMEBOL',
            mundiales: 4,
            ranking: 42,
            mejorResultado: 'Cuartos (2006)'
        },
        {
            name: 'Argentina',
            flag: '🇦🇷',
            conf: 'CONMEBOL',
            mundiales: 18,
            ranking: 1,
            mejorResultado: 'Campeón (1978, 1986, 2022)'
        },
        {
            name: 'Perú',
            flag: '🇵🇪',
            conf: 'CONMEBOL',
            mundiales: 9,
            ranking: 24,
            mejorResultado: 'Cuartos (1970)'
        },
        {
            name: 'Kenia',
            flag: '🇰🇪',
            conf: 'CAF',
            mundiales: 1,
            ranking: 103,
            mejorResultado: 'Primera fase (2026)'
        }
    ],
    standings: [
        { pos: 1, team: '🇦🇷 Argentina', pj: 3, g: 3, e: 0, p: 0, gf: 8, gc: 2, pts: 9 },
        { pos: 2, team: '🇪🇨 Ecuador',   pj: 3, g: 1, e: 1, p: 1, gf: 4, gc: 4, pts: 4 },
        { pos: 3, team: '🇵🇪 Perú',      pj: 3, g: 1, e: 0, p: 2, gf: 3, gc: 6, pts: 3 },
        { pos: 4, team: '🇰🇪 Kenia',     pj: 3, g: 0, e: 1, p: 2, gf: 2, gc: 5, pts: 1 }
    ],
    stadiums: [
        {
            icon: '🏟️',
            name: 'SoFi Stadium',
            city: 'Los Ángeles, EE.UU.',
            capacity: '70,240'
        },
        {
            icon: '🏟️',
            name: 'Levi\'s Stadium',
            city: 'San Francisco, EE.UU.',
            capacity: '68,500'
        },
        {
            icon: '🏟️',
            name: 'Estadio Azteca',
            city: 'Ciudad de México, México',
            capacity: '87,523'
        },
        {
            icon: '🏟️',
            name: 'BC Place',
            city: 'Vancouver, Canadá',
            capacity: '54,500'
        }
    ],
    facts: [
        {
            icon: '⚽',
            title: 'Historia del Grupo A',
            text: 'El Grupo A del Mundial 2026 reúne selecciones de tres confederaciones distintas: CONMEBOL y CAF, reflejando la expansión del torneo a 48 equipos.'
        },
        {
            icon: '🏆',
            title: 'Argentina — Tricampeón',
            text: 'Argentina llega como tricampeón mundial vigente tras conquistar el título en Qatar 2022. Lionel Messi lideró el equipo en una final histórica contra Francia.'
        },
        {
            icon: '🇪🇨',
            title: 'Ecuador en el mundo',
            text: 'Ecuador debutó en los mundiales en el año 2002 y tuvo su mejor actuación en Alemania 2006, llegando hasta cuartos de final bajo la dirección de Luis Fernando Suárez.'
        },
        {
            icon: '🌎',
            title: 'Primera vez en EE.UU. desde 1994',
            text: 'El Mundial 2026 es el primero en celebrarse en Estados Unidos desde 1994. Esta edición también incluye a México y Canadá como co-anfitriones.'
        },
        {
            icon: '📊',
            title: 'Expansión histórica',
            text: 'El Mundial 2026 es el primero con 48 selecciones participantes, divididas en 12 grupos de 4 equipos. Los dos primeros de cada grupo avanzan a la siguiente fase.'
        },
        {
            icon: '🌍',
            title: 'Kenia debuta en mundiales',
            text: 'Kenia participa por primera vez en la historia de la Copa del Mundo, representando a la creciente fuerza del fútbol africano en la escena global.'
        }
    ],
    stats: [
        { value: '4',    label: 'Selecciones' },
        { value: '9',    label: 'Partidos' },
        { value: '3',    label: 'Continentes' },
        { value: '87K',  label: 'Capacidad máx.' },
        { value: '17',   label: 'Goles totales' },
        { value: '1',    label: 'Debutante' }
    ]
};

function renderTeams() {
    const grid = document.getElementById('teams-grid');
    grid.innerHTML = DATA.teams.map(t => `
        <div class="team-card">
            <span class="team-flag">${t.flag}</span>
            <div class="team-name">${t.name}</div>
            <div class="team-conf">${t.conf}</div>
            <div class="team-stats">
                <div class="team-stat">
                    <span class="val">${t.mundiales}</span>
                    <span class="lbl">Mundiales</span>
                </div>
                <div class="team-stat">
                    <span class="val">#${t.ranking}</span>
                    <span class="lbl">FIFA</span>
                </div>
            </div>
            <div style="margin-top:0.8rem;font-size:0.75rem;color:#666;">${t.mejorResultado}</div>
        </div>
    `).join('');
}

function renderStandings() {
    const tbody = document.getElementById('standings-body');
    tbody.innerHTML = DATA.standings.map(r => `
        <tr class="${r.pos <= 2 ? 'qualify' : ''}">
            <td><span class="rank-num">${r.pos}</span></td>
            <td>${r.team}</td>
            <td>${r.pj}</td>
            <td>${r.g}</td>
            <td>${r.e}</td>
            <td>${r.p}</td>
            <td>${r.gf}</td>
            <td>${r.gc}</td>
            <td><span class="pts-cell">${r.pts}</span></td>
        </tr>
    `).join('');
}

function renderStadiums() {
    const grid = document.getElementById('stadiums-grid');
    grid.innerHTML = DATA.stadiums.map(s => `
        <div class="stadium-card">
            <div class="stadium-icon">${s.icon}</div>
            <div class="stadium-name">${s.name}</div>
            <div class="stadium-city">📍 ${s.city}</div>
            <div class="stadium-cap">👥 Capacidad: ${s.capacity}</div>
        </div>
    `).join('');
}

function renderFacts() {
    const grid = document.getElementById('facts-grid');
    grid.innerHTML = DATA.facts.map(f => `
        <div class="fact-card">
            <div class="fact-icon">${f.icon}</div>
            <div class="fact-title">${f.title}</div>
            <div class="fact-text">${f.text}</div>
        </div>
    `).join('');
}

function renderStats() {
    const grid = document.getElementById('stats-grid');
    grid.innerHTML = DATA.stats.map(s => `
        <div class="stat-card">
            <div class="stat-value">${s.value}</div>
            <div class="stat-label">${s.label}</div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderTeams();
    renderStandings();
    renderStadiums();
    renderFacts();
    renderStats();
});
