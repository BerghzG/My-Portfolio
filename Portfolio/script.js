// Tadução

// variaveis da tradução

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





// funções da tradução

function portugues() {
    html.setAttribute('lang', 'pt-br')
    navAbout.innerHTML = "Sobre"
    navSkill.innerHTML = "Habilidades"
    navContact.innerHTML = "Contato"
    navProjects.innerHTML = "Projetos"
    navEn.innerHTML = "Inglês"
    navPt.innerHTML = "Português"
    navSp.innerHTML = "Espanhol"
    navFr.innerHTML = "Francês"
    navGe.innerHTML = "Alemão"
    navMa.innerHTML = "Mandarim"
    navAr.innerHTML = "Árabe"

    headerH1.innerHTML = "Ei você"
    headerH2.innerHTML = "Sou Berghz G"
    headerH3.innerHTML = "Um Desenvolvedor Web"

    aboutH2.innerHTML = "Sobre Mim"
    aboutP.innerHTML = "Sou um entusiasta da tecnologia apaixonado por HTML, CSS e Bootstrap, com um forte interesse em UX (User Experience). Meu fascínio por programação se estende além do trabalho, refletindo-se em meus hobbies, como desenhar e explorar novos jogos. adoro ler sobre novas tecnologias e aplicar esses conhecimentos em projetos criativos."

    skillH21.innerHTML = "Frelancer de Desenvolvimento Web"
    skillP1.innerHTML = "2021 - Presente"
    skillP2.innerHTML = "Trabalhei com clientes em projetos de desenvolvimento web, usando sites responsivos e com desempenho otimizado."
    skillH22.innerHTML = "Freelancer de Design Gráfico"
    skillP3.innerHTML = "Colaborei com empresas para criar logotipos, banners e materiais promocionais usando ferramentas como Adobe Illustrator e Photoshop."
    skillH23.innerHTML = "Habilidades"
    skillP4.innerHTML = "Desenvolvedor Web Full Stack com experiência em várias tecnologias: HTML, CSS, javaScript (incluindo JQuery, API e manipulação de DOM), Python, EJS, PHP e muito mais. Sempre animado para criar soluções incríveis!"
    skillH24.innerHTML = "Outras informações"
    skillP5.innerHTML = "Além da minha experiência técnica, sou um entusiasta por natureza, sempre buscando expandir meus conhecimentos e habilidades por meio de projetos pessoais e colaborativos."

    contactH2.innerHTML = "Contato"
    contactP1.innerHTML = "Espero ansioso para ouvir suas ideas e projetos interessantes. Se você está procurando colaborar, precisa de conselhos ou apenas quer dizer oi, não hesite em entrar em contato. Use o formulário abaixo ou envie um e-mail diretamente para berghzg@gmail.com"
    contactH31.innerHTML = "Horario de Funcionamento"
    contactP2.innerHTML = "Segunda a sexta: 12h - 20h"
    contactH32.innerHTML = "Redes Sociais"
    contactP3.innerHTML = "Conecte-se comigo nas redes sociais:"
    contactH4.innerHTML = "Localização"

   // projects.html

    projectH1.innerHTML = "Projetos que definem minha jornada" 
    projectP.innerHTML = "Explore meu trabalho mais recente e descubra minha paixão pela criatividade e inovação." 
    blogCardH5.innerHTML = "Escrevendo Blog" 
    blogCardP.innerHTML = "O projeto é um blog pessoal criado com Node.js, Express, EJS, CSS, Bootstrap e JavaScript, permitindo ao usuário criar, editar e excluir postagens. Funciona offline, armazenando informações localmente, mas as postagens feitas no modo de navegação anônima serão perdidas quando você fechar o aplicativo."

}

