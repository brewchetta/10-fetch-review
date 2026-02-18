// Afternoon Exercises Part 1.5
const RACCOON_BASE_URL = "http://localhost:3000/raccoons/"

// 1. Copy the JSON data from GitHub into `raccoons.json` and start the server with `npx json-server raccoons.json`.

// 2. When the page loads, make a fetch call to the server for the raccoon data. Display each raccoon name as a <button>.

// 3. Clicking the button fetches the details for that raccoon and displays the details in a container with their name, etc.

// 4. If a raccoon does not have an `image_url`, use a default stock raccoon image instead.

const raccoonButtons = document.querySelector("#raccoon-buttons")
const raccoonName = document.querySelector("#raccoon-name")
const raccoonLocation = document.querySelector("#raccoon-location")
const raccoonImage = document.querySelector("#raccoon-image")

async function fetchAllRaccoons() {
    const response = await fetch(RACCOON_BASE_URL)
    const data = await response.json()
    
    data.forEach(createRaccoonButton)
}

function createRaccoonButton(raccoonObj) {
    const button = document.createElement("button")
    button.textContent = raccoonObj.name
    raccoonButtons.append(button)

    button.addEventListener("click", () => fetchRaccoon(raccoonObj.id))
}

async function fetchRaccoon(id) {
    const response = await fetch(RACCOON_BASE_URL + id)
    const data = await response.json()
    
    raccoonName.textContent = data.name
    raccoonLocation.textContent = data.location
    raccoonImage.alt = data.name

    const chosenImage = data.img_url || "https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2011/05/raccoon-3820327_1920.jpg"

    raccoonImage.src = chosenImage
}

fetchAllRaccoons()