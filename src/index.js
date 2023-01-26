const weatherDiv = document.getElementById("weatherDiv")

async function getWeather(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33&lon=44&exclude=minutely&appid=c1b647a23c9bdda2769d0c7cde5b0042', {mode:"cors"})
    const weatherData = await response.json()
    console.log(weatherData)

}

getWeather()