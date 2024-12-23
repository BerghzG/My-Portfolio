// Tadução


var html = document.querySelector("html")
// menu
var navAbout = document.querySelector("#navabout");
var navSkill = document.querySelector("#navskill");
var navContact = document.querySelector("#navcontact");
var navProjects = document.querySelector("#navprojects");
var navEn = document.querySelector("#en");
var navPt = document.querySelector("#pt");
var navSp = document.querySelector("#sp");
var navFr = document.querySelector("#fr");
var navGe = document.querySelector("#ge")
var navMa = document.querySelector("#ma")
var navAr = document.querySelector("#ar");
// primeira seção
var headerH1 = document.querySelector("#h1header")
var headerH2 = document.querySelector("#h2header")
var headerH3 = document.querySelector("#h3header")
// sobre mim
var aboutH2 = document.querySelector("#h22")
var aboutP = document.querySelector("#p1")
// habilidades
var skillH21 = document.querySelector("#h2Web")
var skillP1 = document.querySelector("#pWeb")
var skillP2 = document.querySelector("#pWeb2")
var skillH22 = document.querySelector("#h2Gra")
var skillP3 = document.querySelector("#pGra")
var skillH23 = document.querySelector("#h2Ski")
var skillP4 = document.querySelector("#pSki")
var skillH24 = document.querySelector("#h2Oth")
var skillP5 = document.querySelector("#pOth")
// contato
var contactH2 = document.querySelector("#conH2")
var contactP1 = document.querySelector("#conP1")
var contactH31 = document.querySelector("#conH31")
var contactP2 = document.querySelector("#conP2")
var contactH32 = document.querySelector("#conH32")
var contactP3 = document.querySelector("#conP3")
var contactH4 = document.querySelector("#conH4")

// projects.html
let projectH1 = document.getElementById("projectH1");
let projectP = document.getElementById("projectP");
let blogCardH5 = document.getElementById("blogCardH5");
let blogCardP = document.getElementById("blogCardP");
let seeMore = document.querySelectorAll(".seeMore");

let anime = document.getElementById("anime")

// funções da tradução

function portugues() {
    html.setAttribute('lang', 'pt-br');

    if (typeof navAbout !== 'undefined' && navAbout !== null) {
        navAbout.innerHTML = "Sobre";
    }
    if (typeof navSkill !== 'undefined' && navSkill !== null) {
        navSkill.innerHTML = "Habilidades";
    }
    if (typeof navContact !== 'undefined' && navContact !== null) {
        navContact.innerHTML = "Contato";
    }
    if (typeof navProjects !== 'undefined' && navProjects !== null) {
        navProjects.innerHTML = "Projetos";
    }
    if (typeof navEn !== 'undefined' && navEn !== null) {
        navEn.innerHTML = "Inglês";
    }
    if (typeof navPt !== 'undefined' && navPt !== null) {
        navPt.innerHTML = "Português";
    }
    if (typeof navSp !== 'undefined' && navSp !== null) {
        navSp.innerHTML = "Espanhol";
    }
    if (typeof navFr !== 'undefined' && navFr !== null) {
        navFr.innerHTML = "Francês";
    }
    if (typeof navGe !== 'undefined' && navGe !== null) {
        navGe.innerHTML = "Alemão";
    }
    if (typeof navMa !== 'undefined' && navMa !== null) {
        navMa.innerHTML = "Mandarim";
    }
    if (typeof navAr !== 'undefined' && navAr !== null) {
        navAr.innerHTML = "Árabe";
    }

    if (typeof headerH1 !== 'undefined' && headerH1 !== null) {
        headerH1.innerHTML = "Ei você";
    }
    if (typeof headerH2 !== 'undefined' && headerH2 !== null) {
        headerH2.innerHTML = "Sou Berghz G";
    }
    if (typeof headerH3 !== 'undefined' && headerH3 !== null) {
        headerH3.innerHTML = "Um Desenvolvedor Web";
    }

    if (typeof aboutH2 !== 'undefined' && aboutH2 !== null) {
        aboutH2.innerHTML = "Sobre Mim";
    }
    if (typeof aboutP !== 'undefined' && aboutP !== null) {
        aboutP.innerHTML = "Sou um entusiasta da tecnologia apaixonado por HTML, CSS e Bootstrap, com um forte interesse em UX (User Experience). Meu fascínio por programação se estende além do trabalho, refletindo-se em meus hobbies, como desenhar e explorar novos jogos. adoro ler sobre novas tecnologias e aplicar esses conhecimentos em projetos criativos.";
    }

    if (typeof skillH21 !== 'undefined' && skillH21 !== null) {
        skillH21.innerHTML = "Frelancer de Desenvolvimento Web";
    }
    if (typeof skillP1 !== 'undefined' && skillP1 !== null) {
        skillP1.innerHTML = "2021 - Presente";
    }
    if (typeof skillP2 !== 'undefined' && skillP2 !== null) {
        skillP2.innerHTML = "Trabalhei com clientes em projetos de desenvolvimento web, usando sites responsivos e com desempenho otimizado.";
    }
    if (typeof skillH22 !== 'undefined' && skillH22 !== null) {
        skillH22.innerHTML = "Freelancer de Design Gráfico";
    }
    if (typeof skillP3 !== 'undefined' && skillP3 !== null) {
        skillP3.innerHTML = "Colaborei com empresas para criar logotipos, banners e materiais promocionais usando ferramentas como Adobe Illustrator e Photoshop.";
    }
    if (typeof skillH23 !== 'undefined' && skillH23 !== null) {
        skillH23.innerHTML = "Habilidades";
    }
    if (typeof skillP4 !== 'undefined' && skillP4 !== null) {
        skillP4.innerHTML = "Desenvolvedor Web Full Stack com experiência em várias tecnologias: HTML, CSS, javaScript (incluindo JQuery, API e manipulação de DOM), Python, EJS, PHP e muito mais. Sempre animado para criar soluções incríveis!";
    }
    if (typeof skillH24 !== 'undefined' && skillH24 !== null) {
        skillH24.innerHTML = "Outras informações";
    }
    if (typeof skillP5 !== 'undefined' && skillP5 !== null) {
        skillP5.innerHTML = "Além da minha experiência técnica, sou um entusiasta por natureza, sempre buscando expandir meus conhecimentos e habilidades por meio de projetos pessoais e colaborativos.";
    }

    if (typeof contactH2 !== 'undefined' && contactH2 !== null) {
        contactH2.innerHTML = "Contato";
    }
    if (typeof contactP1 !== 'undefined' && contactP1 !== null) {
        contactP1.innerHTML = "Espero ansioso para ouvir suas ideas e projetos interessantes. Se você está procurando colaborar, precisa de conselhos ou apenas quer dizer oi, não hesite em entrar em contato. Use o formulário abaixo ou envie um e-mail diretamente para berghzg@gmail.com";
    }
    if (typeof contactH31 !== 'undefined' && contactH31 !== null) {
        contactH31.innerHTML = "Horario de Funcionamento";
    }
    if (typeof contactP2 !== 'undefined' && contactP2 !== null) {
        contactP2.innerHTML = "Segunda a sexta: 12h - 20h";
    }
    if (typeof contactH32 !== 'undefined' && contactH32 !== null) {
        contactH32.innerHTML = "Redes Sociais";
    }
    if (typeof contactP3 !== 'undefined' && contactP3 !== null) {
        contactP3.innerHTML = "Conecte-se comigo nas redes sociais:";
    }
    if (typeof contactH4 !== 'undefined' && contactH4 !== null) {
        contactH4.innerHTML = "Localização";
    }

    // projects.html

    if (typeof projectH1 !== 'undefined' && projectH1 !== null) {
        projectH1.innerHTML = "Projetos que definem minha jornada";
    }
    if (typeof projectP !== 'undefined' && projectP !== null) {
        projectP.innerHTML = "Explore meu trabalho mais recente e descubra minha paixão pela criatividade e inovação.";
    }
    if (typeof blogCardH5 !== 'undefined' && blogCardH5 !== null) {
        blogCardH5.innerHTML = "Escrevendo Blog";
    }
    if (typeof blogCardP !== 'undefined' && blogCardP !== null) {
        blogCardP.innerHTML = "O projeto é um blog pessoal criado com Node.js, Express, EJS, CSS, Bootstrap e JavaScript, permitindo ao usuário criar, editar e excluir postagens. Ele funciona offline, armazenando informações localmente, mas as postagens feitas no modo de navegação anônima serão perdidas quando você fechar o aplicativo.";
    }
    if (typeof seeMore !== "undefined" && seeMore !== null) {
        seeMore.forEach(button => {
            button.innerHTML = "Visite o Site";
        });
    }

    if (typeof anime !== "undefined" && anime !== null) {
        anime.innerHTML = "AnimeFinder é um projeto web que permite aos usuários pesquisar animes por texto ou imagem. Ele fornece informações detalhadas, como equipe, personagens, dubladores, trailers e muito mais. Os usuários podem criar listas personalizadas para acompanhar seu progresso em cada anime."
    }
}

