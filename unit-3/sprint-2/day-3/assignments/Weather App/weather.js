const api_key = "fc638301ecb85f77851709265fde57f3"



async function getData(lat,lon) {

    let city = document.getElementById("city").value

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    // let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;


    let res = await fetch(url);
    let data = await res.json()
    append(data)
    console.log(data)

    




}

function append(data) {
    let container = document.getElementById("container")
    // container.innerHTML = null;

    let city = document.createElement("h3")
    city.innerText = data.name;

    let temper = document.createElement("p")
    temper.innerText = "Current Temp- " + data.main.temp;

    let max_temp = document.createElement("p")
    max_temp.innerHTML = "Max Temp- " + data.main.temp_max

    let min_temp = document.createElement("p")
    min_temp.innerHTML = "Min Temp- " + data.main.temp_min

    var iframe = document.getElementById("gmap_canvas")
    iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    container.append(city, temper, max_temp, min_temp)
}


function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude);
        console.log(longitude);
        getData(latitude,longitude)
    }
}
getLocationWeather()