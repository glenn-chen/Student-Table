function addRow() {
    var studentTable = document.getElementById("studentTable");
    var row = studentTable.insertRow(-1);

    var nameForm = document.getElementById("nameForm");
    var name = row.insertCell(0);
    name.innerHTML = nameForm.value;
    nameForm.value = ""; //clear form

    var emailForm = document.getElementById("emailForm");
    var email = row.insertCell(1);
    email.innerHTML = emailForm.value;
    emailForm.value = ""; //clear form

    var levelForm = document.getElementById("levelForm");
    var level = row.insertCell(2);
    level.innerHTML = levelForm.value;
}