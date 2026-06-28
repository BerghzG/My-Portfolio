const formacoes = [
    {
        curso:   'CST em Análise e Desenvolvimento de Sistemas',
        inst:    'Centro Universitário Internacional UNINTER',
        periodo: '2025 — cursando',
        status:  'em-curso',
        desc:    'Desenvolvimento web, banco de dados, lógica de programação e engenharia de software.'
    },
    {
        curso:   'Ciências Contábeis',
        inst:    'La Salle',
        periodo: '2026 — cursando',
        status:  'em-curso',
        desc:    'Contabilidade geral, fiscal, tributária e gestão financeira.'
    },
    {
        curso:   'Banco de Dados SQL',
        inst:    'Curso livre',
        periodo: '2025 — concluído',
        status:  'concluido',
        desc:    'Modelagem de dados, MER, consultas SQL, procedures, triggers e normalização.'
    },
];

const certificados = [
        { plataforma: 'Curso em Vídeo', nome: 'HTML5 e CSS3' },
        { plataforma: 'Curso em Vídeo', nome: 'JavaScript' },
        { plataforma: 'Curso em Vídeo', nome: 'Git e GitHub' },
        { plataforma: 'SEBRAE', nome: 'CNV – Comunicação Não Violenta' },
        { plataforma: 'Coursera', nome: 'Work Smarter, Not Harder: Time Management' },
        { plataforma: 'Udemy', nome: 'Desenvolvimento Web Completo' },
];

    // --- Renderiza linha do tempo ---
const timeline = document.getElementById('timeline');

formacoes.forEach(f => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
        <p class="timeline-data">${f.periodo}</p>
        <h3>${f.curso}</h3>
        <p class="timeline-inst">${f.inst}</p>
        <p style="font-size: 0.88rem; color: #6b6b8a; margin-top: 0.4rem;">${f.desc}</p>
        <span class="badge badge-${f.status}">
            ${f.status === 'em-curso' ? '● Em curso' : '✓ Concluído'}
        </span>
    `;
    timeline.appendChild(item);
});

    // --- Renderiza cards de certificados ---
const certsGrid = document.getElementById('certsGrid');

certificados.forEach(c => {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.innerHTML = `
        <p class="cert-plataforma">${c.plataforma}</p>
        <p class="cert-nome">${c.nome}</p>
    `;
certsGrid.appendChild(card);
});