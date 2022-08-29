async function foodData(){
    let response = await fetch('http://127.0.0.1:3000/api/items')
    let data= await response.json()
     AppendFood(data)
    console.log(data)
}
foodData()

function AppendFood(data){
   let container=document.getElementById("menu")
   container.innerHTML=null;

   data.forEach(function(elem){

      let div=document.createElement("div")

  let image = document.createElement('img')
  image.src=elem.image;

      let title  = document.createElement('h3');
      title.innerText=elem.title

      let price=document.createElement('h3');
      price.innerText=`₹ ${elem.price}`

      let rating=document.createElement('h3');
      rating.innerText=`Rating ${elem.rating}`

      let desc=document.createElement('p');
      desc.innerText=elem.description
      div.append(image,title,price,rating,desc)

      container.append(div)
   })

}

async function Sortlth(){
  let response = await fetch('http://127.0.0.1:3000/api/items/?_sort=price&_order=asc')
    let data= await response.json()
     AppendFood(data)
    console.log(data)
}

async function Filter(){
  let response = await fetch('http://127.0.0.1:3000/api/items/?rating_gte=2')
    let data= await response.json()
     AppendFood(data)
    console.log(data)
}