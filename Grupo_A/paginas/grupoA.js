const DATA = {
    teams: [
        { name: 'Argentina', flag: '🇦🇷', conf: 'CONMEBOL', mundiales: 18, ranking: 1,   best: 'Campeón (1978, 1986, 2022)', url: 'Argentina.html' },
        { name: 'Ecuador',   flag: '🇪🇨', conf: 'CONMEBOL', mundiales: 4,  ranking: 42,  best: 'Cuartos (2006)',             url: 'Ecuador.html'   },
        { name: 'Perú',      flag: '🇵🇪', conf: 'CONMEBOL', mundiales: 9,  ranking: 24,  best: 'Cuartos (1970)',             url: 'Peru.html'      },
        { name: 'Kenia',     flag: '🇰🇪', conf: 'CAF',      mundiales: 1,  ranking: 103, best: 'Debut (2026)',              url: 'Kenia.html'     }
    ],
    standings: [
        { pos: 1, team: '🇦🇷 Argentina', pj:3, g:3, e:0, p:0, gf:8, gc:2, pts:9 },
        { pos: 2, team: '🇪🇨 Ecuador',   pj:3, g:1, e:1, p:1, gf:4, gc:4, pts:4 },
        { pos: 3, team: '🇵🇪 Perú',      pj:3, g:1, e:0, p:2, gf:3, gc:6, pts:3 },
        { pos: 4, team: '🇰🇪 Kenia',     pj:3, g:0, e:1, p:2, gf:2, gc:5, pts:1 }
    ],
    stadiums: [
        { icon:'🏟️', name:'SoFi Stadium',    city:'Los Ángeles, EE.UU.',        cap:'70,240' },
        { icon:'🏟️', name:"Levi's Stadium",  city:'San Francisco, EE.UU.',      cap:'68,500' },
        { icon:'🏟️', name:'Estadio Azteca',  city:'Ciudad de México, México',   cap:'87,523' },
        { icon:'🏟️', name:'BC Place',        city:'Vancouver, Canadá',          cap:'54,500' }
    ],
    facts: [
        { icon:'⚽', title:'Un grupo, tres confederaciones',  text:'El Grupo A reúne selecciones de CONMEBOL y CAF, reflejo de la expansión a 48 equipos en el Mundial 2026.' },
        { icon:'🏆', title:'Argentina: tricampeón vigente',   text:'La Albiceleste llega como vigente campeón tras el título histórico en Qatar 2022, liderada por Lionel Messi en la final ante Francia.' },
        { icon:'🇪🇨', title:'Ecuador en los mundiales',      text:'Ecuador debutó mundialmente en 2002 y alcanzó cuartos de final en Alemania 2006, su mejor actuación histórica.' },
        { icon:'🌎', title:'EE.UU. como anfitrión de nuevo',  text:'Por primera vez desde 1994, Estados Unidos es sede del torneo. Esta edición también incluye a México y Canadá como co-anfitriones.' },
        { icon:'📊', title:'48 equipos por primera vez',      text:'El Mundial 2026 es el primero con 48 selecciones en 12 grupos de 4, aumentando el número de partidos de 64 a 104.' },
        { icon:'🌍', title:'Kenia debuta en la Copa',         text:'Kenia hace su histórica primera aparición mundialista, representando la creciente fuerza del fútbol africano en el escenario global.' }
    ],
    statsBar: [
        { val:'4',   lbl:'Selecciones',    icon:'bi-people-fill' },
        { val:'9',   lbl:'Partidos',        icon:'bi-calendar-event-fill' },
        { val:'3',   lbl:'Continentes',     icon:'bi-globe2' },
        { val:'17',  lbl:'Goles totales',   icon:'bi-bullseye' },
        { val:'87K', lbl:'Cap. máx.',       icon:'bi-building-fill' },
        { val:'1',   lbl:'Debutante',       icon:'bi-star-fill' }
    ]
};

