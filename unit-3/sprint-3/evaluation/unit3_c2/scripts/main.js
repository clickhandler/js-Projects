document.getElementById("submit").addEventListener("click",getData)
  function getData(){
    
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var address=document.getElementById("address").value;
    var amount=document.getElementById("amount").value;
     
    let userData={
      name:name,
      email:email,
      address:address,
      wallet:amount
    }
    console.log(userData)

  localStorage.setItem("user",JSON.stringify(userData))

    var name=document.getElementById("name").value=null
    var email=document.getElementById("email").value=null
    var address=document.getElementById("address").value=null
    var amount=document.getElementById("amount").value=null
  }
