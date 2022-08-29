async function getData1() {
    //   let query = document.getElementById("query").value;
    
    //   let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      let url =`https://www.themealdb.com/api/json/v1/1/random.php`
    
      let res = await fetch(url);
      let data = await res.json();
    appendData1(data.meals)
      console.log(data.meals);
    }
    getData1()
    
    // append Function---------------------
    
    function appendData1(data){
        
        data.forEach(function(elem){
            let container=document.createElement("div")
            container.setAttribute("id","box")
            let div= document.createElement("div")
    
            let tag=document.createElement("h3")
            tag.innerText=elem.strMeal
    
           
            let image=document.createElement("img")
            image.src=elem.strMealThumb
            div.append(tag,image)
            container.append(div)
            document.getElementById("randomresult").append(container)
            
    
            
        })
    }
    
    export {getData1,appendData1}
    