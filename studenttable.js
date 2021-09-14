function addRow() {
    var studentTable = document.getElementById("studentTable");
    var nameForm = document.getElementById("nameForm");
    var emailForm = document.getElementById("emailForm");
    var levelForm = document.getElementById("levelForm");
    var nameWarning = document.getElementById("nameWarning");
    var emailWarning = document.getElementById("emailWarning");
    nameWarning.hidden = true;
    emailWarning.hidden = true; 
    if (!validateName(nameForm.value) || !validateEmail(emailForm.value)) {
        if (!validateName(nameForm.value)) {
            nameWarning.hidden = false;
        }
        if (!validateEmail(emailForm.value)) {
            emailWarning.hidden = false;
        }

        return;
    }

    var row = studentTable.insertRow(-1);
    var name = row.insertCell(0);
    name.innerHTML = nameForm.value;
    nameForm.value = ""; //clear form

    var email = row.insertCell(1);
    email.innerHTML = emailForm.value;
    emailForm.value = ""; //clear form
    
    var level = row.insertCell(2);
    level.innerHTML = levelForm.value;
}

function validateName(name) {
    var regex = /^[a-z ,.'-]+$/;
    return regex.test(name);
}

function validateEmail(email) {
    // email regex taken from http://www.tutorialspark.com/javascript/JavaScript_Regular_Expression_Form_Validation.php
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    return regex.test(email);
}