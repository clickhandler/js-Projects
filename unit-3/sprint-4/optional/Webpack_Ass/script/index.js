//LINK-  https://api.unsplash.com//search/photos/?query=${value}&per_page=50client_id=x0EkNaYERXofb6zZzPX94nTF_zhADTulk9XsniGxwz8
const ApiKey="x0EkNaYERXofb6zZzPX94nTF_zhADTulk9XsniGxwz8"

import {navbar} from "../components/navbar.js";

 let navbar1=document.getElementById("navbar")

 navbar1.innerHTML=navbar()


import {SearchImage,appendData} from "../script/fetch.js"



let search=(event1)=>{
    if(event1.key=="Enter"){
    let value1 =document.getElementById("query").value;
     SearchImage(ApiKey,value1).then((data)=>{
         let container=document.getElementById("container")
         container.innerHTML=null;
         appendData(data.results,container)
        console.log(data)
     })
   
    }
}
document.getElementById("query").addEventListener("keydown",search)

let cat1=document.getElementById("cat").children;
console.log(cat1)


function btnsearch (){
console.log(this.id )
SearchImage(ApiKey,this.id).then((data)=>{
    let container=document.getElementById("container")
    container.innerHTML=null;
    appendData(data.results,container)
   console.log(data)
})
}
for(let elem of cat1){
    elem.addEventListener("click",btnsearch)
}
//  let SearchImage= async ()=>{
//     let value1 =document.getElementById("query").value;
//     try{
//         let res= await fetch(`https://api.unsplash.com//search/photos/?query=${value1}&per_page=50&client_id=${ApiKey}`)

//         let data= await res.json()
//         console.log(data)

//     }catch(Err){
//         console.log("Error")
//     }
//  }