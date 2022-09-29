const firstName = document.getElementById('formFirstname');
const lastName = document.getElementById('formLastName');
const address = document.getElementById('address');
const date = document.getElementById('date');
const male = document.getElementById('male');
const feMale = document.getElementById('female');
const button = document.getElementById('button');
const form = document.getElementById('form');

function validation() {

    const fname = document.getElementById("formFirstname").value;
    const lname = document.getElementById("formLastname").value;
    const address = document.getElementById("address").value;
    const date = document.getElementById('date').value;
    const male = document.getElementById('male').value;
    const feMale = document.getElementById('female').value;
    const button = document.getElementById('button').value;
    const form = document.getElementById('form').value;
    //alerts on empty inputs
    if (fname == "") {
      alert("Enter First Name");
    }else if(lname == '') {
        alert("Enter Last Name");
    }else if(address == ''){
        alert("Enter Address");
    }
    //creating table
    
}



button.addEventListener("click",(e)=>{
    console.log('clicked');
});