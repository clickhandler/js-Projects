let ProductArr=JSON.parse(localStorage.getItem("data"))||[]

displayData(ProductArr)


function displayData(data){
    let container=document.getElementById("products_data")
    container.innerHTML=""
    data.forEach(function(elem,index){

        let div=document.createElement("div")
        div.setAttribute("id","box")
       let image=document.createElement("img")
       image.src=elem.image
       
       let name=document.createElement("h3")
       name.innerText=`Name: ${elem.name}`

       let brand=document.createElement("h3")
       brand.innerText=`Brand: ${elem.brand}`

       let price=document.createElement("h3")
       price.innerText=`Price: ${elem.price}`

       let btn=document.createElement("button")
       btn.setAttribute("id","remove_product")
       btn.innerText="Remove Product"

       btn.addEventListener("click",function(){
           removeitem(elem,index)
       })

       div.append(image,name,brand,price,btn)

       container.append(div)

    })


    function removeitem(elem,index){
        ProductArr.splice(index,1)
        localStorage.setItem("data",JSON.stringify(ProductArr))
        window.location.reload()
    }
}