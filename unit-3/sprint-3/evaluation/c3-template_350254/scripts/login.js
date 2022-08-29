let signupArr=JSON.parse(localStorage.getItem("users"))||[]


let form=document.getElementById("form")
function LogedUser(){
  let signupArr=JSON.parse(localStorage.getItem("users"))||[]
  let email1=document.getElementById("email").value
  let password1=document.getElementById("password").value

  
  
signupArr.forEach(function(elem){
  
  
if(email1==signupArr.email&&password1==signupArr.password){
  alert("Welcome User")
}
else{
  alert("enter Corect")
}

  })
  

}