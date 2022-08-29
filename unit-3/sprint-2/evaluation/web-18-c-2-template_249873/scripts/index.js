async function getData() {
    let url = "https://masai-mock-api.herokuapp.com/coffee/menu"
    try {

      let res = await fetch(url);
      let coffees = await res.json()
      appendData(coffees.menu.data)
      localStorage.setItem("coffee",JSON.stringify(coffees))
      console.log(coffees)
      return coffees.menu.data
    } catch (err) {
      console.log(err)
    }
   
  }
 getData()

  let cofeeData = JSON.parse(localStorage.getItem("coffee")) || []

  function appendData(data) {
    data.forEach(function (elem, index) {
     
     let Div=document.createElement("div")
     Div.setAttribute("id","Container")

     let image=document.createElement("img")
     image.src=elem.image

    //  let desc=document.createElement("p")
    //  desc.innerText=elem.description

     let id=document.createElement("h3")
     id.innerText=elem.id
    
    let price=document.createElement("h3")
    price.innerText="Price "+ elem.price

    let h2=document.createElement("h3")
    h2.innerText=elem.title


    let btn=document.createElement("button")
    btn.innerText="Add to bucket"
    btn.setAttribute("id","add_to_bucket")

    btn.addEventListener("click",function(){
        addbucket(elem,index)
    })
    

     Div.append(image,h2,id,price,btn)

   
    

      document.getElementById("menu").append(Div)

    })
  }

  function addbucket(elem,index){
let obj={
    image:elem.image,
    title:elem.title,
    price:elem.price
}
return obj
  }
let coffeeArr=[]
function localStoragefunc(cofeeData){
    coffeeArr.push(cofeeData)
    console.log(coffeeArr)
}

  