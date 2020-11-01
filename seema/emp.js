function onFormSubmit() {
    if (validate()) {
        var forData = readFormData();
        console.log(forData);
        insertNewRecord(forData);
        resetForm();
    }
}
function readFormData() {
    var forData = {};
    forData['employeeName'] = document.getElementById('employeeName').value;
    forData['employeeId'] = document.getElementById('employeeId').value;
    forData['employeeDesignation'] = document.getElementById('employeeDesignation').value;
    forData['empJoin'] = document.getElementById('empJoin').value;
    forData['phone'] = document.getElementById('phone').value;
    forData['empAdd'] = document.getElementById('empAdd').value;
    return forData;
}
function insertNewRecord(data) {
    var table = document.getElementById("empList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length - 1);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.employeeName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.employeeId;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.employeeDesignation;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.empJoin;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.phone;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.empAdd;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = ` <br>
  <a onClick="onDelete(this)"><span class="material-icons">
  cancel
  </span></a>`;
}
function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById("empList").deleteRow(row.rowIndex);
    resetForm();
}
function resetForm() {
    document.getElementById('employeeName').value = "";
    document.getElementById('employeeId').value = "";
    document.getElementById('employeeDesignation').value = "";
    document.getElementById('empJoin').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('empAdd').value = "";
}
function deleteAll() {
    if ((confirm("Do you really want to delete all")) == true) {
        window.location.reload()
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("employeeName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
function validate1() {
    let patt1 = /[0-9]/g;
    var regx = /^[7-9][0-9]{9}$/;
    let ppatrn = /[a-zA-Z]/g;
    var text = document.getElementById("phone").value;
    let emp = document.getElementById('employeeName').value;
    if (emp === " " || emp.match(patt1)) {
        document.getElementById('emp').style.display = "block";
        document.getElementById('employeeName').value = "";
        setTimeout(() => {
            document.getElementById('emp').style.display = "none";
        }, 3000)
    }
    if (text === " " || text.match(ppatrn) || test.match(regx)) {
        document.getElementById('phn').style.display = "block";
        document.getElementById('phone').value = "";
        setTimeout(() => {
            document.getElementById('phn').style.display = "none";
        }, 3000)
    }
}
