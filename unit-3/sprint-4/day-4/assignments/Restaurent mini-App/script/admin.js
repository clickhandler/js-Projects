let Additem = async()=>{

    let Product={
    image:document.getElementById("image").value,
    title:document.getElementById("title").value,
    description:document.getElementById("desc").value,
    price:Number(document.getElementById("price").value),
    rating:Number(document.getElementById("rating").value),

}

Product=JSON.stringify(Product)

fetch('http://127.0.0.1:3000/api/items',{
    method:"POST",

    body:Product,

    headers:{
        'Content-Type':'application/json'
    }
}).then((response)=>{
    return response.json()
}).then((response)=>{
    console.log(response)
}).catch((Err)=>{
console.log("ERROR")
})
}

async function Deleteitem(){

let id=document.getElementById("id").value

let response = await fetch(`http://127.0.0.1:3000/api/items/${id}`,{
method:"DELETE",

headers: {
    "Content-Type": "application/json",
  },

})
}