function ingles() {
    html.setAttribute('lang', 'en');

    if (typeof navAbout !== 'undefined' && navAbout !== null) {
        navAbout.innerHTML = "About Me";
    }
    if (typeof navSkill !== 'undefined' && navSkill !== null) {
        navSkill.innerHTML = "Skills";
    }
    if (typeof navContact !== 'undefined' && navContact !== null) {
        navContact.innerHTML = "Contact";
    }
    if (typeof navProjects !== 'undefined' && navProjects !== null) {
        navProjects.innerHTML = "Projects";
    }
    if (typeof navEn !== 'undefined' && navEn !== null) {
        navEn.innerHTML = "English";
    }
    if (typeof navPt !== 'undefined' && navPt !== null) {
        navPt.innerHTML = "Portuguese";
    }
    if (typeof navSp !== 'undefined' && navSp !== null) {
        navSp.innerHTML = "Spanish";
    }
    if (typeof navFr !== 'undefined' && navFr !== null) {
        navFr.innerHTML = "French";
    }
    if (typeof navGe !== 'undefined' && navGe !== null) {
        navGe.innerHTML = "Germany";
    }
    if (typeof navMa !== 'undefined' && navMa !== null) {
        navMa.innerHTML = "Mandarin";
    }
    if (typeof navAr !== 'undefined' && navAr !== null) {
        navAr.innerHTML = "Arabic";
    }

    if (typeof headerH1 !== 'undefined' && headerH1 !== null) {
        headerH1.innerHTML = "Hey ya";
    }
    if (typeof headerH2 !== 'undefined' && headerH2 !== null) {
        headerH2.innerHTML = "I'm Berghz G";
    }
    if (typeof headerH3 !== 'undefined' && headerH3 !== null) {
        headerH3.innerHTML = "A Web Developer";
    }

    if (typeof aboutH2 !== 'undefined' && aboutH2 !== null) {
        aboutH2.innerHTML = "About Me";
    }
    if (typeof aboutP !== 'undefined' && aboutP !== null) {
        aboutP.innerHTML = "I'm a technology enthusiast passionate about HTML, CSS and Bootstrap, with strong interest in UX (User Experience). My fascination with programming extends beyond work, reflecting on my hobbies, such as drawing and exploring new games. I love reading about technologies and applying this knowledge to creative projects.";
    }

    if (typeof skillH21 !== 'undefined' && skillH21 !== null) {
        skillH21.innerHTML = "Web Development Freelancer";
    }
    if (typeof skillP1 !== 'undefined' && skillP1 !== null) {
        skillP1.innerHTML = "2021 - Present";
    }
    if (typeof skillP2 !== 'undefined' && skillP2 !== null) {
        skillP2.innerHTML = "I worked with clients on web development projects, using technologies such as HTML, CSS, JS, Python and Bootstrap. I created responsive websites and optimized performance.";
    }
    if (typeof skillH22 !== 'undefined' && skillH22 !== null) {
        skillH22.innerHTML = "Graphic Design Freelancer";
    }
    if (typeof skillP3 !== 'undefined' && skillP3 !== null) {
        skillP3.innerHTML = "Collaborated with companies to create logos, banners and promotional materials using tools such as Adobe Illustrator and Photoshop.";
    }
    if (typeof skillH23 !== 'undefined' && skillH23 !== null) {
        skillH23.innerHTML = "Skills";
    }
    if (typeof skillP4 !== 'undefined' && skillP4 !== null) {
        skillP4.innerHTML = "Full Stack Web Developer with expertise in various technologies: HTML, CSS, JavaScript (including JQuery, API and DOM manipulation), Python, Bootstrap, EJS, PHP and more. Always excited to create amazing solutions!";
    }
    if (typeof skillH24 !== 'undefined' && skillH24 !== null) {
        skillH24.innerHTML = "Other information";
    }
    if (typeof skillP5 !== 'undefined' && skillP5 !== null) {
        skillP5.innerHTML = "In addition to my technical experience, I am an enthusiast by nature, always seeking to expand my knowledge and skills through personal and collaborative projects.";
    }

    if (typeof contactH2 !== 'undefined' && contactH2 !== null) {
        contactH2.innerHTML = "Contact";
    }
    if (typeof contactP1 !== 'undefined' && contactP1 !== null) {
        contactP1.innerHTML = "I look forward to hearing your exciting ideas and projects. If you're looking to collaborate, need advice or just want to say hi, don't hesitate to get in touch. Use the form below or send an email directly to berghzg@gmail.com";
    }
    if (typeof contactH31 !== 'undefined' && contactH31 !== null) {
        contactH31.innerHTML = "Opening Hours";
    }
    if (typeof contactP2 !== 'undefined' && contactP2 !== null) {
        contactP2.innerHTML = "Monday to Friday: 12am - 20pm";
    }
    if (typeof contactH32 !== 'undefined' && contactH32 !== null) {
        contactH32.innerHTML = "Social Media";
    }
    if (typeof contactP3 !== 'undefined' && contactP3 !== null) {
        contactP3.innerHTML = "Connect with me on social media:";
    }
    if (typeof contactH4 !== 'undefined' && contactH4 !== null) {
        contactH4.innerHTML = "Location";
    }

    // projects.html

    if (typeof projectH1 !== 'undefined' && projectH1 !== null) {
        projectH1.innerHTML = "Projects That Define My Journey";
    }
    if (typeof projectP !== 'undefined' && projectP !== null) {
        projectP.innerHTML = "Explore my latest work and discover my passion for creativity and innovation.";
    }
    if (typeof blogCardH5 !== 'undefined' && blogCardH5 !== null) {
        blogCardH5.innerHTML = "Writing Blog";
    }
    if (typeof blogCardP !== 'undefined' && blogCardP !== null) {
        blogCardP.innerHTML = "The project is a personal blog created with Node.js, Express, EJS, CSS, Bootstrap, and JavaScript, allowing the user to create, edit, and delete posts. It works offline, storing information locally, but posts made in incognito mode will be lost when you close the application.";
    }
    if (typeof seeMore !== "undefined" && seeMore !== null) {
        seeMore.forEach(button => {
            button.innerHTML = "Visit Website";
        });
    }
    if (typeof anime !== "undefined" && anime !== null) {
        anime.innerHTML = "AnimeFinder is a web project that allows users to search for animes by text or image. It provides detailed information, such as staff, characters, voice actors, trailers, and more. Users can create custom lists to track their progress on each anime."
    }
}

