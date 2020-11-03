//name Validation
function nameValidation() {
    let path = /^[a-zA-Z]+$/;
    let path1 = /^[a-zA-Z' ']+$/;

    var first = document.getElementById('name').value;
    if (first.match(path) || first.match(path1)) {
        document.getElementById('name').style.border = "green solid";
        document.getElementById('username').style.display = 'none';
        return true;
    }
    else {
        document.getElementById('name').style.border = "red solid";
        document.getElementById('username').innerHTML = "*Name cannot be a number!"
        return false;
    }
}
//Id validation
function customerIdValidation() {
    var cd = document.getElementById('customerId').value;
    let numbers = /^[0-9]/g;
    if (cd.match(numbers)) {
        document.getElementById('customerId').style.border = "green solid";
        return true;
    }
    else {
        document.getElementById('customerId').style.border = "red solid";
        document.getElementById('cid').innerHTML = '*Customer ID cannot be a character';
        return false;
    }
}
//time validation
function timeValidation() {
    var valueTime = document.getElementById('time').value;
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    if (valueTime < time || valueTime > time) {
        document.getElementById('time').style.border = "red solid";
        document.getElementById('timeValidation').innerHTML = "*Please enter a valid time!";
        return false;
    }
    else {
        document.getElementById('time').style.border = "green solid";
        document.getElementById('timeValidation').innerHTML = "";
        return true;
    }

}
//date validation
function dateValidation() {
    var valueDate = document.getElementById('date').value;
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    if (valueDate.match(date)) {
        document.getElementById('date').style.border = "green solid";
        document.getElementById('dateValidation').innerHTML = "";
        return true;
    }
    else {
        document.getElementById('date').style.border = "red solid";
        document.getElementById('dateValidation').innerHTML = "*Enter the current date!"
        return false;
    }
}
//address Validation
function addressValidation() {
    var address = document.getElementById('address').value;
    let addressPath = /^[a-zA-Z]+$/;

    if (address.match(addressPath)) {
        document.getElementById('address').style.border = "green solid";
        document.getElementById('addressCheck').innerHTML = ""
        return true;
    }
    else {
        document.getElementById('address').style.border = "red solid";
        document.getElementById('addressCheck').innerHTML = "* Enter a valid place!"
        return false;
    }
}
//query validation
function queryValidation() {
    var valueQuery = document.getElementById('queryDetails').value;
    let queryPath1 = /^[a-zA-Z]+$/;

    if (isNaN(valueQuery)) {
        document.getElementById('queryDetails').style.border = "green solid";
        document.getElementById('query').innerHTML = "";
        return true;
    }
    else {
        document.getElementById('queryDetails').style.border = "red solid";
        document.getElementById('query').innerHTML = "* Questions/Query cannot be number!"
        return false;
    }
}

function onSubmitInput() {
    var formData = addContent();
    insertData(formData);
    resetFormValues()
}
//to insert values
function addContent() {
    var formValues = {}

    formValues["nameValue"] = document.getElementById('name').value;
    formValues["customerId"] = document.getElementById('customerId').value;
    formValues["timeValue"] = document.getElementById('time').value;
    formValues["dateValue"] = document.getElementById('date').value;
    formValues["addressValue"] = document.getElementById('address').value;
    formValues["queryValue"] = document.getElementById('queryDetails').value;
    if (formValues["nameValue"] !== '' || formValues["customerId"] !== '' || formValues["timeValue"] !== '' || formValues["dateValue"] !== '' || formValues["addressValue"] !== '' || formValues["queryValue"] !== '') {
        return formValues;
    }
    else {
        alert("Please fill all the details and submit")
    }
}

function insertData(data) {
    var table = document.getElementById('right-position').getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.length - 1);
    firstCell = row.insertCell(0);
    firstCell.innerHTML = '<div style="border:1px black solid;">' + data.nameValue + '</div>';
    secondCell = row.insertCell(1);
    secondCell.innerHTML = '<div style="border:1px black solid;">' + data.customerId + '</div>';
    thirdCell = row.insertCell(2);
    thirdCell.innerHTML = '<div style="border:1px black solid;">' + data.timeValue + '</div>';
    forthCell = row.insertCell(3);
    forthCell.innerHTML = '<div style="border:1px black solid;">' + data.dateValue + '</div>';
    fifthCell = row.insertCell(4);
    fifthCell.innerHTML = '<div style="border:1px black solid;">' + data.addressValue + '</div>';
    sixthCell = row.insertCell(5);
    sixthCell.innerHTML = '<div style="border:1px black solid;">' + data.queryValue + '</div>';
    seventhCell = row.insertCell(6);
    seventhCell.innerHTML = `<a style="color:red; font-weight:700; font-family:geneva,,georgia;" onClick="onDelete(this)">Delete</a>`
}
//to reset the form after adding values to the table
function resetFormValues() {
    document.getElementById("name").value = "";
    document.getElementById("customerId").value = "";
    document.getElementById("time").value = "";
    document.getElementById("date").value = "";
    document.getElementById("address").value = "";
    document.getElementById("queryDetails").value = "";
}
//to delete the values
function onDelete(td) {
    alert('Are you sure to delete this Customer Details ?')
    row = td.parentElement.parentElement;
    document.getElementById('deleteOne').deleteRow(row.rowIndex);
    resetForm();
}

function resetFormColor() {
    document.getElementById('name').style.border = "none";
    document.getElementById('customerId').style.border = "none"
    document.getElementById('time').style.border = "none";
    document.getElementById('date').style.border = "none";
    document.getElementById('address').style.border = "none";
    document.getElementById('queryDetails').style.border = "none";
}