


let walletAmt=700
document.getElementById("wallet").innerText=walletAmt
let url = "https://grocery-masai.herokuapp.com/items";

async function Groceries() {
    try {
        let res = await fetch(url);

        let data = await res.json();
        append(data.data);
         console.log(data.data);
    } catch (Err) {
        console.log("ERROR 404");
    }
}

Groceries();

function append(data) {
    
    data.forEach(function (elem) {
        
        let container = document.getElementById("groceries");

        let cards= document.createElement("div");
        cards.setAttribute("class","item")

        let name = document.createElement("h3");
        name.innerText = elem.name;

        let image = document.createElement("img");
        image.src = elem.image;

        let price = document.createElement("h4");
        price.innerText = elem.price;

        let btn = document.createElement("button");
        btn.innerText = "Add to cart";
        btn.setAttribute("class", "add_to_cart");
        btn.addEventListener("click", function () {
            Additem(elem);
        });

        cards.append(image, name, price, btn);

        container.append(cards);
    });
}

let GroceriesArr = [];
function Additem(elem) {
GroceriesArr.push(elem);
let deducted=walletAmt-elem.price;
document.getElementById("wallet").innerText=deducted
localStorage.setItem("cart_items", JSON.stringify(GroceriesArr));
console.log(GroceriesArr);
}

