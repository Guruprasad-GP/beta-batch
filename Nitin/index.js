function nameValidation()
{
let path= /^[a-zA-Z]+$/;
let path1= /^[a-zA-Z' ']+$/;

var first= document.getElementById('name').value;
if(first.match(path) || first.match(path1))
{
    document.getElementById('name').style.border= "green solid";
    document.getElementById('username').style.display='none';
    return true; 
}
else
{
    document.getElementById('name').style.border= "red solid";
    document.getElementById('username').innerHTML="*Name cannot be a number!"
    return false;
}
}

function customerIdValidation()
{
    var cd = document.getElementById('CustomerId').value;
    let numbers=/^[0-9]/g;
    if(cd.match(numbers))
    {
        document.getElementById('CustomerId').style.border= "green solid";
        return true;  
    }
    else 
    {
        document.getElementById('CustomerId').style.border= "red solid";
        document.getElementById('cid').innerHTML='*Customer ID cannot be a character';
        return false;
    }
}

function timeValidation()
{
    var valueTime=document.getElementById('time').value;
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    if(valueTime<time || valueTime>time)
    {
        document.getElementById('time').style.border="red solid";
        document.getElementById('timeValidation').innerHTML="*Please Enter a Valid time!";
        return false;
    }
    else
    {
    document.getElementById('time').style.border="green solid";
    document.getElementById('timeValidation').innerHTML="";
    return true;
    }
    
}

function dateValidation()
{
    var valueDate=document.getElementById('date').value;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


    if (valueDate.match(date)) 
    {
        document.getElementById('date').style.border="green solid";
        document.getElementById('dateValidation').innerHTML="";
        return true;
    }
    else{
        document.getElementById('date').style.border="red solid";
        document.getElementById('dateValidation').innerHTML="*Enter the current Date!"
        return false;
    }
}

function addressValidation()
{
    var address= document.getElementById('Address').value;
    let addressPath= /^[a-zA-Z]+$/;

    if(address.match(addressPath))
    {
        document.getElementById('Address').style.border= "green solid";
        document.getElementById('addressCheck').innerHTML=""
        return true;
    }
    else{
        document.getElementById('Address').style.border= "red solid";
        document.getElementById('addressCheck').innerHTML="* Enter a valid place!"
        return false;
    }
}

function queryValidation()
{
    var valueQuery= document.getElementById('queryDetails').value;
    let queryPath1= /^[a-zA-Z]+$/;

    if(isNaN(valueQuery))
    {
        document.getElementById('queryDetails').style.border= "green solid";
        document.getElementById('query').innerHTML="";
        return true;
    }
    else
    {
        document.getElementById('queryDetails').style.border= "red solid";
        document.getElementById('query').innerHTML="* Questions/Query cannot be number!"
        return false;
    }
}

function onSubmitInput()
{
    var formData= addContent();
    insertData(formData);
    resetFormValues()
}
function addContent()
{
    var formValues={}

    formValues["nameValue"] =document.getElementById('name').value;
    formValues["customerId"] =document.getElementById('CustomerId').value;
    formValues["timeValue"] =document.getElementById('time').value;
    formValues["dateValue"] =document.getElementById('date').value;
    formValues["addressValue"] =document.getElementById('Address').value;
    formValues["queryValue"]  =document.getElementById('queryDetails').value;
    if(formValues["nameValue"]!==''||formValues["customerId"] !==''||formValues["timeValue"]!==''||formValues["dateValue"]!==''||formValues["addressValue"]!==''||formValues["queryValue"]!=='')
    {
        return formValues;
    } 
    else{
        alert("please fill all the details and submit")
    }
}

function insertData(data)
{
    var table=document.getElementById('right-position').getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.length-1);
    firstCell =row.insertCell(0);
    firstCell.innerHTML= '<div style="border:1px black solid;">'+data.nameValue+'</div>';
    secondCell =row.insertCell(1);
    secondCell.innerHTML= '<div style="border:1px black solid;">'+data.customerId+'</div>'; 
    thirdCell =row.insertCell(2);
    thirdCell.innerHTML= '<div style="border:1px black solid;">'+data.timeValue+'</div>';
    forthCell =row.insertCell(3);
    forthCell.innerHTML= '<div style="border:1px black solid;">'+data.dateValue+'</div>';
    fifthCell=row.insertCell(4);
    fifthCell.innerHTML='<div style="border:1px black solid;">'+data.addressValue+'</div>';
    sixthCell=row.insertCell(5);
    sixthCell.innerHTML='<div style="border:1px black solid;">'+data.queryValue+'</div>';
    seventhCell= row.insertCell(6);
    seventhCell.innerHTML=`<a style="color:red; font-weight:700; font-family:geneva,,georgia;" onClick="onDelete(this)">Delete</a>`
}

function resetFormValues() {
    document.getElementById("name").value = "";
    document.getElementById("CustomerId").value = "";
    document.getElementById("time").value = "";
    document.getElementById("date").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("queryDetails").value = "";
}

function onDelete(td)
{
    alert('Are you sure to delete this Customer Details ?') 
    row = td.parentElement.parentElement;
    document.getElementById('deleteOne').deleteRow(row.rowIndex);
    resetForm();
}

function resetFormColor() 
{
    document.getElementById('name').style.border= "none";
    document.getElementById('CustomerId').style.border="none"
    document.getElementById('time').style.border="none";
    document.getElementById('date').style.border="none";
    document.getElementById('Address').style.border= "none";
    document.getElementById('queryDetails').style.border= "none";
}