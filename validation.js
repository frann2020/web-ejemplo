const form = document.querySelector('#info')
const formNameInput = document.querySelector("#nameInput")
const formApellidoInput = document.querySelector("#ApellidoInput")
const formTelefono = document.querySelector("#TelefonoInput")
const formEmail = document.querySelector("#EmailInput")

const nameHelp = document.querySelector("#nameHelp")
const apellidoHelp = document.querySelector("#apellidoHelp")
const telefonoHelp = document.querySelector("#telefonoHelp")
const emailHelp = document.querySelector("#emailHelp")

form.addEventListener("submit",(event) => {event.preventDefault()
	if (formNameInput.value === "" || formApellidoInput.value === "" || formTelefono.value === "" || formEmail.value === "") {
		if (formNameInput.value === ""){
			nameHelp.innerText = "Completar Informacion."
		}
		if (formApellidoInput.value === "") {
			apellidoHelp.innerText = "Completar Informacion."
		}
		if (formTelefono.value === "") {
			telefonoHelp.innerText = "Completar Informacion"
		}
		if (formEmail.value === "") {
			emailHelp.innerText = "Completar Informacion"
		}
	} else {
		form.submit();
	}
})

