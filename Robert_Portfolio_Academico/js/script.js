
/* index.html */
const habilidades = [
    { nome: 'HTML & CSS',      pct: 90 },
    { nome: 'JavaScript',      pct: 78 },
    { nome: 'Node.js',         pct: 60 },
    { nome: 'Express.js',      pct: 61 },
    { nome: 'SQL',             pct: 73 },
    { nome: 'Git & GitHub',    pct: 83 },
    { nome: 'EJS',             pct: 67 },
    { nome: 'Contabilidade',   pct: 33 },
];

const grid = document.getElementById('skillsGrid');

    // Cria um card para cada habilidade
habilidades.forEach(h => {
    const div = document.createElement('div');
    div.className = 'skill-item';
    div.innerHTML = `
        <div class="skill-nome">
        <span>${h.nome}</span>
        <span class="skill-pct">${h.pct}%</span>
        </div>
        <div class="skill-barra-fundo">
        <div class="skill-barra" data-pct="${h.pct}"></div>
        </div>
    `;
    grid.appendChild(div);
});

    /* Usa IntersectionObserver para animar as barras
    somente quando elas entram na tela */
const barras = document.querySelectorAll('.skill-barra');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        const barra = entry.target;
        // Define a largura final como o valor do atributo data-pct
        barra.style.width = barra.dataset.pct + '%';
        observer.unobserve(barra); // anima só uma vez
        }
    });
}, { threshold: 0.3 });

barras.forEach(b => observer.observe(b));