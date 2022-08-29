let signupArr=[]
function UserData(){
 let form= document.getElementById("form")
  event.preventDefault()

  let name=document.getElementById("name").value
  let email=document.getElementById("email").value
  let password=document.getElementById("password").value
  signupArr.push(name,email,password)
  console.log(signupArr)
localStorage.setItem("users",JSON.stringify(signupArr))