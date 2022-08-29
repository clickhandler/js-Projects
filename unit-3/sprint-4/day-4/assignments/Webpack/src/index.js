import navbar from "../components/navbar.js";
import "../style/navbar.css"
import axios from "axios"

let navbar_div = document.getElementById("navbar")
navbar_div.innerHTML= navbar()


async function fetchData(){
let data = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
return data.meals
 appendData1(data.meals)
// console.log(data)
}
 fetchData()


//  Append------------
function appendData1(data){
    
        // let container=document.createElement("div")
        // container.setAttribute("id","box")
        let div= document.createElement("div")

        let tag=document.createElement("h3")
        tag.innerText=data.strMeal

       
        let image=document.createElement("img")
        image.src=data.strMealThumb

        div.append(tag,image)
        // container.append(div)
        document.getElementById("container").append(div)
        

        

}

// console.log(navbar_div)