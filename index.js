myJson =`{
  "AccountName": "Current Account",
   "BankBalance": "XXXXX",
  "transactionamount" : "15001",
  "transactiondate": "2022-08-12 15:55",
  "PaymentType": {
      "Id": "X",
      "Name": "Bank to Wallet Transfer"
    },
  "senderDetails" : {
  "sender": "Saurabh Sharma",
  "bank" : "SBI",
  "IFSC": "SBIN016095",
  "accountno": "xxxxxxxxx5736",
  "transactiondate" : "2022-08-12 15:55"
  },
  "recieverDetails" : {
  "reciever": "Saurabh Sharma",
  "wallet" :" Growpital Wallet ",
  "referenceno": "DBTR/222201998174",
  "transactiondate" : "2022-08-12 15:55"
  },
  "paymentmethod": "UPI",
  "transactionId": "DBTR/222201998174"}`
  let parsed=JSON.parse(myJson);
  function text(a){
    let text=document.createTextNode(a);
    return text;
  }
 
  function p(a){
    
    let p=document.getElementsByClassName(a)[0];
    return p;
  
  }
  function addText(a,b){
   let addText= p(a).appendChild(text(b));
   return addText;}
addText("p-des",parsed.PaymentType.Name)
addText("p-amount",parsed.transactionamount)
addText("p-date",parsed.transactiondate)
addText("from-name",parsed.senderDetails.sender)
addText("Fbank-name",parsed.senderDetails.bank)
addText("Fifsc",parsed.senderDetails.IFSC)
addText("Fac",parsed.senderDetails.accountno)
addText("to-name",parsed.recieverDetails.reciever)
addText("to-type",parsed.recieverDetails.wallet)
addText("tran",parsed.recieverDetails.referenceno)
addText("to-date",parsed.recieverDetails.transactiondate)
addText("pm",parsed.paymentmethod)
addText("ptran",parsed.transactionId)






















  