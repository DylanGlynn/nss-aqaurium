import { getTips } from './database.js'
const allTips = getTips()

for (const tip of allTips) {
    console.log(tips)
}

// Import the FishList function from the correct module
import { TipsList } from './TipsList.js'
const finalList = TipsList()
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".tipsList")

parentHTMLElement.innerHTML = TipsList()