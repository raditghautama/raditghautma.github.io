/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // Check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '' ){
      // Add and remove color
      contactMessage.classList.remove('color-blue')
      contactMessage.classList.add('color-red')

      // Show message	
      contactMessage.textContent = 'Write all the input fields 📩'
    }else{
      // serviceID - templateID - #form - publicKey
      emailjs.sendForm('service_y454to9','template_9ng0cru','#contact-form','5fyMmOS6IxD1OQDfh')
      .then(() =>{
        // Show message and add color
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent ☑️'

        // Remove message after five seconds
        setTimeout(() =>{
          contactMessage.textContent = ''
        }, 5000)
      }, (error) =>{
        alert('OOPS! SOMETHING HAS FAILED...', error)
      })

      // To clear the input field
      contactName.value = ''
      contactEmail.value = ''
      contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)