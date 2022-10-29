
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");
let userAge = document.getElementById("age");
let userPassword = document.getElementById("password");
let userRepetPassword = document.getElementById("repetPassword");
let userNameAlert = document.getElementById("namealert");
let userEmailAlert = document.getElementById("emailalert");
let userPhoneAlert = document.getElementById("phonealert");
let userAgeAlert = document.getElementById("agealert");
let userpasswordAlert = document.getElementById("passwordalert");
let userRepasswordAlert = document.getElementById("repasswordalert");


function SubmitValid() {
    if (userNameValid() == true) {
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        userNameAlert.classList.replace("d-block", "d-none")
        userNameAlert.classList.replace("d-block", "d-none")
    }
    else{
        userName.classList.replace("is-valid", "is-invalid")
            userNameAlert.classList.replace("d-none", "d-block")
    }if (useremailValid() == true) {
        userEmail.classList.remove("is-invalid")
            userEmail.classList.add("is-valid")
            userEmailAlert.classList.replace("d-block", "d-none")
            userEmailAlert.classList.replace("d-block", "d-none")
        } else {
            userEmail.classList.replace("is-valid", "is-invalid")
            userEmailAlert.classList.replace("d-none", "d-block")
        }if (userPhoneValid() == true) {
            userPhone.classList.remove("is-invalid")
            userPhone.classList.add("is-valid")
            userPhoneAlert.classList.replace("d-block", "d-none")
            userPhoneAlert.classList.replace("d-block", "d-none")
        } else {
            userPhone.classList.replace("is-valid", "is-invalid")
            userPhoneAlert.classList.replace("d-none", "d-block")
        }
        if (userAgeValid() == true) {
            userAge.classList.remove("is-invalid")
            userAge.classList.add("is-valid")
            userAgeAlert.classList.replace("d-block", "d-none")
            userAgeAlert.classList.replace("d-block", "d-none")
        } else {
            userAge.classList.replace("is-valid", "is-invalid")
            userAgeAlert.classList.replace("d-none", "d-block")
        }if (userpassordValid()) {
            userPassword.classList.remove("is-invalid")
            userPassword.classList.add("is-valid")
            userpasswordAlert.classList.replace("d-block", "d-none")
            userpasswordAlert.classList.replace("d-block", "d-none")
        } else {
            userPassword.classList.replace("is-valid", "is-invalid")
            userpasswordAlert.classList.replace("d-none", "d-block")
        } if (userRepassordValid()) {
            userRepetPassword.classList.remove("is-invalid")
            userRepetPassword.classList.add("is-valid")
            userRepasswordAlert.classList.replace("d-block", "d-none")
            userRepasswordAlert.classList.replace("d-block", "d-none")
        } else {
            userRepetPassword.classList.replace("is-valid", "is-invalid")
            userRepasswordAlert.classList.replace("d-none", "d-block")
        }
}

// Name
function userNameValid() {
    let userNValid= /^[a-zA-Z ]+$/gm;
    if(userNValid.test(userName.value)==true){
        return true;
        }else{
            return false;
        }
}

// Email

// phone

function userPhoneValid() {
    var regex =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(regex.test(userPhone.value)==true){
        return true;
        }else{
            return false;
        }
}
// Age
function userAgeValid() {
    var regex =/^[1-9][0-9]?$|^100$/;
    if(regex.test(userAge.value)==true){
        return true;
        }else{
            return false;
        }
}
// password
function userpassordValid() {
    var regex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regex.test(userPassword.value)==true){
        return true;
        }else{
            return false;
        }
}
function userRepassordValid() {
    return userPassword.value == userRepetPassword.value
}


