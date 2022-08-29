
// http://www.omdbapi.com/?i=tt3896198&apikey=49696c5
// const api_key = "49696c5";

document.querySelector("#movieBtn").addEventListener("click", getMovies);

function getMovies(){
    let searchInp = document.querySelector("#search").value;

    document.getElementById("movieD").innerHTML=null;

    const url= `https://www.omdbapi.com/?t=${searchInp}&apikey=49696c5`;
    
    async function fetchData(){
        try{
            let res = await fetch(url);
            let data = await res.json();
            if (data.Error=="Movie not found!"){
                movieD.innerHTML="Movie Not Found"
                let gif404 = document.createElement("img")
                gif404.src="https://media0.giphy.com/media/NTXqH1bUCfHBS/giphy.gif"
                movieD.append(gif404)
                movieD.setAttribute("id", "notFound");

                setTimeout(() => {
                    alert("Please check keyword & Try again!")
                    window.location.reload()
                }, 4000);
            }
            else{
                appendData(data);
            }
            console.log(data);
        }catch(err){
            console.log("error occured! :" ,err)
            let gif404 = document.createElement("img")
            gif404.src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
            movieD.append(gif404)
        }
        document.querySelector("#search").value=null;
    }
    fetchData();

}

function appendData(data){

    let wrapper = document.createElement("div");
    wrapper.setAttribute("class", "movie-box");

    let avatar = document.createElement("img");
    avatar.setAttribute("class", "movie-img");
    avatar.src=data.Poster;

    let info = document.createElement("div");
    info.setAttribute("class", "info-box");

    let recomend = document.createElement("span");
    recomend.setAttribute("class", "rec");
    recomend.innerText="Recommended";

    let title = document.createElement("h2");
    title.innerText=data.Title;

    let date = document.createElement("p");
    date.innerText=`Realising : ${data.Released}`;

    let runTime = document.createElement("p");
    runTime.innerText=`Runtime : ${data.Runtime}`;

    let actors = document.createElement("p");
    actors.innerText=`Star Cast : ${data.Actors}`;

    let lang = document.createElement("p");
    lang.innerText=`Languages : ${data.Language}`;

    let rating = document.createElement("p");
    rating.innerText=`Rating: ${data.imdbRating}`;
    let imdbRate = +data.imdbRating;

    if (imdbRate>8.5){
        info.append(recomend, title, date, runTime, actors, lang, rating);
    }
    else {
        info.append(title, date, runTime, actors, lang, rating);
    }

    wrapper.append(avatar,info);

    document.querySelector("#movieD").append(wrapper);
}