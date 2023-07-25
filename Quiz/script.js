const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./perguntas.js"

let currentIndex = 0;
let questionscorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";
    
    currentIndex = 0;
    questionscorrect = 0;
    loadQuestion();
}

function nextQuestion(e) {
    if(e.target.getAttribute("data-correct") === "true") {
        questionscorrect++
    }

    if(currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish()
    }
}

function finish() {
    textFinish.innerHTML = `Você acertou ${questionscorrect} de ${questions.length}`;
    if(questionscorrect <= 3) {
        textFinish.innerHTML = `Você acertou ${questionscorrect} de ${questions.length}. Você precisa assistir mais a série...`
    } else if(questionscorrect >= 4 && questionscorrect <= 6) {
        textFinish.innerHTML = `Você acertou ${questionscorrect} de ${questions.length}. 
        <p>Seu conhecimento acerca da série é mediana.<p>`
    } else if(questionscorrect >= 7 && questionscorrect <= 9) {
        textFinish.innerHTML = `Você acertou ${questionscorrect} de ${questions.length}. 
        <p>Parabéns! você conhece muito bem a série.<p>`
    } else if (questionscorrect = 10) {
         textFinish.innerHTML = `WOW! Meus Parabéns, você acertou todas as perguntas.
         <p> Você é realmente um fã da série!<p>`
    }



    content.style.display = "none";
    contentFinish.style.display = "flex"
}

function loadQuestion() {
    spnQtd.innerHTML = `Questão ${currentIndex + 1} de ${questions.length}`;
    const item = questions[currentIndex];
    answer.innerHTML = "";
    question.innerHTML = item.question;

    item.answer.forEach((answers) => {
        const div = document.createElement("div");

        div.innerHTML = `<button class="answers" data-correct="${answers.correct}">
          ${answers.option}
        </button>
        `;

        answer.appendChild(div)
    });

    document.querySelectorAll(".answers").forEach((item) => {
        item.addEventListener("click", nextQuestion)
    })
}

loadQuestion()