function espanhol() {
    html.setAttribute('lang', 'es');

    if (typeof navAbout !== 'undefined' && navAbout !== null) {
        navAbout.innerHTML = "Acerca de Mí";
    }
    if (typeof navSkill !== 'undefined' && navSkill !== null) {
        navSkill.innerHTML = "Habilidades";
    }
    if (typeof navContact !== 'undefined' && navContact !== null) {
        navContact.innerHTML = "Contacto";
    }
    if (typeof navProjects !== 'undefined' && navProjects !== null) {
        navProjects.innerHTML = "Proyectos";
    }
    if (typeof navEn !== 'undefined' && navEn !== null) {
        navEn.innerHTML = "Inglés";
    }
    if (typeof navPt !== 'undefined' && navPt !== null) {
        navPt.innerHTML = "Portugués";
    }
    if (typeof navSp !== 'undefined' && navSp !== null) {
        navSp.innerHTML = "Español";
    }
    if (typeof navFr !== 'undefined' && navFr !== null) {
        navFr.innerHTML = "Francés";
    }
    if (typeof navGe !== 'undefined' && navGe !== null) {
        navGe.innerHTML = "Alemán";
    }
    if (typeof navMa !== 'undefined' && navMa !== null) {
        navMa.innerHTML = "Mandarín";
    }
    if (typeof navAr !== 'undefined' && navAr !== null) {
        navAr.innerHTML = "Árabe";
    }

    if (typeof headerH1 !== 'undefined' && headerH1 !== null) {
        headerH1.innerHTML = "Hola";
    }
    if (typeof headerH2 !== 'undefined' && headerH2 !== null) {
        headerH2.innerHTML = "Soy Berghz G";
    }
    if (typeof headerH3 !== 'undefined' && headerH3 !== null) {
        headerH3.innerHTML = "Un Desarrollador Web";
    }

    if (typeof aboutH2 !== 'undefined' && aboutH2 !== null) {
        aboutH2.innerHTML = "Sobre Mi";
    }
    if (typeof aboutP !== 'undefined' && aboutP !== null) {
        aboutP.innerHTML = "Soy un entusiasta de la technologia apasionado por HTML, CSS y Bootstrap, con un fuerte interés en UX (experiencia de Usuario). Mi fascinación por la programación se extiende más allá del trabajo y se refleja en mis pasatiempos, como dibujar y explorar nuevas tecnologias y aplicar estos conocimientos a proyectos creativos.";
    }

    if (typeof skillH21 !== 'undefined' && skillH21 !== null) {
        skillH21.innerHTML = "Freelancer de Desarrolo Web";
    }
    if (typeof skillP1 !== 'undefined' && skillP1 !== null) {
        skillP1.innerHTML = "2021 - Presente";
    }
    if (typeof skillP2 !== 'undefined' && skillP2 !== null) {
        skillP2.innerHTML = "Trabajé con clientes en proyectos de desarollo web, utilizando sitios web responsivos y rendimiento optimizado.";
    }
    if (typeof skillH22 !== 'undefined' && skillH22 !== null) {
        skillH22.innerHTML = "Freelancer de Diseño Gráfico";
    }
    if (typeof skillP3 !== 'undefined' && skillP3 !== null) {
        skillP3.innerHTML = "Colaboré con empresas para crear logotipos, banners y materiales promocionales utilizando herramientos como Adobe Illustrator y Photoshop.";
    }
    if (typeof skillH23 !== 'undefined' && skillH23 !== null) {
        skillH23.innerHTML = "Habilidades";
    }
    if (typeof skillP4 !== 'undefined' && skillP4 !== null) {
        skillP4.innerHTML = "Desarrollador Web Full Stack con experiencia en varias tecnologías: HTML, CSS, JavaScript (incluyendo JQuery, API y manipulación de DOM), Python, EJS, PHP y más. ¡Siempre entusiasmado por crear soluciones increíbles!";
    }
    if (typeof skillH24 !== 'undefined' && skillH24 !== null) {
        skillH24.innerHTML = "Otra información";
    }
    if (typeof skillP5 !== 'undefined' && skillP5 !== null) {
        skillP5.innerHTML = "Además de mi experiencia técnica, soy un entusiasta por naturaleza, siempre buscando expandir mis conocimientos y habilidades a través de proyectos personales y colaborativos.";
    }

    if (typeof contactH2 !== 'undefined' && contactH2 !== null) {
        contactH2.innerHTML = "Contacto";
    }
    if (typeof contactP1 !== 'undefined' && contactP1 !== null) {
        contactP1.innerHTML = "Espero escuchar tus interesantes ideas y proyetos. Si estás buscando colaborar, necesitas asesoramiento o simplemente quieres saludarme, en ponerte en contacto. Utiliza el formulario a continuación o envia un correo electrónico directamente berghzg@gmail.com";
    }
    if (typeof contactH31 !== 'undefined' && contactH31 !== null) {
        contactH31.innerHTML = "Horario de apertura";
    }
    if (typeof contactP2 !== 'undefined' && contactP2 !== null) {
        contactP2.innerHTML = "Lunes a viernes: 12:00 - 20:00";
    }
    if (typeof contactH32 !== 'undefined' && contactH32 !== null) {
        contactH32.innerHTML = "Redes Sociales";
    }
    if (typeof contactP3 !== 'undefined' && contactP3 !== null) {
        contactP3.innerHTML = "Conéctate conmigo en las redes sociales:";
    }
    if (typeof contactH4 !== 'undefined' && contactH4 !== null) {
        contactH4.innerHTML = "Ubicación";
    }

    // projects.html

    if (typeof projectH1 !== 'undefined' && projectH1 !== null) {
        projectH1.innerHTML = "Proyectos que definen mi viaje";
    }
    if (typeof projectP !== 'undefined' && projectP !== null) {
        projectP.innerHTML = "Explora mi último trabajo y descubre mi pasión por la creatividad y la innovación.";
    }
    if (typeof blogCardH5 !== 'undefined' && blogCardH5 !== null) {
        blogCardH5.innerHTML = "Blog de escritura";
    }
    if (typeof blogCardP !== 'undefined' && blogCardP !== null) {
        blogCardP.innerHTML = "El proyecto es un blog personal creado con Node.js, Express, EJS, CSS, Bootstrap y JavaScript, que permite al usuario crear, editar y eliminar publicaciones. Funciona sin conexión, almacenando información localmente, pero las publicaciones realizados en modo incógnito se perderán cuando cierres la aplicación.";
    }
    if (typeof seeMore !== "undefined" && seeMore !== null) {
        seeMore.forEach(button => {
            button.innerHTML = "Visitar el sitio web";
        });
    }
    if (typeof anime !== "undefined" && anime !== null) {
        anime.innerHTML = "AnimeFinder es un proyecto web que permite a los usuarios buscar animes por texto o imagen. Proporciona información detallada, como personal, personajes, actores de doblaje, avances y más. Los usuarios pueden crear listas personalizadas para realizar un seguimiento de su progreso en cada anime."
    }
}

