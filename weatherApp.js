  //...API Key

const api = 'a7113e14a4fe0bf2520ba82cf3755b1f';



//............weather data for your location.............


window.addEventListener('load', () => {
  let long;
  let lat;

  // Accessing Geolocation of User

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {

      // Storing Longitude and Latitude in variables

    long = position.coords.longitude;
    lat = position.coords.latitude;
    const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
   
    console.log(lat)
    console.log(long)
    console.log(base)

 // Using fetch to get data

 fetch(base)
 .then((response) => {
   return response.json();
 })
 .then((data) => {
    const{pressure} =data.main
    const{humidity} =data.main

    const { temp } = data.main;
    const place = data.name;
    const wind = data.wind.speed;

    const { description, icon } = data.weather[0];
    const { sunrise, sunset } = data.sys;
    const percipitation=data.clouds.all


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




// ............Change readings depend on Countries .........


//location
location.textContent = `${place}`;

//date
 todayDate.textContent = `${date}`;
console.log(date)

//name of day
dayName.textContent=`${day}`;

//temp
const tempr=document.getElementById('tempC')
tempr.textContent=`${temp} ْC`;

//description
weatherDesc.textContent=`${description }`;

//percipitation
percip.textContent=`${percipitation } %`;

//humidity
humi.textContent=`${humidity } %`;

// wind
windSpeed.textContent=`${wind } km/h`;


});
});
}

})

//.................. weather data for different Countries ...................


document.getElementById("country").addEventListener('change',function(){
    let city;
    
    // Accessing Geolocation of User
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((city) => {
        // Storing Longitude and Latitude in variables

 var city=document.querySelector("#country").value;

      const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
      

      console.log(base)

 // Using fetch to get data
 
 fetch(base)
 .then((response) => {
   return response.json();
 })
 .then((data) => {
    const{pressure} =data.main
    const{humidity} =data.main

    const { temp } = data.main;
    const place = data.name;
    const wind = data.wind.speed;

    const { description, icon } = data.weather[0];
    const { sunrise, sunset } = data.sys;
    const percipitation=data.clouds.all




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




// ............Change readings depend on Countries .........


//location
location.textContent = `${place}`;

//date
 todayDate.textContent = `${date}`;
console.log(date)

//name of day
dayName.textContent=`${day}`;

//temp
const tempr=document.getElementById('tempC')
tempr.textContent=`${temp} ْC`;

//description
weatherDesc.textContent=`${description }`;

//percipitation
percip.textContent=`${percipitation } %`;

//humidity
humi.textContent=`${humidity } %`;

// wind
windSpeed.textContent=`${wind } km/h`;



});
});
}

})

  





