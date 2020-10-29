let state=[]
function addContent()
{
Name=document.getElementById('name').value;
Number=document.getElementById('num').value;
Capital=document.getElementById('capital').value;
Bird=document.getElementById('bird').value;
 Pincode=document.getElementById('pin').value;
  if(Name!=='' && Number!=='' && Capital!=='' && Bird!==''&& Pincode!=='')
    { 
      state.push({name:Name,num:Number,capital:Capital,bird:Bird,pin:Pincode})
  render()
  document.getElementById('name').value='';
  document.getElementById('num').value='';
  document.getElementById('capital').value='';
  document.getElementById('bird').value='';
  document.getElementById('pin').value='';
    }else
      {
        alert("empty value not allowed");
      }
}                                                                       
function removeContent(){
  state.pop()
  render()
}
function render(){
  let nameStr =''
  for(let i=0; i<state.length;i++)
    {
      nameStr+='<div style ="border:2px solid; width:200px; padding:5px; margin:5px;"><br/>'+state[i]['name']+" "+state[i]['num']+" "+state[i]['capital']+" "+state[i]['bird']+" "+state[i]['pin']+'</div>'
      document.getElementById('resultDiv').innerHTML=nameStr     
    }
}
