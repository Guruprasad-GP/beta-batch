function onFormSubmit() {
    var formDataValues = readFormData();
    insertNewRecord(formDataValues);
    resetForm()
}

function readFormData() {
    var formData = {};
    formData["stateName"] = document.getElementById('state-name').value;
    formData["district"] = document.getElementById("district").value;
    formData["capitalName"] = document.getElementById("capital-name").value;
    formData["birdName"] = document.getElementById("bird-name").value;
    formData["pinCode"] = document.getElementById("pin-code").value;
    console.log(formData);
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("state-information").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length-1);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.stateName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.district;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.capitalName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.birdName;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.pinCode;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("state-name").value = "";
    document.getElementById("district").value = "";
    document.getElementById("capital-name").value = "";
    document.getElementById("bird-name").value = "";
    document.getElementById("pin-code").value = "";
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("state-information").deleteRow(row.rowIndex);
        resetForm()
    }
}
function validation()
{
    let stateName = document.getElementById('state-name').value;
    let capitalName = document.getElementById('capital-name').value;
    let birdName = document.getElementById('bird-name').value;
    pinCode =document.getElementById("pin-code").value;
    let path = /[0-9]/g;
    if (stateName === " " || stateName.match(path))
    {
        document.getElementById('state-alert').style.display = "block"; 
        document.getElementById('state-name').value = "";
        setTimeout(() => {
        document.getElementById('state-alert').style.display = "none";
        }, 3000)
    }
    if (capitalName === " " || capitalName.match(path)) {
        document.getElementById('capital').style.display = "block";
        document.getElementById('capital-name').value = "";
        setTimeout(() => {
        document.getElementById('capital').style.display = "none";
        }, 3000)
    }
    if (birdName === " " || birdName.match(path)) {
        document.getElementById('bird-alert').style.display = "block";
        document.getElementById('bird-name').value = "";
        setTimeout(() => {
        document.getElementById('bird-alert').style.display = "none";
        }, 3000)
    }
    if(pinCode.length>6)
    {
        document.getElementById('pin-alert').style.display = "block";
        document.getElementById('pin-code').value = "";
        setTimeout(() => {
        document.getElementById('pin-alert').style.display = "none";
        }, 3000)
    }
}