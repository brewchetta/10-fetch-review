// EXERCISES

// 1. Create a section for planetary buttons. Fetch the planet data and create a <button> for each of the planets in the json file.

// 2. When a planet button is clicked, populate a section with all the information for that planet except the `is_planet` attribute. 
// ...Use an <img> tag to show the image for that planet. 
// ...Use a <ul> and populate the <ul> with <li>s for each string in the `god_of` section.

// 3. Make sure to clear out the `god_of` section whenever a new planet is clicked and then repopulate that <ul>.

// 4. If the planet is listed as `false` for `is_planet`, make the planet's <img> tag smaller (you can style it to have a smaller width) when setting the <img> tag's other attributes. 
// If it's listed as `true` make the <img> tag larger (you can style it's width again).

// URL
const BASE_URL = "http://localhost:3000/planets/"

// DOM ELEMENTS
const planetButtons = document.querySelector("#planet-buttons")
const planetNameHeader = document.querySelector("#planet-name")
const planetImg = document.querySelector("#planet-img")
const planetFunFactP = document.querySelector("#planet-fun-fact")
const planetOrbitP = document.querySelector("#planet-orbit")
const planetGodOfUl = document.querySelector("#planet-god-of")

// FETCH PLANETS & CREATE BUTTONS
async function createPlanetButtons() {
    const response = await fetch(BASE_URL)
    const data = await response.json()

    data.forEach(createButton)
}

// CREATE BUTTON FOR INDIVIDUAL PLANET OBJ
function createButton(planetObj) {
    const button = document.createElement("button")
    button.textContent = planetObj.name
    planetButtons.append( button )

    button.addEventListener( "click", () => loadSpecificPlanetInfo(planetObj.id) )
}

// LOADS PLANET INFO ON BUTTON CLICK
async function loadSpecificPlanetInfo(id) {
    const response = await fetch(BASE_URL + id)
    const data = await response.json()

    planetNameHeader.textContent = data.name
    planetFunFactP.textContent = data.fun_fact
    planetOrbitP.textContent = data.orbital_period_in_earth_days

    planetImg.src = data.image
    planetImg.alt = data.name

    if (data.is_planet) {
        planetImg.style.width = "240px"
    } else {
        planetImg.style.width = "180px"
    }

    populateGodOfList( data.god_of )
}

// CLEAR THEN POPULATE UL
function populateGodOfList(arrayItems) {
    const previousLis = document.querySelectorAll("#planet-god-of li")
    previousLis.forEach(li => li.remove())

    arrayItems.forEach( itemString => {
        const li = document.createElement("li")
        li.textContent = itemString
        planetGodOfUl.append(li)
    })
}

// INITIAL PAGE LOAD
createPlanetButtons()

// LUNCH UNTIL 2:05 EST