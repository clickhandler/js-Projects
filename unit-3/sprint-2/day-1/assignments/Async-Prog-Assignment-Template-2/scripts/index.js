
function Movies(name, release, poster, IMDb) {
    this.Movie_Name = name;
    this.Release_Date = release;
    this.Poster_Url = poster;
    this.IMDb_Rating = IMDb;
}
let MovieInfo = []
var Movie1 = new Movies("Veer-Zara", "10-6-2007", "https://m.media-amazon.com/images/M/MV5BY2VlOTc4ZjctYjVlMS00NDYwLWEwZjctZmYzZmVkNGU5NjNjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg", "9")
var Movie2 = new Movies("Heena", "05-1-1995", "https://upload.wikimedia.org/wikipedia/en/6/6f/Henna_%281991%29.jpg", 7)
var Movie3 = new Movies("Tiger Zinda Hai", "10-6-2007", "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Tiger_Zinda_Hai_poster.jpg/220px-Tiger_Zinda_Hai_poster.jpg", "8")
var Movie4 = new Movies("Welcom", "10-6-2007", "https://upload.wikimedia.org/wikipedia/en/f/f4/Welcome_poster_2007.jpg", 5)
var Movie5 = new Movies("Dr.strange", "10-6-2007", "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg", "8")
var Movie6 = new Movies("Avengers", "10-6-2007", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg", "4")
var Movie7 = new Movies("Spiderman", "10-6-2007", "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg", "6")
var Movie8 = new Movies("Interstellar", "10-6-2007", "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg", "3")
var Movie9 = new Movies("Passengers", "10-6-2007", "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/DP_3244378_PASSENGERS%20%282016%29_1400x2100_English%20%28US%29_2.jpg?itok=TYolDZ12", "8")

MovieInfo.push(Movie1, Movie2, Movie3, Movie4, Movie5, Movie6, Movie7, Movie8, Movie9)
localStorage.setItem("movies", JSON.stringify(MovieInfo))
var MovieData = JSON.parse(localStorage.getItem("movies"))

displayData(MovieInfo)




function handleranksort() {
    var selector = document.querySelector("#Sorting").value;
    if (selector == "sort-lh") {
        MovieInfo.sort(function (a, b) {
            if (a.IMDb_Rating > b.IMDb_Rating) {
                return 1;
            }
            if (a.IMDb_Rating < b.IMDb_Rating) {
                return -1;
            }
            else {
                return 0;
            }

        });
        displayData(MovieInfo)
        console.log(MovieInfo)

    }


    if (selector =="sort-hl") {
        MovieInfo.sort(function (a, b) {
            if (a.IMDb_Rating > b.IMDb_Rating) {
                return -1;
            }
            if (a.IMDb_Rating < b.IMDb_Rating) {
                return 1;
            }
            else {
                return 0;
            }

        });
        console.log(MovieInfo)
        displayData(MovieInfo)

    }

}

function displayData(MovieData) {
    document.querySelector("#movies").innerHTML = "";
    MovieData.forEach(function (elem) {
        // MovieInfo.forEach(function (elem) {
        var tr = document.createElement("tr");
        tr.setAttribute("id", "Cont-1")

        var image = document.createElement("img")
        image.setAttribute("src", elem.Poster_Url)
        var td1 = document.createElement("td")
        td1.append(image)

        var td2 = document.createElement("td")
        td2.innerText = "MOVIE- " + elem.Movie_Name

        var td3 = document.createElement("td")
        td3.innerText = "Release Date- " + elem.Release_Date

        var td4 = document.createElement("td")
        td4.innerText = "Rating- " + elem.IMDb_Rating

        tr.append(td1, td2, td3, td4)
        document.querySelector("#movies").append(tr)


    })

}






