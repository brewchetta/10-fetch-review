// BASE URLS
const BASE_URL = "http://localhost:3000/oscar_winners"

// DOM ELEMENTS
const awardWinnersList = document.querySelector("#award-winners-list")
const detailAwardName = document.querySelector("#detail-award-name")
const detailAwardWinner = document.querySelector("#detail-award-winner")
const detailAwardMovie = document.querySelector("#detail-award-movie")


// creates li for award winner
function createAwardWinnerLi(awardWinnerObj) {
    const li = document.createElement("li")
    li.textContent = `${awardWinnerObj.award_name}: ${awardWinnerObj.winner}`
    awardWinnersList.append( li )

    li.addEventListener( "click", () => getAwardWinnerById( awardWinnerObj.id ) )
}


// fetches the award winner based on id from the json server
// changes text content for the detail section
async function getAwardWinnerById( id ) {
    const response = await fetch(`${BASE_URL}?id=${id}`)
    const data = await response.json()

    const awardObj = data[0]
    detailAwardName.textContent = awardObj.award_name
    detailAwardWinner.textContent = awardObj.winner
    detailAwardMovie.textContent = awardObj.movie
}


// async allows us to handle asynchronous actions inside the fn 
async function getAllAwardWinners() {
    // await basically tells the fn to wait until the fetch is done
    // and then go to the next line
    const response = await fetch(BASE_URL)
    // parse the JSON data into Javascript data
    const data = await response.json()
    // for each item in the data array run the createAwardWinnerLi
    // each item gets passed in automatically as awardWinnerObj
    data.forEach( createAwardWinnerLi )
}


// INITIAL CALL
getAllAwardWinners()


// RETURN AT 11:30 EST
// and then... EXERCISES 

// 1. Create a section for planetary buttons. Fetch the planet data and create a <button> for each of the planets in the json file.

// 2. When a planet button is clicked, populate a section with all the information for that planet except the `is_planet` attribute. 
// ...Use an <img> tag to show the image for that planet. 
// ...Use a <ul> and populate the <ul> with <li>s for each string in the `god_of` section.

// 3. Make sure to clear out the `god_of` section whenever a new planet is clicked and then repopulate that <ul>.

// 4. If the planet is listed as `false` for `is_planet`, make the planet's <img> tag smaller (you can style it to have a smaller width) when setting the <img> tag's other attributes. 
// If it's listed as `true` make the <img> tag larger (you can style it's width again).