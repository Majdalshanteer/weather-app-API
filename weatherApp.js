  //...API Key

const api = 'a7113e14a4fe0bf2520ba82cf3755b1f';

//............weather data for your location.............

window.addEventListener('load', () => {
  let long;
  let lat;

  // Accessing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {

      console.log(position)

    long = position.coords.longitude;
    lat = position.coords.latitude;
    
    //The returned data is stored inside a JSON object called base

    const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

 // Using fetch to get data

 fetch(base)
 .then((response) => {
   return response.json();
 })
 .then((data) => {
    const{humidity} =data.main
    const { temp } = data.main;
    const place = data.name;
    const wind = data.wind.speed;
    const { description, icon } = data.weather[0];
    const percipitation=data.clouds.all
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
//......... define elemnts in html page.........

const location=document.getElementById('location')
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const todayDate=document.getElementById('dayDate')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[today.getDay()];
const dayName=document.getElementById('dayName')
const weatherDesc=document.getElementById('weatherDesc')
const percip= document.getElementById('percipitation')
const humi=document.getElementById('humidity')
const windSpeed=document.getElementById('windSpeed')
const tempMin=document.getElementById('tempMin')
const tempMax=document.getElementById('tempMax')
const pre=document.getElementById('pre')
const weatherIcon =document.getElementById('weatherIcon')



// ............Change readings depend on your location .........

location.textContent = `${place}`;
 todayDate.textContent = `${date}`;
console.log(date)
dayName.textContent=`${day}`;
const tempr=document.getElementById('tempC')
tempr.textContent=`${temp .toFixed(1)}°C`;
weatherDesc.textContent=`${description }`;
percip.textContent=`${percipitation } %`;
humi.textContent=`${humidity } %`;
windSpeed.textContent=`${(wind*3.6).toFixed(2) } km/h`;
tempMin.textContent=`${(data.main.temp_min.toFixed(1))}°C`;
tempMax.textContent=`${(data.main.temp_max.toFixed(1))}°C`;
pre.textContent=`${(data.main.pressure)}mb`;
weatherIcon.src=iconUrl

});
});
}

})


//.................. weather data for different Countries ...................

document.getElementById("country").addEventListener('change',function(){
   

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((city) => {
 var city=document.querySelector("#country").value;

      const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
      
      console.log(base)
 
 fetch(base)
 .then((response) => {
   return response.json();
 })
 .then((data) => {

    const{humidity} =data.main
    const { temp } = data.main;
    const place = data.name;
    const wind = data.wind.speed;
    const { description, icon } = data.weather[0];
    const percipitation=data.clouds.all
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

//...... define elemnts in html page.........

const location=document.getElementById('location')
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const todayDate=document.getElementById('dayDate')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[today.getDay()];
const dayName=document.getElementById('dayName')
const weatherDesc=document.getElementById('weatherDesc')
const percip= document.getElementById('percipitation')
const humi=document.getElementById('humidity')
const windSpeed=document.getElementById('windSpeed')
const tempMin=document.getElementById('tempMin')
const tempMax=document.getElementById('tempMax')
const pre=document.getElementById('pre')
const weatherIcon =document.getElementById('weatherIcon')
// ............Change readings depend on Countries .........

location.textContent = `${place}`;
 todayDate.textContent = `${date}`;
console.log(date)
dayName.textContent=`${day}`;
const tempr=document.getElementById('tempC')
tempr.textContent=`${temp .toFixed(1)}°C`;
weatherDesc.textContent=`${description }`;
percip.textContent=`${percipitation } %`;
humi.textContent=`${humidity } %`;
windSpeed.textContent=`${(wind*3.6).toFixed(2)} km/h`;
tempMin.textContent=`${(data.main.temp_min.toFixed(1))}°C`;
tempMax.textContent=`${(data.main.temp_max.toFixed(1))}°C`;
pre.textContent=`${(data.main.pressure ) } mb`;
weatherIcon.src=iconUrl

});
});


  