function frances() {
    html.setAttribute('lang', 'fr');

    if (typeof navAbout !== 'undefined' && navAbout !== null) {
        navAbout.innerHTML = "À propos";
    }
    if (typeof navSkill !== 'undefined' && navSkill !== null) {
        navSkill.innerHTML = "Compétences";
    }
    if (typeof navContact !== 'undefined' && navContact !== null) {
        navContact.innerHTML = "Contact";
    }
    if (typeof navProjects !== 'undefined' && navProjects !== null) {
        navProjects.innerHTML = "Projets";
    }
    if (typeof navEn !== 'undefined' && navEn !== null) {
        navEn.innerHTML = "Anglais";
    }
    if (typeof navPt !== 'undefined' && navPt !== null) {
        navPt.innerHTML = "Portugais";
    }
    if (typeof navSp !== 'undefined' && navSp !== null) {
        navSp.innerHTML = "Espagnol";
    }
    if (typeof navFr !== 'undefined' && navFr !== null) {
        navFr.innerHTML = "Français";
    }
    if (typeof navGe !== 'undefined' && navGe !== null) {
        navGe.innerHTML = "Allemand";
    }
    if (typeof navMa !== 'undefined' && navMa !== null) {
        navMa.innerHTML = "Chinois";
    }
    if (typeof navAr !== 'undefined' && navAr !== null) {
        navAr.innerHTML = "Arabe";
    }

    if (typeof headerH1 !== 'undefined' && headerH1 !== null) {
        headerH1.innerHTML = "Salut toi";
    }
    if (typeof headerH2 !== 'undefined' && headerH2 !== null) {
        headerH2.innerHTML = "Je suis Berghz G";
    }
    if (typeof headerH3 !== 'undefined' && headerH3 !== null) {
        headerH3.innerHTML = "Un Développeur Web";
    }

    if (typeof aboutH2 !== 'undefined' && aboutH2 !== null) {
        aboutH2.innerHTML = "À propos de moi";
    }
    if (typeof aboutP !== 'undefined' && aboutP !== null) {
        aboutP.innerHTML = "Je suis un passionné de technologie, en particulier d'HTML, CSS et Bootstrap, avec un grand intérêt pour l'expérience utilisateur (UX). Ma passion pour la programmation va au-delà du travail, se reflétant dans mes passe-temps, comme le dessin et l'exploration de nouveaux jeux. J'adore lire sur les nouvelles technologies et les appliquer dans mes projets créatifs.";
    }

    if (typeof skillH21 !== 'undefined' && skillH21 !== null) {
        skillH21.innerHTML = "Développeur Web Freelance";
    }
    if (typeof skillP1 !== 'undefined' && skillP1 !== null) {
        skillP1.innerHTML = "2021 - Présent";
    }
    if (typeof skillP2 !== 'undefined' && skillP2 !== null) {
        skillP2.innerHTML = "J'ai travaillé avec des clients sur des projets de développement web, en utilisant des sites responsives et optimisés pour la performance.";
    }
    if (typeof skillH22 !== 'undefined' && skillH22 !== null) {
        skillH22.innerHTML = "Graphiste Freelance";
    }
    if (typeof skillP3 !== 'undefined' && skillP3 !== null) {
        skillP3.innerHTML = "J'ai collaboré avec des entreprises pour créer des logos, des bannières et des supports marketing en utilisant des outils comme Adobe Illustrator et Photoshop.";
    }
    if (typeof skillH23 !== 'undefined' && skillH23 !== null) {
        skillH23.innerHTML = "Compétences";
    }
    if (typeof skillP4 !== 'undefined' && skillP4 !== null) {
        skillP4.innerHTML = "Développeur Web Full Stack avec une expérience dans diverses technologies : HTML, CSS, JavaScript (y compris JQuery, API et manipulation du DOM), Python, EJS, PHP, et bien plus. Toujours enthousiaste pour créer des solutions incroyables !";
    }
    if (typeof skillH24 !== 'undefined' && skillH24 !== null) {
        skillH24.innerHTML = "Autres informations";
    }
    if (typeof skillP5 !== 'undefined' && skillP5 !== null) {
        skillP5.innerHTML = "En plus de mon expérience technique, je suis un passionné de nature, toujours à la recherche d'élargir mes connaissances et mes compétences à travers des projets personnels et collaboratifs.";
    }

    if (typeof contactH2 !== 'undefined' && contactH2 !== null) {
        contactH2.innerHTML = "Contact";
    }
    if (typeof contactP1 !== 'undefined' && contactP1 !== null) {
        contactP1.innerHTML = "J'ai hâte de connaître vos idées et projets intéressants. Si vous souhaitez collaborer, avez besoin de conseils ou simplement dire bonjour, n'hésitez pas à me contacter. Utilisez le formulaire ci-dessous ou envoyez-moi directement un e-mail à berghzg@gmail.com.";
    }
    if (typeof contactH31 !== 'undefined' && contactH31 !== null) {
        contactH31.innerHTML = "Horaires";
    }
    if (typeof contactP2 !== 'undefined' && contactP2 !== null) {
        contactP2.innerHTML = "Lundi à vendredi : 12h - 20h";
    }
    if (typeof contactH32 !== 'undefined' && contactH32 !== null) {
        contactH32.innerHTML = "Réseaux sociaux";
    }
    if (typeof contactP3 !== 'undefined' && contactP3 !== null) {
        contactP3.innerHTML = "Connectez-vous avec moi sur les réseaux sociaux :";
    }
    if (typeof contactH4 !== 'undefined' && contactH4 !== null) {
        contactH4.innerHTML = "Localisation";
    }

    // projects.html

    if (typeof projectH1 !== 'undefined' && projectH1 !== null) {
        projectH1.innerHTML = "Projets qui définissent mon parcours";
    }
    if (typeof projectP !== 'undefined' && projectP !== null) {
        projectP.innerHTML = "Explorez mes travaux les plus récents et découvrez ma passion pour la créativité et l'innovation.";
    }
    if (typeof blogCardH5 !== 'undefined' && blogCardH5 !== null) {
        blogCardH5.innerHTML = "Écrire un Blog";
    }
    if (typeof blogCardP !== 'undefined' && blogCardP !== null) {
        blogCardP.innerHTML = "Le projet est un blog personnel créé avec Node.js, Express, EJS, CSS, Bootstrap et JavaScript, permettant à l'utilisateur de créer, modifier et supprimer des articles. Il fonctionne hors ligne, stockant les informations localement, mais les articles publiés en mode navigation privée seront perdus lorsque vous fermez l'application.";
    }
    if (typeof seeMore !== "undefined" && seeMore !== null) {
        seeMore.forEach(button => {
            button.innerHTML = "Visiter le site Web";
        });
    }
    if (typeof anime !== "undefined" && anime !== null) {
        anime.innerHTML = "AnimeFinder est un projet web qui permet aux utilisateurs de rechercher des animes par texte ou image. Il fournit des informations détaillées, telles que le personnel, les personnages, les acteurs de doublage, les bandes-annonces, etc. Les utilisateurs peuvent créer des listes personnalisées pour suivre leur progression sur chaque anime."
    }
}

