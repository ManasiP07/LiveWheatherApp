const API_KEY = "b572e485adb571e1c6d0e08f15584495";
const API_URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const wheatherIcon=document.querySelector(".wheather-icon");

async function checkWheather(city){
    console.log("In weather");
    const response=await fetch(API_URL+city+"&appid="+API_KEY);
var data=await response.json();
console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

if(data.wheather-container[0].main=="Clouds")
{
    wheatherIcon.src="cloudy.png";
}
else if(data.wheather-container[0].main=="Clear")
{
    wheatherIcon.src="clear.png";
}
else if(data.wheather-container[0].main=="Rain")
{
    wheatherIcon.src="rainy.jpg";
}
else if(data.wheather-container[0].main=="Drizzle")
{
    wheatherIcon.src="drizzle.png";
}
else if(data.wheather-container[0].main=="Mist")
{
    wheatherIcon.src="mist.png";
}



}
searchBtn.addEventListener("click",()=>{
    checkWheather(searchBox.value);
})





