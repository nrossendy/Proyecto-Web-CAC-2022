/* function ValidateActInsert() {
  var specialChars = /[^a-zA-Z0-9 ]/g;
  if (document.actorInsert.actInsert.value.match(specialChars)) {
      alert ("Only characters A-Z, a-z and 0-9 are allowed!")
      document.actorInsert.actInsert.focus();
      return false;
  }
  return (true);
} */
const dots = document.querySelector('.dots');
dots.addEventListener('click', e => {
  const target = e.target;
  if (!target.matches('.dot')) {
	  return;
  }
  
  const index = Array.from(dots.children).indexOf(target);
  const selector = `.box:nth-child(${index + 1})`;
  const box = document.querySelector(selector)
  box.scrollIntoView({
    behavior: 'smooth',
    inline: 'start'
  })
})

function contactForm() {
    var contactName = document.getElementById("nombre").value;
    var contactEmail = document.getElementById("email").value;
    var contactMessage = document.getElementById("mensaje").value;
    var contactError_message = document.getElementById("error_message");
  
    contactError_message.style.padding = "1em";
  
    var text;
  
    if (contactName.length < 2) {
      text = "El nombre debe tener al menos 3 caracteres";
      contactError_message.innerHTML = text;
      return false;
    }
  
    if (contactEmail.indexOf("@") == -1 || contactEmail.length < 6) {
      text = "Ingrese una dirección de email válida";
      contactError_message.innerHTML = text;
      return false;
    }
  
    if (contactMessage.length <= 30) {
      text = "Message should have at least 30 characters";
      contactError_message.innerHTML = text;
      return false;
    }
  
    alert("¡Gracias por tu mensaje!");
    return true;
  
  }

  