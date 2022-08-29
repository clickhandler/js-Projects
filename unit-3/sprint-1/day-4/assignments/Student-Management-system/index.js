
    function Students(n, c, u, b, i) {

      this.Name = n;
      this.Course = c;
      this.Unit = u;
      this.Batch = "Ft-web " + b;
      this.Image = i
  }

  function storeData() {

      event.preventDefault()
      let form = document.querySelector("#studentdata")
      let Name = form.name.value;
      let Course = form.course.value;
      let Unit = form.unit.value;
      let Batch = form.batch.value
      let Image = form.image.value;





      let s1 = new Students(Name, Course, Unit, Batch, Image)


      let Data = JSON.parse(localStorage.getItem("students")) || []
      Data.push(s1)

      localStorage.setItem("students", JSON.stringify(Data))


      document.getElementById("name").value = null;
      document.getElementById("course").value = null;
      document.getElementById("unit").value = null;
      document.getElementById("batch").value = null;
      document.getElementById("image").value = null;

      window.location.href = "Dashboard.html"

      calculate()









      function calculate() {
          let Data = JSON.parse(localStorage.getItem("students")) || []


          let obj = {}

          for (var i = 0; i < Data.length; i++) {
              if (!obj[Data[i].Batch]) {
                  obj[Data[i].Batch] = 0
              }
          }

          for (var i = 0; i < Data.length; i++) {
              obj[Data[i].Batch]++
          }


          console.log(obj)
          
          localStorage.setItem("BatchInfo", JSON.stringify(obj))


      }



  }