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
        imageURL: "images/taj-mahal.webp",
    },
    {
        gardenName: "Alfàbia",
        location: "Bunyola, Spain",
        built: 1200,
        area: "unknown",
        imageURL: "images/alfabia.webp"
    },
    {
        gardenName: "Monet's Garden",
        location: "Giverny, France",
        built: 1883,
        area: 5,
        imageURL: "images/monet.webp"
    },
    {
        gardenName: "Butchart Garden",
        location: "Brentwood Bay, British Colombia",
        built: 1904,
        area: 55,
        imageURL: "images/butchart.webp"
    },
];

const gardensList = document.querySelector("#garden-list");

function makeCards(value) {
    const divForGardenInfo = document.createElement("div");
    const gardenImageElement = document.createElement("img");
    const newName = document.createElement("h2");
    const newLocation = document.createElement("h3");
    const date = document.createElement("h4");
    const totalArea = document.createElement("h4");

    gardenImageElement.src = value.imageURL;
    gardenImageElement.alt = value.gardenName;
    gardenImageElement.loading = "lazy";
    gardenImageElement.className = 'gardenStyle';

    divForGardenInfo.id = 'card'
    divForGardenInfo.appendChild(newName);
    divForGardenInfo.appendChild(newLocation);
    divForGardenInfo.appendChild(date);
    divForGardenInfo.appendChild(totalArea);
    divForGardenInfo.appendChild(gardenImageElement);

    newName.textContent = value.gardenName;

    newLocation.innerHTML = `<span class="label">Location:</span> ${value.location}`;
    date.innerHTML = `<span class="label">Built:</span> ${value.built}`;
    totalArea.innerHTML = `<span class="label">Size:</span> ${value.area} acres`;
    gardensList.appendChild(divForGardenInfo);
};

gardens.map(makeCards);

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    document.querySelector("#garden-list").innerHTML = "";
    const oldGardens = gardens.filter((value) => {
        const dateOfGarden = Number(value.dedicated.substring(0, 4));
        return dateOfGarden < 1750;
    });
    oldGardens.map(makeCards);
})


const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    document.querySelector("#garden-list").innerHTML = "";
    const newGardens = gardens.filter((value) => {
        const dateOfGarden = Number(value.built.substring(0, 4));
        return dateOfGarden > 1900;
    });
    newGardens.map(makeCards);
})


const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    document.querySelector("#garden-list").innerHTML = "";
    const largeGardens = gardens.filter((value) => {
        const sizeOfGarden = value.area;
        return sizeOfGarden > 500;
    });
    largeGardens.map(makeCards);
})


const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    document.querySelector("#garden-list").innerHTML = "";
    const smallGardens = gardens.filter((value) => {
        const sizeOfGarden = value.area;
        return sizeOfGarden < 25;
    });
    smallGardens.map(makeCards);
})


const allLink = document.querySelector("#all");
homeLink.addEventListener("click", () => {
    document.querySelector("#garden-list").innerHTML = "";
    gardens.map(makeCards);
})