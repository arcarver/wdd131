// Footer
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;
const lastMod = document.querySelector("#last");
lastMod.innerHTML = `${document.lastModified}`;


// famous gardens through the ages sorted
const gardens = [
    {
        gardenName: "Gardens of Versailles",
        location: "Versailles, France",
        built: 1661,
        area: 2000,
        imageURL: "images/versailles.webp",
    },
    {
        gardenName: "Central Park",
        location: "New York City, New York.webp",
        built: 1858,
        area: 843,
        imageURL: "images/central-park.webp"
    },
    {
        gardenName: "Shalamar Gardens",
        location: "Lahore, Pakistan",
        built: 1641,
        area: 80,
        imageURL: "images/shalimar.webp"
    },
    {
        gardenName: "Garden of Eden",
        location: "Adamondioman, Missouri",
        built: 7000 bc
        area:
        imageURL:
    },
    {
        gardenName: "Garden of Eden",
        location: "Adamondioman, Missouri",
        built: 7000 bc
        area:
        imageURL:
    },
    {
        gardenName: "Garden of Eden",
        location: "Adamondioman, Missouri",
        built: 7000 bc
        area:
        imageURL:
    },
    {
        gardenName: "Garden of Eden",
        location: "Adamondioman, Missouri",
        built: 7000 bc
        area:
        imageURL:
    },
    {
        gardenName: "Garden of Eden",
        location: "Adamondioman, Missouri",
        built: 7000 bc
        area:
        imageURL:
    },
    {
        gardenName: "Garden of Eden",
        location: "Adamondioman, Missouri",
        built: 7000 bc
        area:
        imageURL:
    }
];