document.getElementById("weatherDiv"),async function(){const e=await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33&lon=44&exclude=minutely&appid=c1b647a23c9bdda2769d0c7cde5b0042",{mode:"cors"}),a=await e.json();console.log(a)}();