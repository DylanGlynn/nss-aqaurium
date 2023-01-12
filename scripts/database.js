/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const database = {
    fish: [
        {
            name: "Bart",
            species: "TBD",
            food: "crustaceans",
            size: 3,
            havested: "Beyond your imagination"
        }
    ]
}
export const getFish = (database) => {
    return database.fish.map(fish => ({...fish}))
}