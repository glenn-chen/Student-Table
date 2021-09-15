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
    row.name = nameForm.value;
    nameForm.value = ""; //clear form

    var emailCell = row.insertCell(1);
    emailCell.innerHTML = emailForm.value;
    row.email = emailForm.value;
    emailForm.value = ""; //clear form
    
    var levelCell = row.insertCell(2);
    levelCell.innerHTML = levelForm.value;
    row.level = levelForm.value;

    var editButtonCell = row.insertCell(3);
    editButtonCell.innerHTML = "<input type='button' value='Edit' onclick='editRow(this)' />";

    var deleteButtonCell = row.insertCell(4);
    deleteButtonCell.innerHTML = "<input type='button' value='Delete' onclick='deleteRow(this)' />";
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editRow(button) {
    var row = button.parentNode.parentNode;
    // Name
    row.cells[0].innerHTML = "<fieldset><input value='"+row.name+"' onchange='onNameChange(this)' required></fieldset>";
    // Email
    row.cells[1].innerHTML = "<fieldset><input value='"+row.email+"' onchange='onEmailChange(this)' required type='email'></fieldset>";
    // Level
    row.cells[2].innerHTML = "<select value='"+row.level+"' onchange='onLevelChange(this)'>"
        + (row.level === 'Freshman' ? "<option selected" : "<option")
        + " value='Freshman'>Freshman</option>"
        + (row.level === 'Sophomore' ? "<option selected" : "<option")
        + " value='Sophomore'>Sophomore</option>"
        + (row.level === 'Junior' ? "<option selected" : "<option")
        + " value='Junior'>Junior</option>"
        + (row.level === 'Senior' ? "<option selected" : "<option")
        + " value='Senior'>Senior</option>"
      + "</select>";
    // Edit Button Column
    row.cells[3].innerHTML = "<input type='button' value='Save' onclick='saveRow(this)' />";

    // Change delete button to cancel button
    row.cells[4].innerHTML = "<input type='button' value='Cancel' onclick='cancelEdit(this)' />";
}
function onNameChange(input) {
    var row = input.parentNode.parentNode.parentNode;
    if (validateName(input.value)) {
        row.tempname = input.value;
        input.setCustomValidity('');
    }
    else {
        input.setCustomValidity('invalid name');
    }
}

function onEmailChange(input) {
    var row = input.parentNode.parentNode.parentNode;
    if (validateEmail(input.value)) {
        row.tempemail = input.value;
    }
}

function onLevelChange(select) {
    var row = select.parentNode.parentNode;
    row.templevel = select.value;
}

function saveRow(button) {
    var row = button.parentNode.parentNode;
    row.name = row.tempname;
    row.email = row.tempemail;
    row.level = row.templevel;
    row.cells[0].innerHTML = row.name;
    row.cells[1].innerHTML = row.email;
    row.cells[2].innerHTML = row.level;//document.getElementById("levelForm-" + row.id).value;
    // Edit Button
    row.cells[3].innerHTML = "<input type='button' value='Edit' onclick='editRow(this)' />";
    row.cells[4].innerHTML = "<input type='button' value='Delete' onclick='deleteRow(this)' />";
    
}

function cancelEdit(button) {
    var row = button.parentNode.parentNode;
    row.cells[0].innerHTML = row.name;
    row.cells[1].innerHTML = row.email;
    row.cells[2].innerHTML = row.level;
    row.cells[3].innerHTML = "<input type='button' value='Edit' onclick='editRow(this)' />";
    row.cells[4].innerHTML = "<input type='button' value='Delete' onclick='deleteRow(this)' />";
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