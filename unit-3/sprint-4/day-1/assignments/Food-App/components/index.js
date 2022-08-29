
  

//   let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
// Execution Second---
let id;
let resultDiv=document.getElementById("result")
async function getData(q){
   
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`;
    
    try{
        let res = await fetch(url)
        let data =await res.json()

        return data.meals
        // console.log(data.meals)
    }
    catch(Err){
        console.log("Error")
    }
}


// Execution First------
async function main(){
    let query=document.getElementById("query").value;
    // console.log(query)

 let response=getData(query)
 let data=await response
 appendData(data)
 console.log(data)
 
}


// Execution Third Append

function appendData(show){
    resultDiv.innerHTML=null;
    if(show===undefined){
        return false
    }
show.forEach(function(elem){
  
   let div =document.createElement("div")
    let tag=document.createElement("h4")
    tag.innerText=elem.strMeal

    let image=document.createElement("img")
    image.src=elem.strMealThumb

let areafood=document.createElement("h4")
areafood.innerText=elem.strArea

    console.log(tag)
    div.append(image,tag,areafood)
    resultDiv.append(div)
})

}

function debouncing(func,delay){
    if (id){
        clearTimeout(id)
    }
 id=setTimeout(function(){
    func()
},delay)

document.getElementById("query").innerText=null
}