let SearchImage= async (ApiKey,value1)=>{
   
    try{
        let res= await fetch(`https://api.unsplash.com//search/photos/?query=${value1}&per_page=50&client_id=${ApiKey}`)

        let data= await res.json()

        // console.log(data)
        return data

    }catch(Err){
        console.log("Error")
    }
 }



 let appendData=(data,container)=>{
data.forEach(function({alt_description,urls:{small}}){

    let div=document.createElement("div")

    let img=document.createElement("img")
    img.src=small

    let tag=document.createElement("h3")
    tag.innerText=alt_description

    div.append(img,tag)

    container.append(div)
    console.log(img,tag)
})
 }

 export {SearchImage,appendData}


 