function ingles() {
    html.setAttribute('lang', 'en')
    navAbout.innerHTML = "About Me"
    navSkill.innerHTML = "Skills"
    navContact.innerHTML = "Contact"
    navProjects.innerHTML = "Projects"
    navEn.innerHTML = "English"
    navPt.innerHTML = "Portuguese"
    navSp.innerHTML = "Spanish"
    navFr.innerHTML = "French"
    navGe.innerHTML = "Germany"
    navMa.innerHTML = "Mandarin"
    navAr.innerHTML = "Arabic"

    headerH1.innerHTML = "Hey ya"
    headerH2.innerHTML = "I'm Berghz G"
    headerH3.innerHTML = "A Web Developer"

    aboutH2.innerHTML = "About Me"
    aboutP.innerHTML = "I'm a technology enthusiast passionate about HTML, CSS and Bootstrap, with strong interest in UX (User Experience). My fascionation with programming extends beyound work, reflecting on my hobbies, such as drawing and exploring new games. I love reading about technologies and applying this knowledge to creative projects."

    skillH21.innerHTML = "Web Development Freelancer"
    skillP1.innerHTML = "2021 - Present"
    skillP2.innerHTML = "I worked with clients on web development projects, using technologies such as HTML, CSS, JS, Python and Bootstrap. I created responsive websites and optimized performance."
    skillH22.innerHTML = "Graphic Design Freelancer"
    skillP3.innerHTML = "Collaborated with companies to create logos, banners and promotional materials using tools such as Adobe Illustrator and Photoshop."
    skillH23.innerHTML = "Skills"
    skillP4.innerHTML = "Full Stack Web Developer with expertise in various technologies: HTML, CSS, JavaScript (including JQuery, API and DOM manipulation), Python, Bootstrap, EJS, PHP and more. Always exited to create amazing solutions!"
    skillH24.innerHTML = "Other information"
    skillP5.innerHTML = "In addition to my technical experience, I am an enthusiast by nature, always seeking to expand my knowledge and skills through personal and collaborative projects."

    contactH2.innerHTML = "Contact"
    contactP1.innerHTML = "I look forward to hearing your exciting ideas and projects. If you're looking to collaborate, need advice or just want to say hi, don't hesitate to get in touch. Use the form below or send an email directly to berghzg@gmail.com"
    contactH31.innerHTML = "Opening Hours"
    contactP2.innerHTML = "Monday to Friday: 12am - 20pm"
    contactH32.innerHTML = "Social Media"
    contactP3.innerHTML = "Connect with me on social media:"
    contactH4.innerHTML = "Location"

  // projects.html

    projectH1.innerHTML = "Projects That Define My Journey"
    projectP.innerHTML = "Explore my latest work and discover my passion for creativity and innovation."
    blogCardH5.innerHTML = "Writing Blog"
    blogCardP.innerHTML = "The project is a personal blog created with Node.js, Express, EJS, CSS, Bootstrap, and JavaScript, allowing the user to create, edit, and delete posts. It works offline, storing information locally, but posts made in incognito mode will be lost when you close the application."
}

function espanhol() {
    html.setAttribute('lang', 'es')
    navAbout.innerHTML = "Acerca de Mí"
    navSkill.innerHTML = "Habilidades"
    navContact.innerHTML = "Contacto"
    navProjects.innerHTML = "Proyectos"
    navEn.innerHTML = "Inglés"
    navPt.innerHTML = "Portugués"
    navSp.innerHTML = "Español"
    navFr.innerHTML = "Francés"
    navGe.innerHTML = "Alemán"
    navMa.innerHTML = "Mandarín"
    navAr.innerHTML = "Árabe"

    headerH1.innerHTML = "Hola"
    headerH2.innerHTML = "Soy Berghz G"
    headerH3.innerHTML = "Un Desarrollador Web"

    aboutH2.innerHTML = "Sobre Mi"
    aboutP.innerHTML = "Soy un entusiasta de la technologia apasionado por HTML, CSS y Bootstrap, con un fuerte interés en UX (experiencia de Usuario). Mi fascinación por la programación se extiende más allá del trabajo y se refleja en mis pasatiempos, como dibujar y explorar nuevas tecnologias y aplicar estos conocimientos a proyectos creativos."

    skillH21.innerHTML = "Freelancer de Desarrolo Web"
    skillP1.innerHTML = "2021 - Presente"
    skillP2.innerHTML = "Trabajé con clientes en proyectos de desarollo web, utilizando sitios web responsivos y rendimiento optimizado."
    skillH22.innerHTML = "Freelancer de Diseño Gráfico"
    skillP3.innerHTML = "Colaboré con empresas para crear logotipos, banners y materiales promocionales utilizando herramientos como Adobe Illustrator y Photoshop."
    skillH23.innerHTML = "Habilidades"
    skillP4.innerHTML = "Desarrollador Web Full Stack con experiencia en varias tecnologías: HTML, CSS, JavaScript (incluyendo JQuery, API y manipulación de DOM), Python, EJS, PHP y más. ¡Siempre entusiasmado por crear soluciones increíbles!"
    skillH24.innerHTML = "Otra información"
    skillP5.innerHTML = "Además de mi experiencia técnica, soy un entusiasta por natureza, siempre buscando expandir mis conocimientos y habilidades a través de proyectos personales y colaborativos."

    contactH2.innerHTML = "Contacto"
    contactP1.innerHTML = "Espero escuchar tus interesantes ideas y proyetos. Si estás buscando colaborar, necesitas asesoramiento o simplemente quieres saludarme, en ponerte en contacto. Utiliza el formulario a continuación o envia un correo electrónico directamente berghzg@gmail.com"
    contactH31.innerHTML = "Horario de apertura"
    contactP2.innerHTML = "Lunes a viernes: 12:00 - 20:00"
    contactH32.innerHTML = "Redes Sociales"
    contactP3.innerHTML = "Conéctate conmigo en las redes sociales:"
    contactH4.innerHTML = "Ubicación"
}

