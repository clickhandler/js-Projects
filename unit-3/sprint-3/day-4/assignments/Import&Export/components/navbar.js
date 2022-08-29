function navbar() {
  return `
    
    <a href="index.html">  <div id="logo"> <img src="https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_1280.png" alt=""></div></a>
       <h3>FoodResto</h3>
       <div id="inputSearch">
         <input type="text" oninput="debouncing(main,1000)"id="query" placeholder="Search Item">
       
        </div>
        <div><a href="dayreceipe.html"><h3>Day</h3></a>
        </div>
        <div><a href="random.html"><h3>Random</h3></a>
        </div>
        

        <div><a href="login.html"><h3>Login</h3></a></div>
        <div><a href="signup.html"><h3>SignUp</h3></a></div>
     </div>
     
    `;
}
export default navbar;
