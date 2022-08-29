// let url=https://masai-vouchers-api.herokuapp.com/api/vouchers

async function Data() {
    let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
    try {
      let res = await fetch(url)
      let data =  await res.json()
       appendData(data)
      console.log(data)
    } catch (err) {
      console.log("Error")
    }
  }
  Data()



  let appendData=(data)=>{
    data.forEach((elements)=>{
      elements.vouchers.forEach((elem)=>{
     

     let container = document.createElement("div")
     container.setAttribute("class", "voucher")

    //  let voucherCard = document.createElement("div")
    //  voucherCard.setAttribute("class", "voucher")

     let name1 = document.createElement("h3")
     name1.innerText =`Name -${elem.name}`

     let image1 = document.createElement("img")
     image1.src = elem.image

     let price1 = document.createElement("h4")
     price1.setAttribute("id","wallet_balance")
     price1.innerText = `Price-${elem.price}`

     let btn=document.createElement("button")
     btn.setAttribute("class","buy_voucher")
     btn.innerText="Buy"

     let buyItem={
     image:elem.image,
     name:elem.name,
     price:elem.price
     }

     btn.onclick=()=>{
       localStorage.setItem("purchase",JSON.stringify(buyItem))
       window.location.href="purchase.html"
     }
    
     container.append(image1, name1, price1,btn)

     console.log(name1, image1, price1)

 

     document.getElementById("voucher_list").append(container)
   })
 
   })

  }
   
   


