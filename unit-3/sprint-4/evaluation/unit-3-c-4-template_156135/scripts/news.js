import sidebar from "../components/sidebar";


let Fetch2= async()=>{

let res= await fetch(`https://masai-mock-api.herokuapp.com/news?q=${tesla}`)

let data= await res.json()
console.log(data)


}

Fetch2()