let HotelData = JSON.parse(localStorage.getItem("Booked")) || [];
AppendData(HotelData);
console.log(HotelData);

function AppendData(HotelData) {
  let container = document.getElementById("hotel_details");

  HotelData.forEach(function (elem) {
    let div = document.createElement("div");
    div.setAttribute("id", "hotel");

    let image = document.createElement("img");
    image.src = elem.Images.one;
    let title = document.createElement("h3");
    title.innerText = elem.Title;

    let price = document.createElement("h5");
    price.innerText = `Price Per Room ${elem.Price}`;

    let rate = document.createElement("h5");
    rate.innerText = `Ratings ${elem.Rating}`;

    let ac = document.createElement("h4");
    ac.innerText = `Ac ${elem.Ac}`;

    div.append(image, title, price, rate, ac);

    container.append(div);
  });
}

function Booked() {
  setInterval(function () {
    let name = document.getElementById("user_name").value;
    alert(`${name} Your booking is successful!`);
  }, 5000);
}