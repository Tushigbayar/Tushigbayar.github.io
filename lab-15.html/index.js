//Даалгавар-1
var count = 0;
                var btn = document.getElementById("btn");
                var disp = document.getElementById("display");
          
                btn.onclick = function () {
                    count++;
                    disp.innerHTML = count;
                }


//Даалгавар-2
function changeStyle(){
      var element = document.getElementById("myDiv");
      element.style.fontSize = "50px";
  }

//   Даалгавар-3
function createTable()
{
rn = window.prompt("Мөрийн тоо", 1);
cn = window.prompt("Баганы тоо",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Мөр-"+r+" Багана-"+c; 
    }
   }
}

//Даалгавар-4
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

// Даалгавар-5
function colorize() {
      let i = 0;
      let teal = document.querySelectorAll("table tr");
      for (let tr of teal) {
          if (i % 2 != 0) {
              tr.style.background = "teal";
          }
          i++
      }
  }

// Даалгавар-6
  function addRow() {
      "use strict";
      
      var tableBody = document.getElementById("table-body");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");    
      var row = document.createElement("tr");
      
      td1.innerHTML = document.getElementById("item").value;
      td2.innerHTML  = document.getElementById("quantity").value;
      td3.innerHTML  = document.getElementById("price").value;

row.appendChild(td1);
row.appendChild(td2);
row.appendChild(td3);

tableBody.appendChild(row);
}