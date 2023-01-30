async function getTemp(){
    const searchValue = document.getElementById("searchValue").value
    const weatherType = document.getElementById("weatherType")
    const cityName = document.getElementById("cityName")
    const temperature = document.getElementById("temperature")
    const feel = document.getElementById("feel")
    const wind = document.getElementById("wind")
    const humidity = document.getElementById("humidity")
    const mainContent = document.getElementById("mainContent")
    let conversion = 273.15

	try{
	const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=c1b647a23c9bdda2769d0c7cde5b0042`)
	const weatherTemp = await response.json()

    mainContent.style.display = "flex"
    weatherType.innerHTML = weatherTemp.weather[0].description 
    cityName.innerText = weatherTemp.name
    temperature.innerText = `${(weatherTemp.main.temp - conversion).toFixed(2)} °C`
    feel.innerText = `Feels like: ${(weatherTemp.main.feels_like - conversion).toFixed(2)} °C`
    wind.innerText = `Wind: ${weatherTemp.wind.speed}km/h`
    humidity.innerText = `Humidity: ${weatherTemp.main.humidity}%`
    console.log(weatherTemp)


    
	}

	catch(err){
		console.error(err)
   	};

	
}

export { getTemp }


