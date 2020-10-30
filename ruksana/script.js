function id_check() {
    let  pid = document.getElementById('PatientId').value;
    let pattern = /[0-9]/g;

    if(pid === " " || id.match(pattern)) {
        document.getElementById('pid').style.display = "block";
        document.getElementById('PatientId').value = "";
        document.getElementById('pid').style.display = "none";
    
    }
}

function validate() {
    let  valid = document.getElementById('PatientName').value;
    let pattern1 = /^[A-Z]+$/i;

    if(valid === " " || validate.match(pattern1)) {
        document.getElementById('valid').style.display = "block";
        document.getElementById('PatientName').value = "";
        
            document.getElementById('valid').style.display = "none";
        
    }
}

function SubmitForm() {
        var patientData = readFormData();
        insertNewRecord(patientData);
    }

function readFormData()
{
    var patientData = {};
    patientData["PatientId"] = document.getElementById("PatientId").value;
    patientData["PatientName"] = document.getElementById("PatientName").value;
    patientData["phone"] = document.getElementById("phone").value;
    patientData["hname"] = document.getElementById("hname").value;
    patientData["city"] = document.getElementById("city").value;
    return patientData;
}
function insertNewRecord(data) {
    var table = document.getElementById("PatientInfo").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length-1);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.PatientId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.PatientName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.hname;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.city;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = ` <a onClick="onDelete(this)">Delete</a>`;
} 

function resetform(){
    document.getElementById('PatientId').value="";
    document.getElementById('PatientName').value="";
    document.getElementById('phone').value="";
    document.getElementById('hname').value="";
    document.getElementById('city').value="";
  }
 
  function onDelete(td) {
      if(confirm("are your sure to delete this record?!")==true)
        row = td.parentElement.parentElement;
        document.getElementById("PatientInfo").deleteRow(row.rowIndex);
        resetForm();
    }
