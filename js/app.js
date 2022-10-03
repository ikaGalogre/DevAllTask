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
    userInfo.textContent = `
    
    Name: ${infoLocalStorage[ID - userContainer.id].name}
    Surname:  ${infoLocalStorage[ID - userContainer.id].lname}
    Address:  ${infoLocalStorage[ID - userContainer.id].adress}
    Date of Birth:  ${infoLocalStorage[ID - userContainer.id].data}
    gender:  ${infoLocalStorage[ID - userContainer.id].gender}
    about: ${infoLocalStorage[ID - userContainer.id].about}
    `
    userContainer.appendChild(userInfo)

    const deleteButton = document.createElement("div")
    deleteButton.textContent = "Delete"
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