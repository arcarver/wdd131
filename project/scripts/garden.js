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
        gardenName: "Chambord Castle",
        location: "Chambord, France",
        built: 1684,
        area: 16,
        imageURL: "images/chambord.webp"
    },
    {
        gardenName: "Peterhof State Museum Reserve",
        location: "St Petersburg, Russia",
        built: 1705,
        area: 2471,
        imageURL: "images/peterhof.webp"
    },
    {
        gardenName: "Taj Mahal",
        location: "Agra, India",
        built: 1631,
        area: 22,
        imageURL: "images/taj-mahal",
    },
    {
        gardenName: "Alfàbia",
        location: "Bunyola,  Spain",
        built: 1200,
        area: "unknown",
        imageURL: "images/alfabia.webp"
    },
    {
        gardenName: "Monet's Garden",
        location: "Giverny,France",
        built: 1883,
        area: 5,
        imageURL: "images.monet.webp"
    },
    {
        gardenName: "Butchart Garden",
        location: "Brentwood Bay, British Colombia",
        built: 1904,
        area: 55,
        imageURL: "images/butchard.webp"
    }
];