function frances() {
    html.setAttribute('lang', 'fr')
    navAbout.innerHTML = "Sur Moi"
    navSkill.innerHTML = "Compétences"
    navContact.innerHTML = "Contact"
    navProjects.innerHTML = "Projects"
    navEn.innerHTML = "Anglais"
    navPt.innerHTML = "Portugais"
    navSp.innerHTML = "Espagnol"
    navFr.innerHTML = "Français"
    navGe.innerHTML = "Allemand"
    navMa.innerHTML = "Mandarin"
    navAr.innerHTML = "Arabe"

    headerH1.innerHTML = "Salut"
    headerH2.innerHTML = "Je suis Berghz G"
    headerH3.innerHTML = "Un Développeur Web"

    aboutH2.innerHTML = "À Propos de Mim"
    aboutP.innerHTML = "Vous êtes un passionné de technologie appliquée au HTML, CSS et Bootstrap, avec un fort intérêt pour I'UX (Expérience Utilisateur). Ma fascination pour la programmation s'étend à votre travail, reflétant mes passe-temps, comme créer et explorer de nouvelles technologies et appliquer ces connaissances à des projets créatifs."

    skillH21.innerHTML = "Développeur Web Indépendant"
    skillP1.innerHTML = "2021 - Présent"
    skillP2.innerHTML = "J'ai travaillé avec des clients sur des projets de développement web, en utilisant des sites web réactifs des performances optimisées."
    skillH22.innerHTML = "Conception Graphique indépendante"
    skillP3.innerHTML = "J'ai collaboré avec des entreprises pour créer des logos, des bannières et du matériel promotionnel à l'aide d'outils tels qu'Adobe Illustrator et Photoshop."
    skillH23.innerHTML = "Compétences"
    skillP4.innerHTML = "Développeur Web Full Stack avec une expertise dans diverses tecnologies: HTML, CSS, JavaScript (y compris JQuery, API, et manipulation DOM), Python, EJS, PHP et plus encore. Toujours enthousiaste à l'idée de créer des solutions étonnantes!"
    skillH24.innerHTML = "Autres informations"
    skillP5.innerHTML = "En plus de mon expérience technique, je suis un passionné de nature, cherchant toujours à élargir mes connaissances et mes compétences à travers des projets personnes et collaboratifs."

    contactH2.innerHTML = "Contractez-nous"
    contactP1.innerHTML = "J'ai hâte d'entendre vos idées et projects passionnants. Si vous cherchez à collaborer, avez besoin de conseils ou souhaitez simplement dire bonjour, n'hésitez pas à me contacter. Utilisez le formulaire ci-dessous ou envoyez un e-mail  directement à berghzg@gmail.com"
    contactH31.innerHTML = "Heures d'ouverture"
    contactP2.innerHTML = "Du lundi au vendredi: 12h00 - 20h00"
    contactH32.innerHTML = "Réseaux Sociaux"
    contactP3.innerHTML = "rejoignez-moi sur les réseaux sociaux:"
    contactH4.innerHTML = "Emplacement"

    // projects.html

    projectH1.innerHTML = "Proyectos que definen mi viaje" 
    projectP.innerHTML = "Explora mi último trabajo y descubre mi pasión por la creatividad y la innovación."
    blogCardH5.innerHTML = "Blog de escritura" 
    blogCardP.innerHTML = "El proyecto es un blog personal creado con Node.js, Express, EJS, CSS, Bootstrap y JavaScript, que permite al usuario crear, editar y eliminar publicaciones. Funciona sin conexión, almacenando información localmente, pero las publicaciones realizados en modo incógnito se perderán cuando cierres la aplicación".
}

