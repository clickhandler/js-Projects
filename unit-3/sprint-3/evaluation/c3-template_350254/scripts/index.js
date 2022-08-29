et HotelData=[]
  async function Gethotel(event) {
    let query = document.getElementById("query").value;

    let url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`;

    let res = await fetch(url);
    let data = await res.json();
    console.log(data.hotels);
    AppendData(data.hotels);
  }

  Gethotel();

  function AppendData(data) {
    let container = document.getElementById("hotels_list");
    container.innerHTML=null;

    data.forEach(function (elem) {
      let div = document.createElement("div");
      div.setAttribute("id", "hotel");

      let image = document.createElement("img");
      image.src = elem.Images.one;
      let title = document.createElement("h3");
      title.innerText = elem.Title;

      let price = document.createElement("h5");
      price.innerText = `Price Per Room ${elem.Price}`

      let rate = document.createElement("h5");
      rate.innerText = `Ratings ${elem.Rating}`

      let ac = document.createElement("h4");
      ac.innerText =`Ac ${elem.Ac}`
      
      let btn=document.createElement("button")
      btn.setAttribute("class","book")
      btn.innerText="Book Now"

      btn.addEventListener("click",function(){
        Bookhotel(elem)
      })
      div.append(image, title, price, rate,ac,btn);

      container.append(div);
     });
  }




  function Bookhotel(elem){
    HotelData.push(elem)
    console.log(HotelData)
    localStorage.setItem("Booked",JSON.stringify(HotelData))
  
}
  