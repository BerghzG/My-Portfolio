const projetos = [
    {
        icone:     '🎌',
        tipo:      'Desenvolvimento Web',
        categoria: 'dev',
        titulo:    'AnimeFinder',
        desc:      'Aplicação web para pesquisa de animes utilizando as APIs AniList e Trace.moe, permitindo buscas por texto e por imagem, além de exibir detalhes completos das obras.',
        tags:      ['Node.js', 'Express', 'EJS', 'AniList API', 'Trace.moe'],
    },
    {
        icone:     '💬',
        tipo:      'Sistema Web',
        categoria: 'dev',
        titulo:    'Sistema de Notas e Respostas',
        desc:      'Plataforma com autenticação de usuários, publicação de notas, respostas e sistema de notificações para replies não lidas.',
        tags:      ['Node.js', 'Express', 'MySQL', 'EJS'],
    },
    {
        icone:     '🗃️',
        tipo:      'Banco de Dados',
        categoria: 'bd',
        titulo:    'Modelagem de Banco de Dados',
        desc:      'Desenvolvimento de modelos entidade-relacionamento, criação de schemas SQL, relacionamentos, inserts e consultas para projetos acadêmicos.',
        tags:      ['SQL', 'MER', 'MySQL'],
    },
    {
        icone:     '🌐',
        tipo:      'Front-end',
        categoria: 'front',
        titulo:    'Portfólio Pessoal',
        desc:      'Site desenvolvido do zero para apresentar minhas habilidades, projetos e formação utilizando apenas HTML, CSS e JavaScript.',
        tags:      ['HTML', 'CSS', 'JavaScript'],
    },
    {
        icone:     '📚',
        tipo:      'Estudos',
        categoria: 'dev',
        titulo:    'Projetos de Aprendizado',
        desc:      'Coleção de aplicações desenvolvidas durante os estudos para praticar consumo de APIs, autenticação, CRUD, manipulação de dados e boas práticas de programação.',
        tags:      ['JavaScript', 'Node.js', 'Git'],
    },
    {
        icone:     '🧾',
        tipo:      'Banco de Dados',
        categoria: 'bd',
        titulo:    'Sistema de Biblioteca',
        desc:      'Projeto acadêmico com modelagem de banco de dados, criação de tabelas, relacionamentos e consultas SQL para gerenciamento de empréstimos de livros.',
        tags:      ['SQL', 'Modelagem', 'Banco de Dados'],
    },
];

const categorias = ['todos', ...new Set(projetos.map(p => p.categoria))];

const labelCategoria = {
    todos: 'Todos',
    dev: 'Desenvolvimento',
    front: 'Front-end',
    bd: 'Banco de Dados',
};

    // --- Renderiza botões de filtro ---
const filtrosEl = document.getElementById('filtros');

categorias.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filtro-btn' + (cat === 'todos' ? ' ativo' : '');
    btn.textContent = labelCategoria[cat] || cat;
    btn.dataset.cat = cat;

    /* Ao clicar no filtro, mostra só os projetos da categoria */
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');

        const cards = document.querySelectorAll('.projeto-card');
        let visiveis = 0;

        cards.forEach(card => {
            const pertence = cat === 'todos' || card.dataset.cat === cat;
            card.classList.toggle('oculto', !pertence);
            if (pertence) visiveis++;
        });

        // Mostra mensagem se não houver projetos na categoria
        document.getElementById('sem-resultado').style.display =
            visiveis === 0 ? 'block' : 'none';
    });

    filtrosEl.appendChild(btn);
});

    // --- Renderiza cards de projetos ---
const grid = document.getElementById('projetosGrid');

projetos.forEach(p => {
    const card = document.createElement('div');
    card.className = 'projeto-card';
    card.dataset.cat = p.categoria;

      // Gera as tags como spans
    const tagsHtml = p.tags
        .map(t => `<span class="tag">${t}</span>`)
        .join('');

    card.innerHTML = `
        <span class="projeto-icone">${p.icone}</span>
        <span class="projeto-tipo">${p.tipo}</span>
        <h3>${p.titulo}</h3>
        <p style="font-size: 0.88rem; color: #6b6b8a; flex: 1;">${p.desc}</p>
        <div class="projeto-tags">${tagsHtml}</div>
    `;

    grid.appendChild(card);
});