function alemao() {
    html.setAttribute('lang', 'de')
    navAbout.innerHTML = "Über Mich"
    navSkill.innerHTML = "Fähigkeiten"
    navContact.innerHTML = "Kontakt"
    navProjects.innerHTML = "Projekte"
    navEn.innerHTML = "Englisch"
    navPt.innerHTML = "Portugiesisch"
    navSp.innerHTML = "Spanisch"
    navFr.innerHTML = "Französisch"
    navGe.innerHTML = "Deutschland"
    navMa.innerHTML = "Mandarin"
    navAr.innerHTML = "Arabisch"

    headerH1.innerHTML = "Hey"
    headerH2.innerHTML = "Ich Bin Berghz G"
    headerH3.innerHTML = "Ein Webentwicker"

    aboutH2.innerHTML = "Über Mich"
    aboutP.innerHTML = "ich bin ein begeisterter Tecknik-Enthusiast für HTML, CSS und Bootstrap und habe großes interesse an UX (User Experience). Meine faszination für das programm besteht darin, mich auf die arbeit einzulassen, mich über meine hobbys zu informieren, sie zu verstehen und neue spiele zu erkunden. Ich liebe neue technologien und nutze sie für kreative projekte."

    skillH21.innerHTML = "Freiberuflicher Webentwickler"
    skillP1.innerHTML = "2021 - Heute"
    skillP2.innerHTML = "Ich habe mit kunden an webentwicklungsprojekten gearbeitet und dabei responsive websites und eine optimierte leistung verwendet."
    skillH22.innerHTML = "Freiberuflicher Grafikdesigner"
    skillP3.innerHTML = "Ich habe mit Unternehmen zusammengearbeitet, um logos, banner und werbematerialien mit tools wie Adobe Illustrator und Photoshop zu erstellen."
    skillH23.innerHTML = "Fähigkeiten"
    skillP4.innerHTML = "Full-Stack-Webentwickler mit fachwissen in verschiedenen technologien: HTML< CSS< JavaScript (einschließlich JQuery, API und DOM-Manipulation), Python, EJS, PHP und mehr. Immer begeistert davon, tolle lösungen zu schaffen!"
    skillH24.innerHTML = "Weitere Informationen"
    skillP5.innerHTML = "Neben meiner technischen erfahrung bin ich von natur aus ein enthusiast und versuche immer, mein wissen und meine fähigkeiten durch persönliche und gemeinschaftliche projekte zu erweitern."

    contactH2.innerHTML = "Kontakt"
    contactP1.innerHTML = "Ich freue mich darauf, von ihren spannenden ideen und projekten zu hören. Ween sie an einer zusammenarbeit interessiert sind, rat brauchen oder einfach nur hallo sagen möchten, zögern sie nicht, konkakt mit mir aufzunehmen. verwenden sie das untenstehende fomular oder senden sie eine E-mail direkt an berghzg@gmail.com"
    contactH31.innerHTML = "Öffnungszeiten"
    contactP2.innerHTML = "Montag bis Freitag: 12:00 - 20:00 Uhr"
    contactH32.innerHTML = "Soziale Medien"
    contactP3.innerHTML = "Verbinden sie sich mit mir über soziale medien:"
    contactH4.innerHTML = "Standort"
}


function mandarim() {
    html.setAttribute('lang', 'zh')
    navAbout.innerHTML = "关于"
    navSkill.innerHTML = "技能"
    navContact.innerHTML = "接触"
    navProjects.innerHTML = "项目"
    navEn.innerHTML = "英语"
    navPt.innerHTML = "葡萄牙语"
    navSp.innerHTML = "西班牙语"
    navFr.innerHTML = "法语"
    navGe.innerHTML = "德语"
    navMa.innerHTML = "普通话"
    navAr.innerHTML = "阿拉伯"

    headerH1.innerHTML = "嘿，你"
    headerH2.innerHTML = "我是伯格兹·G"
    headerH3.innerHTML = "网络开发人员"

    aboutH2.innerHTML = "关于我"
    aboutP.innerHTML = "我是一名技术爱好者，对 HTML、CSS 和 Bootstrap 充满热情，对 UX（用户体验）有着浓厚的兴趣。我对编程的迷恋超出了工作范围，这反映了我的爱好，例如设计和探索新游戏。我喜欢它了解新技术并将这些知识应用到创意项目中。"

    skillH21.innerHTML = "网络开发自由职业者"
    skillP1.innerHTML = "2021 - 年至今"
    skillP2.innerHTML = "我与客户合作进行网络开发项目，使用响应灵敏、性能优化的网站。"
    skillH22.innerHTML = "平面设计自由职业者"
    skillP3.innerHTML = "我与公司合作，使用 Adob​​e Illustrator 和 Photoshop 等工具创建徽标、横幅和宣传材料。"
    skillH23.innerHTML = "技能"
    skillP4.innerHTML = "拥有多种技术经验的全栈 Web 开发人员：HTML、CSS、JavaScript（包括 JQuery、API 和 DOM 操作、Python、EJS、PHP 等。总是很高兴能够创建令人惊叹的解决方案！"
    skillH24.innerHTML = "其他信息"
    skillP5.innerHTML = "除了我的技术经验之外，我本质上还是一个狂热者，总是寻求通过个人和协作项目来扩展我的知识和技能。"

    contactH2.innerHTML = "接触"
    contactP1.innerHTML = "我期待听到您有趣的想法和项目。如果您希望合作、需要建议或只是想打个招呼，请随时与我联系。使用下面的表格或直接给我发电子邮件：berghzg@gmail .com"
    contactH31.innerHTML = "营业时间"
    contactP2.innerHTML = "周一至周五：中午 12 点至晚上 8 点"
    contactH32.innerHTML = "社交媒体"
    contactP3.innerHTML = "在社交媒体上与我联系："
    contactH4.innerHTML = "地点"
}

