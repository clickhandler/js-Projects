document.getElementById("search_box").addEventListener("keydown",fetchNews)


async function fetchNews(e){
    if(e.key=="Enter"){
  let search=document.getElementById("search_box").value;

  let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${search}`)

  let data = await res.json()

 append(data.articles)
  console.log(data.articles)

    }
}






function append(data){
  
data.forEach(function(elem){
let div=document.createElement("div")
div.setAttribute("id","box")

let image1=document.createElement("img")
image1.src=elem.urlToImage;

let author1=document.createElement("h3")
author1.innerText=elem.author

let title1=document.createElement("h3")
title1.innerText=elem.title


div.append(image1,title1,author1)


document.getElementById("news_result").append(div)


    })
    
}





 

export {fetchNews,append}