function alemao() {
    html.setAttribute('lang', 'de');

    if (typeof navAbout !== 'undefined' && navAbout !== null) {
        navAbout.innerHTML = "Über Mich";
    }
    if (typeof navSkill !== 'undefined' && navSkill !== null) {
        navSkill.innerHTML = "Fähigkeiten";
    }
    if (typeof navContact !== 'undefined' && navContact !== null) {
        navContact.innerHTML = "Kontakt";
    }
    if (typeof navProjects !== 'undefined' && navProjects !== null) {
        navProjects.innerHTML = "Projekte";
    }
    if (typeof navEn !== 'undefined' && navEn !== null) {
        navEn.innerHTML = "Englisch";
    }
    if (typeof navPt !== 'undefined' && navPt !== null) {
        navPt.innerHTML = "Portugiesisch";
    }
    if (typeof navSp !== 'undefined' && navSp !== null) {
        navSp.innerHTML = "Spanisch";
    }
    if (typeof navFr !== 'undefined' && navFr !== null) {
        navFr.innerHTML = "Französisch";
    }
    if (typeof navGe !== 'undefined' && navGe !== null) {
        navGe.innerHTML = "Deutschland";
    }
    if (typeof navMa !== 'undefined' && navMa !== null) {
        navMa.innerHTML = "Mandarin";
    }
    if (typeof navAr !== 'undefined' && navAr !== null) {
        navAr.innerHTML = "Arabisch";
    }

    if (typeof headerH1 !== 'undefined' && headerH1 !== null) {
        headerH1.innerHTML = "Hey";
    }
    if (typeof headerH2 !== 'undefined' && headerH2 !== null) {
        headerH2.innerHTML = "Ich Bin Berghz G";
    }
    if (typeof headerH3 !== 'undefined' && headerH3 !== null) {
        headerH3.innerHTML = "Ein Webentwickler";
    }

    if (typeof aboutH2 !== 'undefined' && aboutH2 !== null) {
        aboutH2.innerHTML = "Über Mich";
    }
    if (typeof aboutP !== 'undefined' && aboutP !== null) {
        aboutP.innerHTML = "Ich bin ein begeisterter Technik-Enthusiast für HTML, CSS und Bootstrap und habe großes Interesse an UX (User Experience). Meine Faszination für Programmierung geht über die Arbeit hinaus und zeigt sich in meinen Hobbys, wie dem Zeichnen und dem Erkunden neuer Spiele. Ich liebe es, über neue Technologien zu lesen und sie in kreativen Projekten anzuwenden.";
    }

    if (typeof skillH21 !== 'undefined' && skillH21 !== null) {
        skillH21.innerHTML = "Freiberuflicher Webentwickler";
    }
    if (typeof skillP1 !== 'undefined' && skillP1 !== null) {
        skillP1.innerHTML = "2021 - Heute";
    }
    if (typeof skillP2 !== 'undefined' && skillP2 !== null) {
        skillP2.innerHTML = "Ich habe mit Kunden an Webentwicklungsprojekten gearbeitet und dabei responsive Websites und optimierte Leistung verwendet.";
    }
    if (typeof skillH22 !== 'undefined' && skillH22 !== null) {
        skillH22.innerHTML = "Freiberuflicher Grafikdesigner";
    }
    if (typeof skillP3 !== 'undefined' && skillP3 !== null) {
        skillP3.innerHTML = "Ich habe mit Unternehmen zusammengearbeitet, um Logos, Banner und Werbematerialien mit Tools wie Adobe Illustrator und Photoshop zu erstellen.";
    }
    if (typeof skillH23 !== 'undefined' && skillH23 !== null) {
        skillH23.innerHTML = "Fähigkeiten";
    }
    if (typeof skillP4 !== 'undefined' && skillP4 !== null) {
        skillP4.innerHTML = "Full-Stack-Webentwickler mit Erfahrung in verschiedenen Technologien: HTML, CSS, JavaScript (einschließlich JQuery, API und DOM-Manipulation), Python, EJS, PHP und mehr. Immer begeistert davon, großartige Lösungen zu schaffen!";
    }
    if (typeof skillH24 !== 'undefined' && skillH24 !== null) {
        skillH24.innerHTML = "Weitere Informationen";
    }
    if (typeof skillP5 !== 'undefined' && skillP5 !== null) {
        skillP5.innerHTML = "Neben meiner technischen Erfahrung bin ich ein Enthusiast und versuche immer, mein Wissen und meine Fähigkeiten durch persönliche und gemeinschaftliche Projekte zu erweitern.";
    }

    if (typeof contactH2 !== 'undefined' && contactH2 !== null) {
        contactH2.innerHTML = "Kontakt";
    }
    if (typeof contactP1 !== 'undefined' && contactP1 !== null) {
        contactP1.innerHTML = "Ich freue mich darauf, von Ihren spannenden Ideen und Projekten zu hören. Wenn Sie an einer Zusammenarbeit interessiert sind, Rat benötigen oder einfach nur Hallo sagen möchten, zögern Sie nicht, Kontakt mit mir aufzunehmen. Verwenden Sie das untenstehende Formular oder senden Sie eine E-Mail direkt an berghzg@gmail.com";
    }
    if (typeof contactH31 !== 'undefined' && contactH31 !== null) {
        contactH31.innerHTML = "Öffnungszeiten";
    }
    if (typeof contactP2 !== 'undefined' && contactP2 !== null) {
        contactP2.innerHTML = "Montag bis Freitag: 12:00 - 20:00 Uhr";
    }
    if (typeof contactH32 !== 'undefined' && contactH32 !== null) {
        contactH32.innerHTML = "Soziale Medien";
    }
    if (typeof contactP3 !== 'undefined' && contactP3 !== null) {
        contactP3.innerHTML = "Verbinden Sie sich mit mir über soziale Medien:";
    }
    if (typeof contactH4 !== 'undefined' && contactH4 !== null) {
        contactH4.innerHTML = "Standort";
    }

    // projects.html
    if (typeof projectH1 !== 'undefined' && projectH1 !== null) {
        projectH1.innerHTML = "Projekte, die meine Reise definieren";
    }
    if (typeof projectP !== 'undefined' && projectP !== null) {
        projectP.innerHTML = "Erkunden Sie meine neuesten Arbeiten und entdecken Sie meine Leidenschaft für Kreativität und Innovation.";
    }
    if (typeof blogCardH5 !== 'undefined' && blogCardH5 !== null) {
        blogCardH5.innerHTML = "Schreibender Blog";
    }
    if (typeof blogCardP !== 'undefined' && blogCardP !== null) {
        blogCardP.innerHTML = "Das Projekt ist ein persönlicher Blog, erstellt mit Node.js, Express, EJS, CSS, Bootstrap und JavaScript, der es dem Benutzer ermöglicht, Beiträge zu erstellen, zu bearbeiten und zu löschen. Es funktioniert offline, speichert Informationen lokal, aber Beiträge im Inkognito-Modus gehen verloren, wenn die Anwendung geschlossen wird.";
    }
    if (typeof seeMore !== "undefined" && seeMore !== null) {
        seeMore.forEach(button => {
            button.innerHTML = "Besuchen Sie die Website";
        });
    }
    if (typeof anime !== "undefined" && anime !== null) {
        anime.innerHTML = "AnimeFinder ist ein Webprojekt, das es Benutzern ermöglicht, nach Animes nach Text oder Bild zu suchen. Es bietet detaillierte Informationen wie Mitarbeiter, Charaktere, Synchronsprecher, Trailer und mehr. Benutzer können benutzerdefinierte Listen erstellen, um ihren Fortschritt bei jedem Anime zu verfolgen."
    }
}

