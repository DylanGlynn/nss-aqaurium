/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const database = {
    tips: [
        {
            description: "Keep the tank clean!"
        }        
    ]
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}