function  Submit() {
    var formData = readData();
    addRecord(formData);
    resetForm();
}
//to read data 
function readData(){
    var formData={};
    formData["pid"] = document.getElementById("pid").value;
    formData["pdName"] = document.getElementById("pdName").value;
    formData["price"] = document.getElementById("price").value;
    formData["rating"] = document.getElementById("rating").value;
    formData["discount"] = document.getElementById("discount").value;
    formData["warranty"] = document.getElementById("warranty").value;
    return formData;
}
//to add new record to the table
function addRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.pid;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.pdName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.rating;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.discount;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.warranty;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}
//when the data is added to the table the form will be reset 
function resetForm() {
    document.getElementById("pid").value = "";
    document.getElementById("pdName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("discount").value = "";
    document.getElementById("warranty").value = "";
}
//to delete each feild
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}

//to validate product name
function productNameCheck() {
    let  e = document.getElementById('pdName').value;
    let patt1 = /[0-9]/g;
  
    if(e === " " || e.match(patt1)) {
        document.getElementById('e').style.display = "block";
        document.getElementById('pdName').value = "";
        setTimeout(() => {
            document.getElementById('e').style.display = "none";
        }, 3000)
    }

  }