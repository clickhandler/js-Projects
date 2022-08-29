/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

userData=JSON.parse(localStorage.getItem("user"))
function userData() {
    console.log("hello");

    let url = document.getElementById("user_pic").value;
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let country = document.getElementById("user_country").value;

    let userData = {
      name: name,
      image: url,
      email: email,
      country: country,
    };

    console.log(userData)
    localStorage.setItem("user", JSON.stringify(userData));
}