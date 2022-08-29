let id;

let container = document.querySelector("#movies");

// 3rd execution 
async function searchMovies(querry){
    const api_key = "49696c5"
    let url= `https://www.omdbapi.com/?s=${querry}&apikey=${api_key}`

    try{
        let res= await fetch(url);
        let data = await res.json();

        return data.Search;
    }catch(err){
        console.log("err: ", err);
    }
}

//1st execution
function debouncing(func, delay){
    if (id){
        clearTimeout(id)
    }
    id=setTimeout(() => {
        func();
    }, delay);
}

// 4th execution 
function append(mData){
    container.innerHTML=null;
    container.style.display="block"
    if(mData===undefined){
        return false;
    }
    else if (mData.Poster==="N/A"){
        return false;
    }
    mData.forEach(element => {
        let div = document.createElement("div");
        div.setAttribute("class", "movieBox");

        let div1 = document.createElement("div");
        div1.setAttribute("class", "imgBox");

        let img = document.createElement("img");
        img.src=element.Poster;

        let div2 = document.createElement("div");
        div2.setAttribute("class", "infoDiv");

        let h4 = document.createElement("h4");
        h4.innerText=element.Title;

        let p1 = document.createElement("p");
        p1.innerText=`Type: ${element.Type}`;

        let p2 = document.createElement("p");
        p2.innerText=  `imdbID: ${element.imdbID}`

        div.onclick=()=>{
            getClickedData(element);
        }

        div1.append(img);

        div2.append(h4,p1,p2);

        div.append(div1,div2);

        container.append(div);
    });
}

document.querySelector("#cross");

cross.onclick=()=>{
    container.innerHTML=null;
    clicked.innerHTML=null;
    container.style.boxShadow="none";
}


let clicked = document.getElementById("clickedShow");

function getClickedData(clickData){
    clicked.innerHTML=null;

    let div = document.createElement("div");
    div.setAttribute("class", "movieBox2");

    let img = document.createElement("img");
    img.src=clickData.Poster;

    let div2 = document.createElement("div");
    div2.setAttribute("class", "infoDiv2");

    let h4 = document.createElement("h4");
    h4.innerText=clickData.Title;

    let p1 = document.createElement("p");
    p1.innerText=`Type: ${clickData.Type}`;

    let p2 = document.createElement("p");
    p2.innerText=  `imdbID: ${clickData.imdbID}`

    div2.append(h4,p1,p2);

    div.append(img,div2);

    clicked.append(div);
};

// 2nd execution
async function getAllMovies(){
    let querryV = document.querySelector("#querry").value;
    let response= searchMovies(querryV);
    let data = await response;
    console.log(data);

    append(data);
}


//Deployed link: https://jolly-vacherin-c28b62.netlify.app

// // dropDown list function
// function dropDown(container){
//     if(container.style.display==="none")
//     {
//         container.style.display="block";
//     }
//     else{
//         container.style.display="none"
//     }
// }