// Afternoon Exercises Part 2
const WEATHER_BASE_URL = "https://goweather.xyz/weather/"

// DOM ELEMENTS
const currentCityNameSpan = document.querySelector("#current-city-name")
const tempTodaySpan = document.querySelector("#temp-today")
const windTodaySpan = document.querySelector("#wind-today")
const dayOneForecastSpan = document.querySelector("#day-1-forecast")
const dayTwoForecastSpan = document.querySelector("#day-2-forecast")
const dayThreeForecastSpan = document.querySelector("#day-3-forecast")

// 1. Choose a default city. This can be a city close to you or alternately "NewYorkCity". Your city isn't guaranteed to be in the API so test in the browser by going to https://goweather.xyz/weather/YOUR_CITY_HERE.

// Once you have tested your city, create a let for currentCity.

// For example:
let currentCity = "NewYorkCity"

// 2. Make a fetch to the url + `currentCity` which will return simple weather data. Display the name of the currentCity, the current temperature, and wind speed.

async function getWeatherForCurrentCity() {
    const response = await fetch(WEATHER_BASE_URL + currentCity)
    const data = await response.json()

    currentCityNameSpan.textContent = currentCity
    const parsedTemp = parseInt(data.temperature)
    const convertedTemp = cToF(parsedTemp)
    tempTodaySpan.textContent = convertedTemp
    windTodaySpan.textContent = data.wind

    const parsedTemp1 = parseInt(data.forecast[0].temperature)
    dayOneForecastSpan.textContent = cToF(parsedTemp1)
 
    const parsedTemp2 = parseInt(data.forecast[1].temperature)
    dayTwoForecastSpan.textContent = cToF(parsedTemp2)
    
    const parsedTemp3 = parseInt(data.forecast[2].temperature)
    dayThreeForecastSpan.textContent = cToF(parsedTemp3)
}

function cToF(temp) {
    return (temp * 1.8) + 32
}

// 3. The temperature is currently in celsius so convert it to farenheit. You will need to find a way to get only the first part of the temperature string, convert it into an integer, and then do the math for it.

// BONUS: Do this for wind speed as well from km/h to mi/h.

// 4. Create a "Forecast" section. Display the temperature for the next three days in the section when a city is fetched. Convert them to farenheit.

// BONUS: Create a <form> for city names. When submitted, change the currentCity to the submitted city and refetch the data, rendering as necessary.

getWeatherForCurrentCity()