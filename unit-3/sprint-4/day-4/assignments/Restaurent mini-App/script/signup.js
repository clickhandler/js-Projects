let Signupdata = async () => {
    event.preventDefault();

    let UserData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      description: document.getElementById("description").value,
    };
    // console.log(UserData)

    UserData = JSON.stringify(UserData);

    let Signup_link = "https://masai-api-mocker.herokuapp.com/auth/register";

    let response = await fetch(Signup_link, {
      method: "POST",

      body: UserData,

      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response)=>{
        return response.json()
    }).then((response)=>{
        console.log(response)
    }).catch((Err)=>{
        console.log("Error")
    })

    ;

    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("mobile").value = null;
    document.getElementById("password").value = null;
    document.getElementById("description").value = null;
    document.getElementById("username").value = null;
  };