/* Stats bar */
function renderStatsBar() {
    const el = document.getElementById('stats-bar');
    el.innerHTML = DATA.statsBar.map(s => `
        <div class="col-6 col-md-4 col-lg-2">
            <div class="stat-pill text-center">
                <i class="bi ${s.icon} text-success mb-1 d-block fs-5"></i>
                <div class="val">${s.val}</div>
                <div class="lbl">${s.lbl}</div>
            </div>
        </div>
    `).join('');
}

/* Teams */
function renderTeams() {
    const grid = document.getElementById('teams-grid');
    grid.innerHTML = DATA.teams.map(t => `
        <div class="col-12 col-sm-6 col-lg-3">
            <a href="${t.url}" class="text-decoration-none d-block h-100">
                <div class="team-card h-100">
                    <div class="team-flag mb-3">${t.flag}</div>
                    <div class="team-name mb-1">${t.name}</div>
                    <div class="team-conf mb-3">${t.conf}</div>
                    <div class="row g-2 mb-3">
                        <div class="col-6">
                            <div class="team-stat-box">
                                <div class="sv">${t.mundiales}</div>
                                <div class="sl">Mundiales</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="team-stat-box">
                                <div class="sv">#${t.ranking}</div>
                                <div class="sl">FIFA</div>
                            </div>
                        </div>
                    </div>
                    <div class="team-best"><i class="bi bi-trophy me-1"></i>${t.best}</div>
                    <div class="mt-3" style="font-size:.78rem;color:var(--accent)">Ver selección →</div>
                </div>
            </a>
        </div>
    `).join('');
}

/* Standings */
function renderStandings() {
    const tbody = document.getElementById('standings-body');
    tbody.innerHTML = DATA.standings.map(r => {
        const qualify = r.pos <= 2;
        const dif = r.gf - r.gc;
        return `
        <tr class="${qualify ? 'qualify-row' : ''}">
            <td><span class="rank-badge rank-${r.pos}">${r.pos}</span></td>
            <td class="fw-semibold">${r.team}</td>
            <td class="text-center">${r.pj}</td>
            <td class="text-center text-success fw-bold">${r.g}</td>
            <td class="text-center">${r.e}</td>
            <td class="text-center text-danger">${r.p}</td>
            <td class="text-center">${r.gf}</td>
            <td class="text-center">${r.gc}</td>
            <td class="text-center ${dif>0?'text-success':dif<0?'text-danger':''}">${dif>0?'+':''}${dif}</td>
            <td class="text-center"><span class="pts-badge">${r.pts}</span></td>
        </tr>`;
    }).join('');
}

/* Stadiums */
function renderStadiums() {
    const grid = document.getElementById('stadiums-grid');
    grid.innerHTML = DATA.stadiums.map(s => `
        <div class="col-12 col-sm-6 col-lg-3">
            <div class="stadium-card">
                <div class="stadium-thumb">${s.icon}</div>
                <div class="stadium-body">
                    <div class="stadium-name">${s.name}</div>
                    <div class="stadium-city"><i class="bi bi-geo-alt-fill me-1"></i>${s.city}</div>
                    <div class="stadium-cap"><i class="bi bi-people-fill me-1"></i>Cap: ${s.cap}</div>
                </div>
            </div>
        </div>
    `).join('');
}

/* Facts */
function renderFacts() {
    const grid = document.getElementById('facts-grid');
    grid.innerHTML = DATA.facts.map(f => `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="fact-card">
                <div class="fact-icon">${f.icon}</div>
                <div class="fact-title">${f.title}</div>
                <div class="fact-text">${f.text}</div>
            </div>
        </div>
    `).join('');
}

/* Navbar shrink on scroll */
window.addEventListener('scroll', () => {
    document.getElementById('mainNav').style.boxShadow =
        window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,.6)' : '';
});

document.addEventListener('DOMContentLoaded', () => {
    renderStatsBar();
    renderTeams();
    renderStandings();
    renderStadiums();
    renderFacts();
});