function mandarim() {
    html.setAttribute('lang', 'zh-cn');

    if (typeof navAbout !== 'undefined' && navAbout !== null) {
        navAbout.innerHTML = "关于";
    }
    if (typeof navSkill !== 'undefined' && navSkill !== null) {
        navSkill.innerHTML = "技能";
    }
    if (typeof navContact !== 'undefined' && navContact !== null) {
        navContact.innerHTML = "联系方式";
    }
    if (typeof navProjects !== 'undefined' && navProjects !== null) {
        navProjects.innerHTML = "项目";
    }
    if (typeof navEn !== 'undefined' && navEn !== null) {
        navEn.innerHTML = "英语";
    }
    if (typeof navPt !== 'undefined' && navPt !== null) {
        navPt.innerHTML = "葡萄牙语";
    }
    if (typeof navSp !== 'undefined' && navSp !== null) {
        navSp.innerHTML = "西班牙语";
    }
    if (typeof navFr !== 'undefined' && navFr !== null) {
        navFr.innerHTML = "法语";
    }
    if (typeof navGe !== 'undefined' && navGe !== null) {
        navGe.innerHTML = "德语";
    }
    if (typeof navMa !== 'undefined' && navMa !== null) {
        navMa.innerHTML = "中文";
    }
    if (typeof navAr !== 'undefined' && navAr !== null) {
        navAr.innerHTML = "阿拉伯语";
    }

    if (typeof headerH1 !== 'undefined' && headerH1 !== null) {
        headerH1.innerHTML = "嘿，你好";
    }
    if (typeof headerH2 !== 'undefined' && headerH2 !== null) {
        headerH2.innerHTML = "我是Berghz G";
    }
    if (typeof headerH3 !== 'undefined' && headerH3 !== null) {
        headerH3.innerHTML = "一名Web开发者";
    }

    if (typeof aboutH2 !== 'undefined' && aboutH2 !== null) {
        aboutH2.innerHTML = "关于我";
    }
    if (typeof aboutP !== 'undefined' && aboutP !== null) {
        aboutP.innerHTML = "我是一名对技术充满热情的爱好者，特别喜爱HTML、CSS和Bootstrap，且对用户体验（UX）有浓厚兴趣。编程对我来说不仅仅是工作，它还体现在我的爱好中，比如绘画和探索新游戏。我喜欢阅读新技术并将其应用于我的创意项目中。";
    }

    if (typeof skillH21 !== 'undefined' && skillH21 !== null) {
        skillH21.innerHTML = "Web开发自由职业者";
    }
    if (typeof skillP1 !== 'undefined' && skillP1 !== null) {
        skillP1.innerHTML = "2021 - 至今";
    }
    if (typeof skillP2 !== 'undefined' && skillP2 !== null) {
        skillP2.innerHTML = "我与客户合作，进行Web开发项目，使用响应式网站和优化性能。";
    }
    if (typeof skillH22 !== 'undefined' && skillH22 !== null) {
        skillH22.innerHTML = "平面设计自由职业者";
    }
    if (typeof skillP3 !== 'undefined' && skillP3 !== null) {
        skillP3.innerHTML = "我与企业合作，使用Adobe Illustrator和Photoshop等工具设计徽标、横幅和宣传材料。";
    }
    if (typeof skillH23 !== 'undefined' && skillH23 !== null) {
        skillH23.innerHTML = "技能";
    }
    if (typeof skillP4 !== 'undefined' && skillP4 !== null) {
        skillP4.innerHTML = "全栈Web开发者，拥有丰富的技术经验：HTML、CSS、JavaScript（包括JQuery、API和DOM操作）、Python、EJS、PHP等。总是热衷于创建令人惊叹的解决方案！";
    }
    if (typeof skillH24 !== 'undefined' && skillH24 !== null) {
        skillH24.innerHTML = "其他信息";
    }
    if (typeof skillP5 !== 'undefined' && skillP5 !== null) {
        skillP5.innerHTML = "除了我的技术经验，我天生是一个爱好者，总是通过个人和合作项目拓展我的知识和技能。";
    }

    if (typeof contactH2 !== 'undefined' && contactH2 !== null) {
        contactH2.innerHTML = "联系方式";
    }
    if (typeof contactP1 !== 'undefined' && contactP1 !== null) {
        contactP1.innerHTML = "我期待听到您的创意和有趣的项目。如果您想合作，寻求建议或只是想打个招呼，请随时与我联系。可以使用下面的表单或直接发送电子邮件到berghzg@gmail.com。";
    }
    if (typeof contactH31 !== 'undefined' && contactH31 !== null) {
        contactH31.innerHTML = "工作时间";
    }
    if (typeof contactP2 !== 'undefined' && contactP2 !== null) {
        contactP2.innerHTML = "周一至周五：12:00 - 20:00";
    }
    if (typeof contactH32 !== 'undefined' && contactH32 !== null) {
        contactH32.innerHTML = "社交媒体";
    }
    if (typeof contactP3 !== 'undefined' && contactP3 !== null) {
        contactP3.innerHTML = "通过社交媒体与我联系：";
    }
    if (typeof contactH4 !== 'undefined' && contactH4 !== null) {
        contactH4.innerHTML = "位置";
    }

    // projects.html

    if (typeof projectH1 !== 'undefined' && projectH1 !== null) {
        projectH1.innerHTML = "定义我旅程的项目";
    }
    if (typeof projectP !== 'undefined' && projectP !== null) {
        projectP.innerHTML = "探索我最新的作品，发现我对创意和创新的热情。";
    }
    if (typeof blogCardH5 !== 'undefined' && blogCardH5 !== null) {
        blogCardH5.innerHTML = "写博客";
    }
    if (typeof blogCardP !== 'undefined' && blogCardP !== null) {
        blogCardP.innerHTML = "这个项目是一个个人博客，使用Node.js、Express、EJS、CSS、Bootstrap和JavaScript创建，允许用户创建、编辑和删除帖子。它离线工作，信息存储在本地，但在隐身模式下发布的帖子将在关闭应用程序时丢失。";
    }
    if (typeof seeMore !== "undefined" && seeMore !== null) {
        seeMore.forEach(button => {
            button.innerHTML = "访问网站";
        });
    }
    if (typeof anime !== "undefined" && anime !== null) {
        anime.innerHTML = "AnimeFinder 是一个网络项目，允许用户通过文本或图像搜索动漫。它提供详细信息，例如工作人员、角色、配音演员、预告片等。用户可以创建自定义列表来跟踪他们在每部动漫上的进度。"
    }
}

