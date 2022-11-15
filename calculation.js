

function fxnadd(){
  let nb1=parseInt(document.getElementById("num1").value);
  let nb2=parseInt(document.getElementById("num2").value);
  let sum=nb1+nb2;
  document.getElementById("result").innerHTML="The result is "+sum;
}

function fxnsub(){
  let nb1=parseInt(document.getElementById("num1").value);
  let nb2=parseInt(document.getElementById("num2").value);
  let sum=nb1-nb2;
  document.getElementById("result").innerHTML="The result is "+sum;
}

function fxnmul(){
  let nb1=parseInt(document.getElementById("num1").value);
  let nb2=parseInt(document.getElementById("num2").value);
  let sum=nb1*nb2;
  document.getElementById("result").innerHTML="The result is "+sum;
}

function fxndiv(){
  let nb1=parseInt(document.getElementById("num1").value);
  let nb2=parseInt(document.getElementById("num2").value);
  let sum=nb1/nb2;
  document.getElementById("result").innerHTML="The result is "+sum;
}

