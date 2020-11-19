var button = document.getElementById('button');

button.addEventListener('click', function () {
  
  var name = document.getElementById('name').value.toUpperCase();
 
  var nameNode = document.createTextNode(name);

  var opt = document.getElementById('option').value;

  var optNode = document.createTextNode(opt);

  // var section = document.getElementById('section').value;
  // var secNode=document.createTextNode(section);
  
  var grade = document.getElementById('grade').value;
  
  var ageNode = document.createTextNode(grade);
 
  var science =document.getElementById('science').value;

  var scienceNode = document.createTextNode(science);

  var english = document.getElementById('english').value;

  var englishNode = document.createTextNode(english);

  var math = document.getElementById('math').value;

  var mathNode = document.createTextNode(math);


  var total = Number(science) + Number(english) + Number(math);
  
  var totalNode =document.createTextNode(total)

  var avg = (total / 3);
  var avgNode =document.createTextNode(Math.floor(avg));

  
  


  

  var tdName = document.createElement('td');
  
  tdName.appendChild(nameNode);

  var tdOpt = document.createElement('td');
  tdOpt.appendChild(optNode);

  // var tdSec =document.createElement('td');
  // tdSec.appendChild(secNode)
  
  var tdAge = document.createElement('td');
 
  tdAge.appendChild(ageNode);
  

  var tdScience=document.createElement('td');

  tdScience.appendChild(scienceNode);

  var tdEnglish = document.createElement('td');
  tdEnglish.appendChild(englishNode);

  var tdMath=document.createElement('td');
  tdMath.appendChild(mathNode);

  var tdTotal = document.createElement('td');
  tdTotal.appendChild(totalNode);

  var tdAvg = document.createElement('td');
  tdAvg.appendChild(avgNode);


  




  var tr = document.createElement('tr');
  
  tr.appendChild(tdName);
  tr.appendChild(tdOpt);
  // tr.appendChild(tdSec);
  tr.appendChild(tdAge);
  tr.appendChild(tdScience);
  tr.appendChild(tdEnglish);
  tr.appendChild(tdMath);
  tr.appendChild(tdTotal);
  tr.appendChild(tdAvg);
  
  
  
  var table = document.getElementById('table');
  table.appendChild(tr);
  
  document.getElementById('name').value = '';
  document.getElementById('option').value = '';
  // document.getElementById('section').value='';
  document.getElementById('grade').value = '';
  document.getElementById('science').value = '';
  document.getElementById('english').value = '';
  document.getElementById('math').value = '';
  

});

function searchFun(){
  let filter = document.getElementById('myInput').value.toUpperCase();
  let myTable = document.getElementById('table')
  let tr = myTable.getElementsByTagName('tr')

  for(var i=0;tr.length;i++){
    let td=tr[i].getElementsByTagName('td')[0];
    console.log(td)

    if(td){
      let textvalue = td.textContent || td.innerHTML;
      if(textvalue.toLocaleUpperCase().indexOf(filter)>-1){
        tr[i].style.display="";
        


      }
      else{
        tr[i].style.display='none';
      }
    }
  }
}


