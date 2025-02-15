const API_KEY="168771779c71f3d64106d8a88376808a";
function renderWeatherInfo(data){
    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} *C` 
    document.body.appendChild(newPara);
}
async function showWeather(){
    try {
        let city="ga";
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data=await response.json();
        console.log('weather data:- ',data);
        renderWeatherInfo(data);
    } catch (err) {
        // handle code here
        console.log("Error Aya hai",err);
    } 
}

function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No Geolocation Supported");
    }
}

function showPosition(position){
    let lat=position.coords.latitude;
    let longi=position.coords.longitude;
    console.log(lat);
    console.log(longi);
}