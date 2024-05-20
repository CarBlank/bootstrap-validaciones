const userName = document.getElementById('userName')
const userMail = document.getElementById('userMail')
const userPass = document.getElementById('userPass')
const userPassRepeat = document.getElementById('userPassRepeat')

const alerts = document.getElementById('alerts')
const submitButton = document.getElementById('liveAlertBtn')


function validation(data){

//desestructurando
const {name, email, password, password2} = data //data es el parametro que luego al llamar a la funcion se sustituye por la variable que queremos que ejecute

if(name === '' || !email || !password.length > 0) {
    return messageAlert.innerHTML += `<div class="alert alert-warning" role="alert">
                                        Rellena todos los campos
                                      </div>`
} else {
    if(!/(\w+?@\w+?\x2E.+)/.test(email) /* !== true */) {
        return messageAlert.innerHTML += `<div class="alert alert-warning" role="alert">
                                        Algo va mal!
                                      </div>`
    }
    if(!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(password) /* !== true */){
        return messageAlert.innerHTML += `<div class="alert alert-warning" role="alert">
                                            Algo va mal!
                                        </div>` 
    }
    if(password !== password2){
        return messageAlert.innerHTML += `<div class="alert alert-warning" role="alert">
                                            Algo va mal!
                                        </div>`
    }
    
}

/* if(data.name === '' || !data.email || !data.password.length > 0) {
} */

localStorage.setItem('userDataStorage', JSON.stringify(userDataStorage))


}

function onSubmit(event) {
    event.preventDefault()

    let userDataStorage = {
        name: userName.value,
        email: userMail.value,
        password: userPass.value,
        password2: userPassRepeat.value
    }
   validation(userDataStorage)
}

submitButton.addEventListener('click', onSubmit)