let signObj= JSON.parse(localStorage.getItem("SignupKey"));

if (JSON.parse(localStorage.getItem("SignupKey"))!==null){
    alert("Put Credential carefully!")
}

document.querySelector("#login").addEventListener("submit", loginOperation);

let count=0;
function loginOperation(){
    event.preventDefault();

    let logObj={
        emailCheck:login.email.value,
        pwdCheck:login.pwd.value,
    }
    console.log(logObj);

    if(signObj==null) {
        window.location.href="signup.html";
        alert("Please Creat Account!");
    }
    else if (logObj.emailCheck==signObj.emailID && logObj.pwdCheck==signObj.password){
        localStorage.setItem("loginKey", JSON.stringify(logObj));
        window.location.href="index.html";
        alert("Login Successful!");
    }
    else {
        count++;
        alert("Invalid Credential");
        if (count>3){
            alert("Please Create Account");
            window.location.href="signup.html";
        }
    }
}