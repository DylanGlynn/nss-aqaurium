// Import the function that returns a copy of the tip array
import { getTips } from "./database.js"

export const TipsList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTNL representations of each tip here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<aside class="tip__card">
                <div class="tip__description">${tip.description}</div>
        </aside>`
    }
    htmlString += `</article>`
    return htmlString
}