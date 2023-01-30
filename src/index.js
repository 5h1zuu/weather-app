import { getTemp } from "./getWeather"

const weatherDiv = document.querySelector(".weatherDiv")
const weatherType = document.getElementById("#weatherType")
const cityName = document.getElementById("cityName")
const temperature = document.getElementById("temperature")
const feel = document.getElementById("feel")
const high = document.getElementById("high")
const humidity = document.getElementById("humidity")
const searchBtn = document.getElementById("searchBtn")


searchBtn.addEventListener("click",getTemp)
