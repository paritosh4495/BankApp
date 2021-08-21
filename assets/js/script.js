//Transfers money from one account to another ...
function TransferMoney() {
   var from = document.getElementById("enterName").value;
   var amount = parseInt(document.getElementById("enterAmount").value);
   var to = document.getElementById("enterName2").value;
   var fromAccount = from + "BankBalance";
   var toAccount = to + "BankBalance" 
   var from_balance = parseInt(document.getElementById(fromAccount).innerHTML);
   var to_balance = parseInt(document.getElementById(toAccount).innerHTML);
   console.log("Sender's name "+from +" Sender's account "+fromAccount +" Senders balance: "+from_balance);
   console.log("Amount to be transfered: "+amount);
   console.log("Recepient name "+to + " Recepient account" +toAccount + " Recepient balance: "+to_balance);
   var newFrom_balance = from_balance-amount;
   var newTo_balance = to_balance+amount
   console.log("Sender's new Balance: "+newFrom_balance);
   console.log("Recepient's new Balance: "+newTo_balance);
   if(amount >= from_balance ){
      alert("Insufficient Balance...")
   } 
   else {
      document.getElementById(fromAccount).innerHTML=newFrom_balance;
      document.getElementById(toAccount).innerHTML=newTo_balance;
      alert(`Successful Transaction !!  
      $${amount} is sent from ${from}@email.com to ${to}@email.com.`);

       // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${amount} is sent to ${to}@email.com from ${from}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
   
}

function addCustomer() {
   console.log("Customer adding ...")
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const balance = document.getElementById("balance").value;
   var rowCount = 11;
   console.log("Name: "+name +" "+ "Email: "+email+" "+"balance: "+balance);

   //Adding customer to actual table...
   var table = document.getElementById("myTable");
   var row = table.insertRow(rowCount);
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   row.setAttribute('class', "table-light")
   cell1.innerHTML = rowCount;
   rowCount++;
   cell2.innerHTML = name;
   cell3.innerHTML = email;
   cell4.innerHTML = balance;
}


console.log("Js is linked ")
