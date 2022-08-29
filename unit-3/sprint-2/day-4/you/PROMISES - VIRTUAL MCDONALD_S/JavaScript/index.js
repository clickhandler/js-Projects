document.querySelector("#orderBtn").addEventListener("click", orderFunc);

function orderCheck(){
    return true; //false
}

function checkboxFunc(){
    let markedCheck = document.querySelectorAll(".mcF");
    for (let i = 0; i < markedCheck.length; i++) {  
        if (markedCheck[i].checked){
            return markedCheck[i].value;
        }
    }
}

function orderFunc(){
    let loadImg = document.createElement("img");
    loadImg.src = "https://i.gifer.com/origin/a1/a1d81f564eeb1468aefbcfd54d1571b8_w200.gif";
    document.querySelector("#foodStock").append(loadImg);

    let orderMc= new Promise(function(resolve, reject){
        let temp = checkboxFunc();
        let redT= document.querySelector("#redTag");
        if (temp===undefined){
            redT.innerText="*Sorry! You have not ordered anything";
        }

        let ordFlag = orderCheck();

        let time = Math.floor(Math.random()*10000);

        let ordIDnum = Math.floor(Math.random()*10000000);

        let ordId= document.querySelector("#orderId");

        if (ordFlag===true){
            setTimeout(() => {
                resolve(temp);
                if (temp){
                    let idtemp= `Order Id: McD${ordIDnum}ABC`;
                    ordId.append(idtemp);
                }
            }, time);
        }
        else{
            reject("Sorry! can't deliver the food");
        }
    })

    document.querySelector("#images");
    let status= document.querySelector("#status");
    let prices= document.querySelector("#price");

    orderMc.then(function(value){
        loadImg.src="";
        if (value!==undefined){
            status.innerText= `Your ${value} is ready!`
            status.style.backgroundColor="black";
            status.style.color="white";
        }

        if (value==="McSPICY CHICKEN"){
            images.src="https://www.mcdonaldsindia.com/images/productview/McSpicyChicken.jpg"
            prices.innerText=`Price: $ ${300}`
            setTimeout(() => {
                alert(`${value} Delivered!`);
            }, 3000);
        }
        else if (value==="BIGSPICY CHICKEN WRAP"){
            images.src="https://www.mcdonaldsindia.com/images/productview/BigSpicyChickenWrap.jpg"
            prices.innerText=`Price: $ ${500}`
            setTimeout(() => {
                alert(`${value} Delivered!`);
            }, 3000);
        }
        else if (value==="McSPICY PANEER"){
            images.src="https://www.mcdonaldsindia.com/images/productview/McSpicyPaneer.jpg"
            prices.innerText=`Price: $ ${400}`
            setTimeout(() => {
                alert(`${value} Delivered!`);
            }, 3000);
        }
        else if (value==="McALLO TIKKI"){
            images.src="https://www.mcdonaldsindia.com/images/productview/McAllotikki.jpg"
            prices.innerText=`Price: $ ${150}`
            setTimeout(() => {
                alert(`${value} Delivered!`);
            }, 3000);
        }
        else if (value==="GREEN CHILLI KABAB NAAN"){
            images.src="https://www.mcdonaldsindia.com/images/products/new/Green-Chilli-Chicken-Kebab-Naan.jpg"
            prices.innerText=`Price: $ ${500}`
            setTimeout(() => {
                alert(`${value} Delivered!`);
            }, 3000);
        }
        else if (value==="CHEESY RICE BOWL WITH CHICKEN STRIPS"){
            images.src="https://www.mcdonaldsindia.com/images/products/new/Website-600x6001pixCheesy-Rice-Bowl-with-Chicken-Strips.png"
            prices.innerText=`Price: $ ${450}`
            setTimeout(() => {
                alert(`${value} Delivered!`);
            }, 3000);
        }
        else if (value==="SAUSAGE McMUFFINs"){
            images.src="https://www.mcdonaldsindia.com/images/products/BreakfastMenu/big/SausageMcMuffinwithEgg.jpg"
            prices.innerText=`Price: $ ${350}`
            setTimeout(() => {
                alert(`${value} Delivered!`);
            }, 3000);
        }
        else if (value==="MEXICAN CHEESY FRIES"){
            images.src="https://www.mcdonaldsindia.com/images/productview/Website600x600pix-Mexican-Cheesy-Fries.png"
            prices.innerText=`Price: $ ${550}`
            setTimeout(() => {
                alert(`${value} Delivered!`);
            }, 3000);
        }
        else{
            console.log("Please Order Food!");
        }
    })
}