
    document.querySelector("#form").addEventListener("submit",LoginAccount);
    var UserInformation=JSON.parse(localStorage.getItem("UserData"))||[]

function LoginAccount(){
    event.preventDefault()
  
    var p=[]
    var q=[]


   UserInformation.forEach(function(elem){
   p.push(elem.UserEmail)
   q.push(elem. usePass)
   })
   var userE=document.querySelector("#email")
   var userP=document.querySelector("#password")

   for(var i = 0; i<q.length; i++){
                if(userE.value === p[i] && userP.value == q[i]){
                    alert("Login Successful");
                    break;
                }

                else{
                    alert("Incorrect Email or Password");
                    break;
                }
            }


}

