// troca de tema

document.getElementById("ligaDesliga").addEventListener("change", function() {
	const currentTheme = this.checked ? "dark" : "light";
	document.body.setAttribute("data-bs-theme", currentTheme);
})

// tratamento do modal started

const startedButton = document.getElementById("saveStarted")
const inputStartedField = document.getElementById("inputText")
const textAreaStarted = document.getElementById("inputTextarea")
const errorMessage = document.getElementById("errorMessage")

inputStartedField.addEventListener("input", checkInput)
textAreaStarted.addEventListener("input", checkInput)

startedButton.addEventListener('click', function() {
	if (inputStartedField.value.trim() === "" && textAreaStarted.value.trim() === "") {
		errorMessage.textContent = "* Write something first"
		errorMessage.style.display = "block"
	} else {
		errorMessage.style.display = "none";
	}

})

function checkInput() {
	if (inputStartedField.value.trim() !== "" || textAreaStarted.value.trim() !== "") {
		errorMessage.style.display = "none"
	}
}


// posts.ejs


function hora() {
	const horas = new Date().getHours()
	let saudacao
	
	if (horas < 12) {
		saudacao = "Good Morning"
	} else if (horas < 18) {
		saudacao = "Good Afternoon"
	} else {
		saudacao = "Good Evening"
	}
	
	document.getElementById("title-post").innerText = saudacao
}

hora()

function showViewModal(id) {
	fetch(`/posts/${id}`)
		.then(response => response.json())
		.then(data => {
			
			document.getElementById('view-modal-title').innerText = data.title
			document.getElementById('view-modal-body').innerText = data.text;
			
			
		})
		.catch(error => console.log("Erro ao buscar o post:", error));
}

function showEditModal(id, title, text) {
	document.getElementById('edit-post-id').value = id;
	document.getElementById('edit-title').value = title;
	document.getElementById('edit-text').value = text;
	document.getElementById('edit-form').action = `/posts/${id}`;
}

