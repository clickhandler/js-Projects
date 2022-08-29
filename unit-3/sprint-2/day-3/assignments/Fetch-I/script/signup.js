
document.querySelector("#signup").addEventListener("submit", signupOperations);

let signObj= JSON.parse(localStorage.getItem("SignupKey"));

if (JSON.parse(localStorage.getItem("SignupKey"))!==null){
    alert("Please Creat Account!");
}

function signupOperations(){
    event.preventDefault();

    let signObj={
        name1 : signup.name.value,
        mobileNum : signup.num.value,
        emailID : signup.email.value,
        password : signup.pwd.value,
    }
    console.log(signObj);

    localStorage.setItem("SignupKey", JSON.stringify(signObj));
    
    window.location.href="login.html";
}