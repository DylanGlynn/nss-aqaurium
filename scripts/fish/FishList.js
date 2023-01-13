// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish__card">
                <div><img class="fish__image--card" src="${fish.image}"/></div>
                <p class="fish__list--text">
                <div class="fish__name"><b class="category">Name:</b> ${fish.name}</div>
                <div class="fish__species"><b class="category">Species:</b> ${fish.species}</div>
                <div class="fish__length"><b class="category">Length:</b> ${fish.length}</div>
                <div class="fish__location"><b class="category">Location:</b> ${fish.location}</div>
                <div class="fish__diet"><b class="category">Diet:</b> ${fish.food}</div>
                </p>
        </section>`
    }
    htmlString += `</article>`
    return htmlString
}