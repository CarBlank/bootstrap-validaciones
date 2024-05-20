const yourName = document.getElementById('userName')
const yourMail = document.getElementById('userMail')
const yourPass = document.getElementById('userPass')
const yourPassRepeat = document.getElementById('userPassRepeat')
const form = document.querySelector('form')

const userInfo = document.getElementById('content')

const messageAlert = document.querySelector('.messageAlert')




function onSubmit(event) {
    event.preventDefault()

    let userDataStorage = {
        yourname: yourName.value,
        yourmail: yourMail.value,
        yourpass: yourPass.value,
    }
    /* console.log('esto es' , userDataStorage) */
    validation()

    userInfo.innerHTML = ""
    
    saveDataStorage('userData', userDataStorage)
}



function validation() {

    //muestra campos con checks--------------------------------------------------------
    /* (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })() 
      ----------------------------------------------------------------------*/

    if (yourName.value === '' || yourMail.value === '' || yourPass.value === '') { //como se le puede decir que abarque todo el objeto?

        messageAlert.innerHTML += `<div class="alert alert-warning" role="alert">
        Rellena todos los campos
        </div>`
    
    }else if(/(\w+?@\w+?\x2E.+)/.test(yourMail.value) !== true) {
        messageAlert.innerHTML = 'Usa un mail correcto'
        
    }else if(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(yourPass.value) !== true){
    
        messageAlert.innerHTML = 'Usar una contraseña correcta'
    
    }else if(yourPassRepeat.value !== yourPass.value){
        messageAlert.innerHTML = 'La contraseña no coincide'

    }else{
        messageAlert.innerText = 'Se han enviado tus datos correctamente'

        setTimeout(function () {
            messageAlert.innerHTML = ''
          }, 3000)
        
        
          form.reset()
         
     }
    }
    

/* 
if (yourName.value !== '' && yourMail.value !== '' && yourPass.value !== '') { //como se le puede decir que abarque todo el objeto?

    messageAlert.innerText ='correcto' */
    /* document.getElementById('miAlerta').style.display = 'block'; */ // no lo muestra pero esta

/* }else { */
    //doble click para que salga

    /* const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    //'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
        appendAlert('Rellena todos los campos', 'warning')
  })
} */

/* 
    //otra forma pero no sale
   messageAlert.inner = [
    `< class="alert alert-warning alert-dismissible" role="alert">`,
    `   Rellena todos los campos'`,
    //'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
    ].join('')
}
 */
    


function saveDataStorage(key, element) {
    
    let arraySaved = JSON.parse(localStorage.getItem(key)) || [];
    arraySaved.push(element)
    localStorage.setItem(key, JSON.stringify(arraySaved))
    console.log(arraySaved)

    const arr = arraySaved.map(item => item.yourName);
    console.log(arr);

    for(let i=0; i<arraySaved.length; i++) {
        const newLi = document.createElement("li");
        
        newLi.innerHTML += `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${arraySaved[i].yourname}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${arraySaved[i].yourmail}</h6>
          <p class="card-text"> ${arraySaved[i].yourpass}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>`
        
        userInfo.appendChild(newLi)
    }
}



form.addEventListener('submit' , onSubmit)

