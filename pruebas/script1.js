const yourName = document.getElementById('userName')
const yourMail = document.getElementById('userMail')
const yourPass = document.getElementById('userPass')
const yourPassRepeat = document.getElementById('userPassRepeat')
const sendbtn = document.querySelector('btn')
const form = document.querySelector('form')

const userInfo = document.getElementById('content')

function onSubmit(event) {
    event.preventDefault() 
    let elementStorage = {
        yourName: yourName.value,
        yourMail: yourMail.value,
        yourPass: yourPass.value,
    }
    comprobacion(elementStorage)

    userInfo.innerHTML = "";

    // saveDataStorage()
    // const userFromStorage = JSON.parse(localStorage.getItem('userData'))
    
    // userInfo.innerHTML = `<p> Hola  ${userFromStorage.yourName} tu  correo es ${userFromStorage.yourMail} ${userFromStorage.yourPass} ${userFromStorage.yourPassRepeat}</p>`
    // console.log(userFromStorage);
}
    function comprobacion(params) {
    //regex + si da true  => addArrayLocalStorage
    
    addArrayLocalStorage("userData", elementStorage)
    }

function addArrayLocalStorage(key, element) {
    let arraySaved = JSON.parse(localStorage.getItem(key)) || [];
    arraySaved.push(element)
    console.log(arraySaved)
    // localStorage.setItem(key, JSON.stringify(arraySaved))

    // for(let i=0; i<arraySaved.length; i++) {
    //     const newLi = document.createElement("li");
    //     newLi.innerHTML = `Hola  ${arraySaved[i].yourName} tu  correo es ${arraySaved[i].yourMail} ${arraySaved[i].yourPass} ${arraySaved[i].yourPassRepeat}`
    //     userInfo.appendChild(newLi)
    // }

  /*   arraySaved.forEach(element => {
        const newLi = document.createElement("li");
        newLi.innerHTML = `Hola  ${element.yourName} tu  correo es ${element.yourMail} ${element.yourPass} ${element.yourPassRepeat}`
        userInfo.appendChild(newLi)
    }); */
}

// function saveDataStorage() {
//     let newLocalItem = localStorage.setItem(
//         'userData' , 
//         JSON.stringify({
//             yourName: yourName.value,
//             yourMail: yourMail.value,
//             yourPass: yourPass.value,
//             yourPassRepeat: yourPassRepeat.value,
//         }
//     ))

// }

form.addEventListener('submit' , onSubmit)
