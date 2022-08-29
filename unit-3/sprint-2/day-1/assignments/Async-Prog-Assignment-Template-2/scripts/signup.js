
    document.querySelector("#UserInfo").addEventListener("submit", signupFun);
     var UserInformation=JSON.parse(localStorage.getItem("UserData"))||[]

    function signupFun() {
        event.preventDefault()

        var name1 = document.getElementById("name")
        var Phone1 = document.getElementById("phone")
        var Email1 = document.getElementById("mail")
        var Email2=document.getElementById("Confirm-mail")
        var Pass1 = document.getElementById("pass")
        var Pass2=document.getElementById("Confirm-pass")
        // if(Email1.value!=Email2.value ||Pass1.value!=Pass2.value){
        //     alert("Check your Email and Password")
        // }
        if(Email1.value!=Email2.value){
            alert("Check your Email")
        }
        if(Pass1.value!=Pass2.value){
            alert("Check Your Password")
        }
        else{
            alert("Registration Successful")
        }
            let Userobj = {
               userName:UserInfo.name.value,
               UserEmail:UserInfo.mail.value,
               usePass:UserInfo.pass.value

            }
           
            UserInformation.push(Userobj)
            localStorage.setItem("UserData",JSON.stringify(UserInformation));
        }

    



