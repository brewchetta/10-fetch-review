// Afternoon Exercises Part 2
const BASE_URL = "https://goweather.xyz/weather/"

// 1. Choose a default city. This can be a city close to you or alternately "NewYorkCity". Your city isn't guaranteed to be in the API so test in the browser by going to https://goweather.xyz/weather/YOUR_CITY_HERE.

// Once you have tested your city, create a let for currentCity.

// For example: https://goweather.xyz/weather/NewYorkCity
// let currentCity = "NewYorkCity"

// 2. Make a fetch to the url + `currentCity` which will return simple weather data. Display the name of the currentCity, the current temperature, and wind speed.

// 3. The temperature is currently in celsius so convert it to farenheit. You will need to find a way to get only the first part of the temperature string, convert it into an integer, and then do the math for it.

// BONUS: Do this for wind speed as well from km/h to mi/h.

// 4. Create a "Forecast" section. Display the temperature for the next three days in the section when a city is fetched. Convert them to farenheit.

// BONUS: Create a <form> for city names. When submitted, change the currentCity to the submitted city and refetch the data, rendering as necessary.