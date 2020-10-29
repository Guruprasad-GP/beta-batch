/* validation */

function p_check() {
    let  p = document.getElementById('paintName').value;
    let patt1 = /[0-9]/g;

    if(p === " " || p.match(patt1)) {
        document.getElementById('p').style.display = "block";
        document.getElementById('paintName').value = "";
        setTimeout(() => { 
            document.getElementById('p').style.display = "none";
        }, 3000)
    }
}

function a_check() {
    let  a = document.getElementById('artist').value;
    let patt1 = /[0-9]/g;

    if(a === " " || a.match(patt1)) {
        document.getElementById('a').style.display = "block";
        document.getElementById('artist').value = "";
        setTimeout(() => { 
            document.getElementById('a').style.display = "none";
        }, 3000)
    }
}
function pp_check() {
    let  pp = document.getElementById('artist').value;
    let patt1 = /[0-9]/g;

    if(pp === " " || pp.match(patt1)) {
        document.getElementById('pp').style.display = "block";
        document.getElementById('price').value = "";
        setTimeout(() => { 
            document.getElementById('a').style.display = "none";
        }, 3000)
    }
}



function SubmitForm() {
        var formData = readFormData();
  
            insertNewRecord(formData);
    }

function readFormData()
{
    var formData = {};
    formData["paintName"] = document.getElementById("paintName").value;
    formData["artist"] = document.getElementById("artist").value;
    formData["pid"] = document.getElementById("pid").value;
    formData["pdate"] = document.getElementById("pdate").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("Paint-Info").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length-1);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.paintName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.artist;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.pid;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pdate;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.price;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = ` <a onClick="onDelete(this)">Delete</a>`;
} 

function resetform(){
    document.getElementById('paintName').value="";
    document.getElementById('artist').value="";
    document.getElementById('pid').value="";
    document.getElementById('pdate').value="";
    document.getElementById('price').value="";
  }
 
  function onDelete(td) {
      if(confirm("are your sure?!")==true)
        row = td.parentElement.parentElement;
        document.getElementById("Paint-Info").deleteRow(row.rowIndex);
        resetForm();
    }

 