function arabe() {
    html.setAttribute('lang', 'ar')
    navAbout.innerHTML = "عن"
    navSkill.innerHTML = "مهارات"
    navContact.innerHTML = "اتصال"
    navProjects.innerHTML = "المشاريع"
    navEn.innerHTML = "نجليزي"
    navPt.innerHTML = "لبرتغالية"
    navSp.innerHTML = "لأسبانية"
    navFr.innerHTML = "فرنسي"
    navGe.innerHTML = "ألمانية"
    navMa.innerHTML = "الماندرين"
    navAr.innerHTML = "عربي"

    headerH1.innerHTML = "يا هذا"
    headerH2.innerHTML = "أنا بيرغز جي"
    headerH3.innerHTML = "مطور ويب"

    aboutH2.innerHTML = "ْعَنِّي"
    aboutP.innerHTML = "أنا متحمس للتكنولوجيا ولدي شغف كبير بـ HTML وCSS وBootstrap، ولدي اهتمام كبير بـ UX (تجربة المستخدم). إن افتتاني بالبرمجة يمتد إلى ما هو أبعد من العمل، وينعكس في هواياتي، مثل تصميم واستكشاف ألعاب جديدة. أحبها اقرأ عن التقنيات الجديدة وقم بتطبيق هذه المعرفة على المشاريع الإبداعية."

    skillH21.innerHTML = "متخصص في تطوير الويب"
    skillP1.innerHTML = "2021 - الحاضر"
    skillP2.innerHTML =  "لقد عملت مع العملاء في مشاريع تطوير الويب، باستخدام مواقع ويب سريعة الاستجابة ومحسنة الأداء."
    skillH22.innerHTML = "التصميم الجرافيكي مستقل"
    skillP3.innerHTML =  "لقد تعاونت مع شركات لإنشاء الشعارات واللافتات والمواد الترويجية باستخدام أدوات مثل Adobe Illustrator وPhotoshop."
    skillH23.innerHTML = "مهارات"
    skillP4.innerHTML = "مطور ويب Full Stack يتمتع بخبرة في تقنيات متعددة: HTML وCSS وJavaScript (بما في ذلك معالجة JQuery وAPI وDOM وPython وEJS وPHP والمزيد. متحمس دائمًا لإنشاء حلول مذهلة!"
    skillH24.innerHTML = "معلومات أخرى"
    skillP5.innerHTML = "بالإضافة إلى خبرتي التقنية، فأنا متحمس بطبيعتي، وأسعى دائمًا إلى توسيع معرفتي ومهاراتي من خلال المشاريع الشخصية والتعاونية."

    contactH2.innerHTML = "اتصال"
    contactP1.innerHTML =  "إنني أتطلع إلى سماع أفكارك ومشاريعك المثيرة للاهتمام. إذا كنت تتطلع إلى التعاون، أو تحتاج إلى نصيحة أو تريد فقط أن تقول مرحبًا، فلا تتردد في الاتصال بنا. استخدم النموذج أدناه أو راسلني عبر البريد الإلكتروني مباشرة على berghzg@gmail .com "
    contactH31.innerHTML = "ساعات العمل"
    contactP2.innerHTML = "من الاثنين إلى الجمعة: 12 ظهرًا - 8 مساءً"
    contactH32.innerHTML = "وسائل التواصل الاجتماعي"
    contactP3.innerHTML = "تواصل معي على وسائل التواصل الاجتماعي:"
    contactH4.innerHTML = "موقع"
}

// Menu

var lastScrollTop = 0;
window.addEventListener("scroll", function(){
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Role pra baixo
        this.document.querySelector(".navbar").style.top = "-84px"
    } else {
        // Role pra cima
        document.querySelector(".navbar").style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// projects.html

const idiomaSelecionado = navigator.language || navigator.userLanguage;

var html2 = document.getElementById("htmlaa")

