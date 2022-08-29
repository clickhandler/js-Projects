async  function LoginUser(){

    let Login_data={
        username:document.getElementById("user-name").value,
        password:document.getElementById("login-password").value,
    }
    
    Login_data=JSON.stringify(Login_data)
    
    let login_Api ='https://masai-api-mocker.herokuapp.com/auth/login';
    
    let response = await fetch(login_Api,{
    
    method:"POST",
    
    body:Login_data,
    
    
    headers:{
    'Content-Type':'application/json'
    },
    }).then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
    })
    
    .catch(function(err){
        console.log("Error")
    })
    
    
    }

    function Getprofile{
        
    }
    