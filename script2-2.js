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



if (yourName.value !== '' && yourMail.value !== '' && yourPass.value !== '') { //como se le puede decir que abarque todo el objeto?

    messageAlert.innerText ='correcto'
    /* document.getElementById('miAlerta').style.display = 'block'; */ // no lo muestra pero esta

}else {
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


    //otra forma pero no sale
   messageAlert.inner = [
    `< class="alert alert-warning alert-dismissible" role="alert">`,
    `   Rellena todos los campos'`,
    //'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
    ].join('')
}

}


function saveDataStorage(key, element) {
    

    let arraySaved = JSON.parse(localStorage.getItem(key)) || [];
    arraySaved.push(element)
    localStorage.setItem(key, JSON.stringify(arraySaved))
    console.log(arraySaved)

    const arr = arraySaved.map(item => item.yourName);
    console.log(arr);

    for(let i=0; i<arraySaved.length; i++) {
        const newLi = document.createElement("li");
        
        newLi.innerHTML += `Hola ${arraySaved[i].yourname} tu  correo es ${arraySaved[i].yourmail} ${arraySaved[i].yourpass} ${arraySaved[i].yourpassrepeat}`
        userInfo.appendChild(newLi)
    }
}



form.addEventListener('submit' , onSubmit)

