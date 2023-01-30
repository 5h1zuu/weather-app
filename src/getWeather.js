async function getTemp(){
    const searchValue = document.getElementById("searchValue").value
    const weatherDiv = document.querySelector(".weatherDiv")
    const weatherType = document.getElementById("#weatherType")
    const cityName = document.getElementById("cityName")
    const temperature = document.getElementById("temperature")
    const feel = document.getElementById("feel")
    const high = document.getElementById("high")
    const humidity = document.getElementById("humidity")

	try{
	const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=c1b647a23c9bdda2769d0c7cde5b0042`)
	const weatherTemp = await response.json()
    
    
	}

	catch(err){
		console.error(err)
   	};

	
}

export { getTemp }