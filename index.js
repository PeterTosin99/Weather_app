let inputTxt = document.getElementById("input");
let search = document.querySelector(".search")
let countryTxt = document.querySelector(".country");
let dateTxt = document.querySelector(".date")
let tempTxt = document.querySelector(".temp")
let tempType = document.querySelector(".temptype")
let img = document.querySelector("img")
img.style = "width:250px; height:auto; border-radius:10px; margin-left: 150px; margin-top:-37px;"

search.addEventListener("click", ()=>{

    let value = inputTxt.value
    getweather(value)
    
})

async function getweather(value){
    try{
    const response  = await fetch(`https://api.weatherapi.com/v1/current.json?key=68bfd9be50d64381953162533242205&q=${value}`, {mode: 'cors'})

 const result = await response.json();
    console.log(result)
    console.log(result.location.name)
    countryTxt.innerHTML = result.location.name;
    dateTxt.innerHTML = result.location.localtime;
    tempTxt.innerHTML = result.current.temp_c + "<sup>o</sup>c";
    tempType.innerHTML = result.current.condition.text;
   img.src = result.current.condition.icon;
}
catch(e) {
    console.log("not avail")

}
}



fetch(`https://api.weatherapi.com/v1/current.json?key=68bfd9be50d64381953162533242205&q=nigeria`, {mode: 'cors'})

.then(function(response) {
   return response.json();
 })
 .then(function(response) {
    console.log(response.location.name)
    countryTxt.innerHTML = response.location.name;
    dateTxt.innerHTML = response.location.localtime;
    tempTxt.innerHTML = response.current.temp_c + "<sup>o</sup>c";
    tempType.innerHTML = response.current.condition.text;
    img.src = response.current.condition.icon;
   
  console.log(response)
 });