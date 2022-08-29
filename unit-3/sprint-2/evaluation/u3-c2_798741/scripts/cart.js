let GroceriesArr=JSON.parse(localStorage.getItem("cart_items"))||[]
GroAppend(GroceriesArr)




function GroAppend(Grodata){
let sum=0
Grodata.forEach(function(elem,index){
  sum=sum+elem.price
let container=document.getElementById("cart")

let div=document.createElement("div")

let name=document.createElement("h3")
name.innerText=elem.name

let image=document.createElement("img")
image.src=elem.image

let price =document.createElement("h4")
price.innerText=elem.price

let btn=document.createElement("button")
btn.setAttribute("class","remove")
btn.innerText="Remove"
btn.addEventListener("click",function(){
  Removeitem(elem,index)
})

let total=document.getElementById("cart_total")
total.innerText=sum;
div.append(image,name,price,btn)



container.append(div)
console.log(sum)

})
 }

 function Removeitem(elem,index){
   GroceriesArr.splice(index,1)
   localStorage.setItem("cart_items",JSON.stringify(GroceriesArr))
   window.location.reload()
 }