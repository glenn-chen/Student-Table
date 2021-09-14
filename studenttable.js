function addRow() {
    var studentTable = document.getElementById("studentTable");
    var nameForm = document.getElementById("nameForm");
    var emailForm = document.getElementById("emailForm");
    var levelForm = document.getElementById("levelForm");
    var nameWarning = document.getElementById("nameWarning");
    var emailWarning = document.getElementById("emailWarning");
    nameWarning.hidden = true;
    emailWarning.hidden = true; 
    if (!validateInputs(nameForm, emailForm))
        return;

    var row = studentTable.insertRow(-1);
    var nameCell = row.insertCell(0);
    nameCell.innerHTML = nameForm.value;
    nameForm.value = ""; //clear form

    var emailCell = row.insertCell(1);
    emailCell.innerHTML = emailForm.value;
    emailForm.value = ""; //clear form
    
    var levelCell = row.insertCell(2);
    levelCell.innerHTML = levelForm.value;

    var deleteButtonCell = row.insertCell(3);
    deleteButtonCell.innerHTML = "<input type='button' value='Delete' onclick='deleteRow(this)' />";
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function validateInputs(nameForm, emailForm) {
    if (!validateName(nameForm.value) || !validateEmail(emailForm.value)) {
        if (!validateName(nameForm.value)) {
            nameWarning.hidden = false;
        }
        if (!validateEmail(emailForm.value)) {
            emailWarning.hidden = false;
        }
        return false;
    }
    return true;
}

function validateName(name) {
    var regex = /^[A-Za-z ,.'-]+$/;
    return regex.test(name);
}

function validateEmail(email) {
    // email regex taken from http://www.tutorialspark.com/javascript/JavaScript_Regular_Expression_Form_Validation.php
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    return regex.test(email);
}