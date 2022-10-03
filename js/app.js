const form = document.getElementById('form')
const firstName = document.getElementById('name')
const lastName = document.getElementById('lastname')
const address = document.getElementById('address')
const date = document.getElementById('date')
const gender = document.getElementById('gender')
const about = document.getElementById('about')
const error = document.getElementById('error')
const users = document.getElementById('users')
const btn = document.getElementById('Add-btn')


const inputs = [firstName, lastName, address];
for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener('input', function () {
        if (!hasAppError === true) return
        error.textContent = "";
        hasAppError = false;
    })

}

form.addEventListener('submit', onSumbit);


let hasAppError = false;


function ValidInput(firstName, lastName, address) {
    if (firstName === "" || lastName === "" || address === "") {
        return false;
    }
    return true;
}

let ID = 0;
btn.addEventListener("click", () => {
    ID++
});


function draw() {

    let infoLocalStorage = JSON.parse(localStorage.getItem('userData'))

    const userContainer = document.createElement("div")
    userContainer.classList.add("userContainer")
    userContainer.id = ID
    
    const userInfo = document.createElement("div")
    
    const userName = document.createElement("div")
    userName.textContent = `
    ${infoLocalStorage[ID - userContainer.id].name}
    `
    const lname = document.createElement("div")
    lname.textContent = `
    
    ${infoLocalStorage[ID - userContainer.id].lname}
    `
    const adress = document.createElement("div")
    adress.textContent = `
    ${infoLocalStorage[ID - userContainer.id].adress}
    `
    const data = document.createElement("div")
    data.textContent = `
    ${infoLocalStorage[ID - userContainer.id].data}
    `
    const gender = document.createElement("div")
    gender.textContent = `
    ${infoLocalStorage[ID - userContainer.id].gender}
    `
    const about = document.createElement("div")
    about.textContent = `
    ${infoLocalStorage[ID - userContainer.id].about}
    `

    userInfo.appendChild(userName)
    userInfo.appendChild(lname)
    userInfo.appendChild(adress)
    userInfo.appendChild(data)
    userInfo.appendChild(gender)
    userInfo.appendChild(about)
    
    userContainer.appendChild(userInfo)
    
    userInfo.classList.add('table-info')
    userContainer.classList.add("info-delete")
    

    const deleteButton = document.createElement("div")
    deleteButton.textContent = "DLT"
    deleteButton.classList.add('delete-btn')
    deleteButton.addEventListener("click", () => {
        userContainer.remove()
    })
    userContainer.appendChild(deleteButton)

    for (let i = 0; i < infoLocalStorage.length; i++) {
        users.appendChild(userContainer)
    }


}

function onSumbit(event) {
    event.preventDefault();

    const userName = firstName.value;
    const userSurname = lastName.value;
    const userAddress = address.value;
    const userDate = date.value;
    const userGender = gender.value;
    const userAbout = about.value;
    let userNumber = ID;

    let userData = [];
    let showData = {
        name: userName,
        lname: userSurname,
        adress: userAddress,
        data: userDate,
        sex: userGender,
        about: userAbout,
        number: userNumber
    };
    userData.push(showData);
    userData = userData.concat(JSON.parse(localStorage.getItem('userData') || '[]'))
    localStorage.setItem('userData', JSON.stringify(userData))



    const isValidValues = ValidInput(userName, userSurname, userAddress);

    if (!isValidValues) {
        error.textContent = 'ERROR'
        hasAppError = true;
        return;
    }
    draw();
}

window.addEventListener('load', draw);