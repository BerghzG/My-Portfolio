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
	let textosaudacao
	
	if (horas < 12) {
		saudacao = "Good Morning";
		textosaudacao = "Start the day by exercising your mind!"
	} else if (horas < 18) {
		saudacao = "Good Afternoon";
		textosaudacao = "Take the opportunity to write down something that's on your mind!"
	} else {
		saudacao = "Good Evening";
		textosaudacao = "Before you go to bed, share your thoughts from the day!"
	}
	
	document.getElementById("title-post").innerText = saudacao
	document.getElementById("p-title-post").innerText = textosaudacao
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
  if (!isNaN(parseInt(id, 10))) {
    document.getElementById('edit-title').value = title;
    document.getElementById('edit-text').value = text;

    // Seleciona o formulário de edição pelo id
    const editForm = document.getElementById(`edit-form-${id}`);
    
    // Remove event listener anterior, se houver
    const existingListener = editForm.getAttribute('data-listener');
    if (existingListener) {
      editForm.removeEventListener('submit', existingListener);
    }
    
    // Adiciona o listener ao formulário
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(editForm);
      fetch(`/posts/${id}`, {
        method: 'PUT',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro ao atualizar o post.');
        }
      })
      .then(data => {
        console.log('Post atualizado:', data);
        location.reload(); // Recarrega a página após a edição
      })
      .catch(error => console.error(error));
    };
    
    editForm.addEventListener('submit', handleSubmit);
    editForm.setAttribute('data-listener', handleSubmit);
  } else {
    console.error("Invalid ID:", id);
  }
}

let postIdToDelete = null;

document.addEventListener('DOMContentLoaded', () => {
    // Função para mostrar o modal
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));

    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(button => {
        button.addEventListener('click', function() {
            postIdToDelete = this.getAttribute('data-post-id');
        });
    });

    document.getElementById('confirmDeleteButton').addEventListener('click', function() {
        if (postIdToDelete !== null) {
            fetch(`/posts/${postIdToDelete}`, {
                method: 'DELETE'
            }).then(response => {
                if (response.ok) {
                    location.reload();  // Recarregue a página ou remova o item da DOM
                } else {
                    alert('Erro ao deletar o post.');
                }
            }).catch(error => {
                console.error('Erro:', error);
            });
            deleteModal.hide(); // Ocultar o modal após a confirmação
        }
    });
});

