//store the products array in localstorage as "data"

let ProductArr = [];

// Form----------------------------------------


function ProductData(e) {
  let form = document.getElementById("product_form");
  e.preventDefault();

  var brand1 = product_form.product_brand.value;
  var name1 = product_form.product_name.value;
  var price1 = product_form.product_price.value;
  var image1 = product_form.product_image.value;

  let Products = new Nikestore(brand1, name1, price1, image1);

  ProductArr.push(Products);

  localStorage.setItem("data", JSON.stringify(ProductArr));


  document.getElementById("product_brand").value = "";
  document.getElementById("product_name").value = "";
  document.getElementById("product_price").value = "";
  document.getElementById("product_image").value = "";
  console.log(ProductArr);
}
// Constructor Function------------------------------
function Nikestore(b, n, p, i) {
  this.brand = b;
  this.name = n;
  this.price = p;
  this.image = i;
}
