<<<<<<< HEAD
const api_key = '77a25ce0fa3a15aaab20cb5476933a59';
const url = "https://api.openweathermap.org/data/2.5/weather?q="
const country = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    fetchdata(country.value)
});


async function fetchdata(query) {
    const res = await fetch(`${url}${query}&appid=${api_key}&units=metric`);
    const data = await res.json();
    const invalid = document.getElementById("invalid");
    // console.log(data);

    if(res.status == 404 || res.status == 400) {
        invalid.style.display = 'block';
        document.getElementById('details').style.display = 'none';
    } else {
        invalid.style.display = 'none';
        document.getElementById('details').style.display = 'block';
        bindData(data);
    }

}

function bindData(data) {

    // to display date
    const cal = document.querySelector('.cal');
    const date = document.getElementById('date');

    d = new Date()
    localTime = d.getTime()
    localOffset = d.getTimezoneOffset() * 60000
    utc = localTime + localOffset
    var atl = utc + (1000 * data.timezone)
    dt = new Date(atl).toString();
    
    date.innerHTML = dt.slice(0,15);
    cal.src = './assets/date.png';
    
    // end of display date

    //  to display time 
    const time = document.getElementById('time');
    const clock = document.querySelector('.clock');
    const tm = parseInt(dt.slice(16,18));

    if(tm >= 12 && tm<24) {
        time.innerHTML = `${tm-12}${dt.slice(18,21)} P.M`;
    } else if(tm == 24){
        time.innerHTML = `00${dt.slice(18,21)} A.M`;
    } else {
        time.innerHTML = `${tm}${dt.slice(18,21)} A.M`;
    }

    clock.src = './assets/clock.png';
    // end of display time

    // to display city name
    const city = document.querySelector('.city');
    const name = document.getElementById("name");

    name.innerHTML = data.name;
    city.src = './assets/city.png';
    // end of display city name

    //  to display temparature
    const temp = document.querySelector(".temp");
    const curTemp = document.getElementById("cur_temp");

    temp.src = './assets/temparature.png';
    curTemp.innerHTML = Math.round(data.main.temp) + '°C' + ' Temparature';
    // end of display temparature

    // to display weather condition
    const main = document.getElementById("main");
    const mcity = document.querySelector(".maincity");

    mcity.innerHTML = data.weather[0].main;
    if(data.weather[0].main == 'Clouds') {
        main.src = './assets/cloudy.png';
    } else if(data.weather[0].main == 'Clear') {
        main.src = './assets/clear.png';
    } else if(data.weather[0].main == 'Rain') {
        main.src = './assets/rain.jpeg';
    } else if(data.weather[0].main == 'Snow') {
        main.src = './assets/snow.jpeg';
    } else if(data.weather[0].main == 'Drizzle') {
        main.src = './assets/drizzle.jpeg';
    }
    // end of display weather condition

    //  to display humidity and wind-speed
    const humid = document.getElementById("humidity");
    const humidy = document.querySelector('.humid');
    const wind = document.querySelector('.wind');
    const windSpeed = document.getElementById("wind-speed");

    humid.innerHTML = data.main.humidity + '%' + '<br>humid';
    humidy.src = './assets/humidity.png'
    
    windSpeed.innerHTML = data.wind.speed + ' km/h' + '<br> Wind Speed'
    wind.src = './assets/windspeed.png'
    // end of display humidity and wind-speed

}

=======
const api_key = '77a25ce0fa3a15aaab20cb5476933a59';
const url = "https://api.openweathermap.org/data/2.5/weather?q="
const country = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    fetchdata(country.value)
});


async function fetchdata(query) {
    const res = await fetch(`${url}${query}&appid=${api_key}&units=metric`);
    const data = await res.json();
    const invalid = document.getElementById("invalid");
    // console.log(data);

    if(res.status == 404 || res.status == 400) {
        invalid.style.display = 'block';
        document.getElementById('details').style.display = 'none';
    } else {
        invalid.style.display = 'none';
        document.getElementById('details').style.display = 'block';
        bindData(data);
    }

}

function bindData(data) {

    // to display date
    const cal = document.querySelector('.cal');
    const date = document.getElementById('date');

    d = new Date()
    localTime = d.getTime()
    localOffset = d.getTimezoneOffset() * 60000
    utc = localTime + localOffset
    var atl = utc + (1000 * data.timezone)
    dt = new Date(atl).toString();
    
    date.innerHTML = dt.slice(0,15);
    cal.src = './assets/date.png';
    
    // end of display date

    //  to display time 
    const time = document.getElementById('time');
    const clock = document.querySelector('.clock');
    const tm = parseInt(dt.slice(16,18));

    if(tm >= 12 && tm<24) {
        time.innerHTML = `${tm-12}${dt.slice(18,21)} P.M`;
    } else if(tm == 24){
        time.innerHTML = `00${dt.slice(18,21)} A.M`;
    } else {
        time.innerHTML = `${tm}${dt.slice(18,21)} A.M`;
    }

    clock.src = './assets/clock.png';
    // end of display time

    // to display city name
    const city = document.querySelector('.city');
    const name = document.getElementById("name");

    name.innerHTML = data.name;
    city.src = './assets/city.png';
    // end of display city name

    //  to display temparature
    const temp = document.querySelector(".temp");
    const curTemp = document.getElementById("cur_temp");

    temp.src = './assets/temparature.png';
    curTemp.innerHTML = Math.round(data.main.temp) + '°C' + ' Temparature';
    // end of display temparature

    // to display weather condition
    const main = document.getElementById("main");
    const mcity = document.querySelector(".maincity");

    mcity.innerHTML = data.weather[0].main;
    if(data.weather[0].main == 'Clouds') {
        main.src = './assets/cloudy.png';
    } else if(data.weather[0].main == 'Clear') {
        main.src = './assets/clear.png';
    } else if(data.weather[0].main == 'Rain') {
        main.src = './assets/rain.jpeg';
    } else if(data.weather[0].main == 'Snow') {
        main.src = './assets/snow.jpeg';
    } else if(data.weather[0].main == 'Drizzle') {
        main.src = './assets/drizzle.jpeg';
    }
    // end of display weather condition

    //  to display humidity and wind-speed
    const humid = document.getElementById("humidity");
    const humidy = document.querySelector('.humid');
    const wind = document.querySelector('.wind');
    const windSpeed = document.getElementById("wind-speed");

    humid.innerHTML = data.main.humidity + '%' + '<br>humid';
    humidy.src = './assets/humidity.png'
    
    windSpeed.innerHTML = data.wind.speed + ' km/h' + '<br> Wind Speed'
    wind.src = './assets/windspeed.png'
    // end of display humidity and wind-speed

}

>>>>>>> f898f49 (added assets folder)
