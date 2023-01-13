/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const database = {
    fish: [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Synchiropus_altivelis_by_OpenCage.jpg/220px-Synchiropus_altivelis_by_OpenCage.jpg",
            name: "Bart",
            species: "Red dragonet (Foetorepus altivelis)",
            food: "Crustaceans",
            length: 6,
            location: "The Cocos (Keeling) Islands"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Centropyge_acanthops_R%C3%A9union.JPG",
            name: "Bud",
            species: "Orange-back pygmy angelfish (Centropyge acanthops)",
            food: "An uncontrolable desire to eat the flesh of the living.",
            length: 3,
            location: "Pemba, Mozambique"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/LabropAustral2RLS.jpg/220px-LabropAustral2RLS.jpg",
            name: "Heavyweigh Champion",
            species: "Southern tubelip (Labropsis australis)",
            food: "Mostly polyps and microplastics",
            length: 2,
            location: "Lady Musgrave Island"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Odax_pullus_%28Greenbone%29.jpg",
            name: "Lewis",
            species: "Greenbone (Odax pullus)",
            food: "Expensive tastes.",
            length: 16,
            location: "Moutere Hauriri, New Zealand"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lepidonotothen_nudifrons.jpg/220px-Lepidonotothen_nudifrons.jpg",
            name: "Toecutter",
            species: "Yellowfin rockcod (Lindbergichthys nudifrons)",
            food: "The vanquished",
            length: 4,
            location: "Puerto Williams, Chile"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/NeoclinusbryopeJI1.jpg/220px-NeoclinusbryopeJI1.jpg",
            name: "Gene Parmesan",
            species: "Chaenopsid blenny (Neoclinus bryope)",
            food: "Parmesan cheese, collectable trading cards",
            length: 3,
            location: "Minamiōsumi, Kimotsuki District, Kagoshima Prefecture, Japan"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Apogon_leptacanthus.JPG",
            name: "Zoe",
            species: "Threadfin cardinalfish (Zormia leptacantha)",
            food: "Wendy's-style burgers",
            length: 2,
            location: "Ilha de Goa Lighthouse, Mozambique"
        }
        
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}