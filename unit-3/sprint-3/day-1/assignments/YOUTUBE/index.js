 // https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=channelTypeUnspecified&maxResults=150&videoSyndicated=any&videoType=any&key=AIzaSyCE2vwJ31l29LSxaP8dZPsp9lXupUofMlg
    //    https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=channelTypeUnspecified&maxResults=100&videoEmbeddable=any&videoSyndicated=any&videoType=videoTypeUnspecified&key=AIzaSyCE2vwJ31l29LSxaP8dZPsp9lXupUofMlg

    // const api_key = "AIzaSyCE2vwJ31l29LSxaP8dZPsp9lXupUofMlg"
    const api_key = "AIzaSyCQs0nBp52Kwu104YR1AmjsjsJ3UmGdQX8"
    let container1 = document.getElementById("Showcase");

    async function Showcase() {
        //  let url="https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=AIzaSyCQs0nBp52Kwu104YR1AmjsjsJ3UmGdQX8&maxResults=40"
        let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=channelTypeUnspecified&maxResults=100&videoSyndicated=any&videoType=any&key=AIzaSyCQs0nBp52Kwu104YR1AmjsjsJ3UmGdQX8"

        try {
            let res = await fetch(url)

            let data1 = await res.json()
            console.log(data1)
            appendData(data1.items)


        }
        catch (err) {
            console.log(err)
        }

    }
    Showcase()

    function appendData(data1) {

        data1.forEach(function ({ id: { videoId }, snippet: { title, thumbnails } }) {

            let div = document.createElement('div');

            let title1 = document.createElement('h5');
            title1.innerText = title

            
            let image1 = document.createElement("img")
            image1.src = thumbnails.high.url;

            div.append(image1,title1)


            let video1 = {
                title,
                videoId,
                thumbnails,
                
            };


            div.onclick = () => {
                getVideo(video1)
            }

            container1.append(div)
            // console.log(image,title)

        })

    }
    getVideo1 = (video1) => {

        //  VideoArr.push(video)

        localStorage.setItem("videosData", JSON.stringify(video1))

        window.location.href = "video.html"
    }



    let search = async () => {
        container1.innerHTML = ""
        try {
            
            let query = document.getElementById("query").value
            let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${api_key}`
            let res = await fetch(url)

            let data = await res.json()
            append(data.items)

            // console.log(data)
        } catch (err) {
            console.log(err)
        }


        document.getElementById("query").value = ""

    }


    let append = (data) => {

        let container = document.getElementById("result")
        container.innerHTML = null;
        data.forEach(function ({ id: { videoId }, snippet: { title, thumbnails } }) {
            let div = document.createElement("div")
            div.setAttribute("id", "divbox")

            let image = document.createElement("img")
            image.src = thumbnails.high.url;

            // let ifram = document.createElement("iframe")
            // ifram.src = `https://www.youtube.com/embed/${videoId}`
            // ifram.allow = "fullscreen"

            let title1 = document.createElement("h4")
            title1.innerText = title

            div.append(image, title1)

            console.log(data)



            let video = {
                title,
                videoId,
                thumbnails,
            };


            div.onclick = () => {
                getVideo(video)
            }

            container.append(div)
        })



    }

    // let VideoArr=JSON.parse(localStorage.getItem("videosData"))||[]


    getVideo = (video) => {

        //  VideoArr.push(video)

        localStorage.setItem("videosData", JSON.stringify(video))

        window.location.href = "video.html"
    }



// <iframe width="560" height="315" 
// src="https://www.youtube.com/embed/y3eM0zpoKlE" 
// title="YouTube video player" 
// frameborder="0" 
// allow="accelerometer;
//  autoplay; clipboard-write; 
//  encrypted-media; gyroscope; 
//  picture-in-picture" allowfullscreen></iframe>