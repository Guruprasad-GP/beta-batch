
function onformSubmit()
{
  if (validate()) {
  var forData=readFormData();
  console.log(forData);
  insertNewRecord(forData);
  resetform();
}
}


function readFormData()
{
  var forData={};
  forData['Employeename']=document.getElementById('Employeename').value;
  forData['Employeeid']=document.getElementById('Employeeid').value;
  forData['Employeedesignation']=document.getElementById('Employeedesignation').value;
  forData['empjoin']=document.getElementById('empjoin').value;
  forData['phone']=document.getElementById('phone').value;
  forData['empadd']=document.getElementById('empadd').value;
return forData;
}


function insertNewRecord(data)
{
  var table = document.getElementById("emp-list").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length-1);

  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.Employeename;

  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.Employeeid;

  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Employeedesignation;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.empjoin;

  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.phone;

  cell6=newRow.insertCell(5);
  cell6.innerHTML = data.empadd;

  cell7 = newRow.insertCell(6);
  cell7.innerHTML = ` <br>
  <a onClick="onDelete(this)"><span class="material-icons">
  cancel
  </span></a>`;

}

function onDelete(td)
 {
      row = td.parentElement.parentElement;
      document.getElementById("emp-list").deleteRow(row.rowIndex);

      resetForm();

  }

function resetform()
{
  document.getElementById('Employeename').value="";
  document.getElementById('Employeeid').value="";
  document.getElementById('Employeedesignation').value="";
  document.getElementById('empjoin').value="";
  document.getElementById('phone').value="";
  document.getElementById('empadd').value="";

}

function deleteall(){
  if((confirm("Do you really want to delete all"))==true){
    window.location.reload()
    }

}


function validate() {
  isValid = true;
  if (document.getElementById("Employeename").value == "" ) {
      isValid = false;
      document.getElementById("fullNameValidationError").classList.remove("hide");
  }

  else
  {
      isValid = true;
      if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
          document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}


function empname_check() {
  let  e = document.getElementById('Employeename').value;
  let patt1 = /[0-9]/g;

  if(e === " " || e.match(patt1)) {
      document.getElementById('e').style.display = "block";
      document.getElementById('Employeename').value = "";
      setTimeout(() => {
          document.getElementById('e').style.display = "none";
      }, 3000)
  }
}

function phonenum_check()
  {
    var text = document.getElementById("phone").value;
    var regx = /^[7-9][0-9]{9}$/;
    let ppatrn = /[a-zA-Z]/g;
    if(text === " " || text.match(ppatrn)|| test.match(regx)) {
      document.getElementById('p').style.display = "block";
      document.getElementById('phone').value = "";
      setTimeout(() => {
          document.getElementById('p').style.display = "none";
      }, 3000)
    }
  }