function arabe() {
    html.setAttribute('lang', 'ar');

    if (typeof navAbout !== 'undefined' && navAbout !== null) {
        navAbout.innerHTML = "حول";
    }
    if (typeof navSkill !== 'undefined' && navSkill !== null) {
        navSkill.innerHTML = "المهارات";
    }
    if (typeof navContact !== 'undefined' && navContact !== null) {
        navContact.innerHTML = "التواصل";
    }
    if (typeof navProjects !== 'undefined' && navProjects !== null) {
        navProjects.innerHTML = "المشاريع";
    }
    if (typeof navEn !== 'undefined' && navEn !== null) {
        navEn.innerHTML = "الإنجليزية";
    }
    if (typeof navPt !== 'undefined' && navPt !== null) {
        navPt.innerHTML = "البرتغالية";
    }
    if (typeof navSp !== 'undefined' && navSp !== null) {
        navSp.innerHTML = "الإسبانية";
    }
    if (typeof navFr !== 'undefined' && navFr !== null) {
        navFr.innerHTML = "الفرنسية";
    }
    if (typeof navGe !== 'undefined' && navGe !== null) {
        navGe.innerHTML = "الألمانية";
    }
    if (typeof navMa !== 'undefined' && navMa !== null) {
        navMa.innerHTML = "الصينية";
    }
    if (typeof navAr !== 'undefined' && navAr !== null) {
        navAr.innerHTML = "العربية";
    }

    if (typeof headerH1 !== 'undefined' && headerH1 !== null) {
        headerH1.innerHTML = "مرحبًا";
    }
    if (typeof headerH2 !== 'undefined' && headerH2 !== null) {
        headerH2.innerHTML = "أنا برغز جي";
    }
    if (typeof headerH3 !== 'undefined' && headerH3 !== null) {
        headerH3.innerHTML = "مطور ويب";
    }

    if (typeof aboutH2 !== 'undefined' && aboutH2 !== null) {
        aboutH2.innerHTML = "عن نفسي";
    }
    if (typeof aboutP !== 'undefined' && aboutP !== null) {
        aboutP.innerHTML = "أنا شخص شغوف بالتكنولوجيا وأهتم كثيرًا بـ HTML و CSS و Bootstrap، ولدي اهتمام كبير بتجربة المستخدم (UX). شغفي بالبرمجة يمتد إلى ما هو أبعد من العمل، حيث يظهر في هواياتي مثل الرسم واستكشاف الألعاب الجديدة. أحب قراءة التقنيات الحديثة وتطبيقها في مشاريعي الإبداعية.";
    }

    if (typeof skillH21 !== 'undefined' && skillH21 !== null) {
        skillH21.innerHTML = "مطور ويب مستقل";
    }
    if (typeof skillP1 !== 'undefined' && skillP1 !== null) {
        skillP1.innerHTML = "2021 - حتى الآن";
    }
    if (typeof skillP2 !== 'undefined' && skillP2 !== null) {
        skillP2.innerHTML = "عملت مع العملاء في مشاريع تطوير الويب باستخدام المواقع المتجاوبة والمحسنة من حيث الأداء.";
    }
    if (typeof skillH22 !== 'undefined' && skillH22 !== null) {
        skillH22.innerHTML = "مصمم جرافيك مستقل";
    }
    if (typeof skillP3 !== 'undefined' && skillP3 !== null) {
        skillP3.innerHTML = "تعاونت مع الشركات لتصميم شعارات ولافتات ومواد دعائية باستخدام أدوات مثل Adobe Illustrator و Photoshop.";
    }
    if (typeof skillH23 !== 'undefined' && skillH23 !== null) {
        skillH23.innerHTML = "المهارات";
    }
    if (typeof skillP4 !== 'undefined' && skillP4 !== null) {
        skillP4.innerHTML = "مطور ويب Full Stack مع خبرة في العديد من التقنيات: HTML، CSS، JavaScript (بما في ذلك JQuery، API، والتلاعب بـ DOM)، Python، EJS، PHP وغير ذلك الكثير. دائمًا متحمس لإنشاء حلول مذهلة!";
    }
    if (typeof skillH24 !== 'undefined' && skillH24 !== null) {
        skillH24.innerHTML = "معلومات أخرى";
    }
    if (typeof skillP5 !== 'undefined' && skillP5 !== null) {
        skillP5.innerHTML = "بالإضافة إلى خبرتي التقنية، أنا شخص متحمس بطبيعتي، وأبحث دائمًا عن توسيع معرفتي ومهاراتي من خلال المشاريع الشخصية والتعاونية.";
    }

    if (typeof contactH2 !== 'undefined' && contactH2 !== null) {
        contactH2.innerHTML = "التواصل";
    }
    if (typeof contactP1 !== 'undefined' && contactP1 !== null) {
        contactP1.innerHTML = "أتطلع لسماع أفكارك ومشاريعك المثيرة. إذا كنت ترغب في التعاون، أو تحتاج إلى نصائح، أو فقط ترغب في إلقاء تحية، لا تتردد في التواصل. استخدم النموذج أدناه أو أرسل لي بريدًا إلكترونيًا مباشرة على berghzg@gmail.com.";
    }
    if (typeof contactH31 !== 'undefined' && contactH31 !== null) {
        contactH31.innerHTML = "ساعات العمل";
    }
    if (typeof contactP2 !== 'undefined' && contactP2 !== null) {
        contactP2.innerHTML = "من الإثنين إلى الجمعة: 12:00 - 20:00";
    }
    if (typeof contactH32 !== 'undefined' && contactH32 !== null) {
        contactH32.innerHTML = "وسائل التواصل الاجتماعي";
    }
    if (typeof contactP3 !== 'undefined' && contactP3 !== null) {
        contactP3.innerHTML = "تواصل معي عبر وسائل التواصل الاجتماعي:";
    }
    if (typeof contactH4 !== 'undefined' && contactH4 !== null) {
        contactH4.innerHTML = "الموقع";
    }

    // projects.html

    if (typeof projectH1 !== 'undefined' && projectH1 !== null) {
        projectH1.innerHTML = "المشاريع التي تحدد رحلتي";
    }
    if (typeof projectP !== 'undefined' && projectP !== null) {
        projectP.innerHTML = "استكشف أحدث أعمالي واكتشف شغفي بالإبداع والابتكار.";
    }
    if (typeof blogCardH5 !== 'undefined' && blogCardH5 !== null) {
        blogCardH5.innerHTML = "كتابة المدونات";
    }
    if (typeof blogCardP !== 'undefined' && blogCardP !== null) {
        blogCardP.innerHTML = "المشروع هو مدونة شخصية تم إنشاؤها باستخدام Node.js و Express و EJS و CSS و Bootstrap و JavaScript، مما يسمح للمستخدم بإنشاء وتحرير وحذف المنشورات. يعمل بدون اتصال، حيث يتم تخزين المعلومات محليًا، ولكن المنشورات التي يتم نشرها في وضع التصفح المتخفي ستفقد عند إغلاق التطبيق.";
    }
    if (typeof seeMore !== "undefined" && seeMore !== null) {
        seeMore.forEach(button => {
            button.innerHTML = "زيارة الموقع";
        });
    }
    if (typeof anime !== "undefined" && anime !== null) {
        anime.innerHTML = "AnimeFinder هو مشروع ويب يتيح للمستخدمين البحث عن الأنimes عبر النص أو الصورة. يوفر معلومات تفصيلية مثل الفريق، الشخصيات، الممثلين الصوتيين، المقطورات والمزيد. يمكن للمستخدمين إنشاء قوائم مخصصة لمتابعة تقدمهم في كل أنمي."
    }
}

// Menu

var lastScrollTop = 0;
window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar");
    if (navbar !== null) {
        var currentScroll = window.scrollY || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Role pra baixo
            navbar.style.top = "-84px";
        } else {
            // Role pra cima
            navbar.style.top = "0";
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    } else {
        console.error("Elemento .navbar não encontrado.");
    }
});

// projects.html

const idiomaSelecionado = navigator.language || navigator.userLanguage;

var html2 = document.getElementById("htmlaa")

