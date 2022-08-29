function sidebar(){
    let userData=JSON.parse(localStorage.getItem("user"))



let appendSidebar=(userData)=>{
//  userData.forEach(function(elem){

    let div=document.createElement("div")

    let img=document.createElement("img")
    img.src=userData.image

    let name1=document.createElement("h3")
    name1.innerText= `Name- ${userData.name}`

    let country1=document.createElement("h3")
    country1.innerText=`Country- ${userData.country}`

    div.append(img,name1,country1)

    document.getElementById("sidebar").append(div)
//  })
}

appendSidebar(userData)
}

export default sidebar()