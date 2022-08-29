
    let Data = JSON.parse(localStorage.getItem("students")) || []


    function display() {
        let Data = JSON.parse(localStorage.getItem("students")) || []

        let container = document.getElementById("container")
        container.innerText = null
        Data.forEach(function (elem, index) {
            var div = document.createElement("div")

            let img = document.createElement("img")
            img.src = elem.Image
            var name = document.createElement("p")
            name.innerText = "Name: " + elem.Name;

            var batch = document.createElement("p")
            batch.innerText = "Batch: " + elem.Batch

            var unit = document.createElement("p")
            unit.innerText = "Unit: " + elem.Unit

            var course = document.createElement("p")
            course.innerText = "Course: " + elem.Course;


            var btn = document.createElement("button")
            btn.innerText = "Remove"
            btn.setAttribute("id","button")
  
            btn.addEventListener("click", function () {
                RemoveItem(index);
            })
         
            div.append(img, name, batch, unit, course, btn)

            container.append(div)



        })


    }
    
    display()


    function RemoveItem(index) {
        let Data = JSON.parse(localStorage.getItem("students")) || []

        let newData = Data.filter(function (el, i) {
            if (i === index) {
                let trash = JSON.parse(localStorage.getItem("trash")) || []
                trash.push(el)
                localStorage.setItem("trash", JSON.stringify(trash))
            }
            else {
                return i != index;
            }

        })
        localStorage.setItem("students", JSON.stringify(newData));
        display()
    }

function showB(){
    let obj=(localStorage.getItem("BatchInfo"))||[]
   
     console.log(obj)
    let Box=document.getElementById("ShowBatch")

    let text=document.createElement("h2")
    text.innerText=obj;

    Box.append(text)

    console.log(obj)
  
}

showB()