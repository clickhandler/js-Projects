let buyItem=JSON.parse(localStorage.getItem("purchase"))||[]
  

function Display(buyItem){



    let card =document.createElement("div")

    let name2=document.createElement("h3")
    name2.innerText=buyItem.name;
   

    let image2=document.createElement("img")
    image2.src=buyItem.image;

    let price2=document.createElement("h4")
    price2.innerText=buyItem.price

    console.log(image2,name2,price2)

    card.append(image2,name2,price2)
    document.getElementById("purchased_vouchers").append(card)

  
 
}
Display(buyItem)