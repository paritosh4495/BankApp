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


console.log("Js is linked ")