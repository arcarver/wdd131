const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

const lastMod = document.querySelector("#last");
lastMod.innerHTML = `${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Montpelier Idaho Temple",
        location: "Montpelier, Idaho, United States",
        dedicated: "2026, early",
        area: 27000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/montpelier-idaho-temple/montpelier-idaho-temple-36129-main.jpg"
    },
    {
        templeName: "Moses Lake Washington Temple",
        location: "Moses Lake, Washington, United States",
        dedicated: "2023, September, 17",
        area: 28933,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/moses-lake-washington-temple/moses-lake-washington-temple-56955-thumb.jpg"
    },
    {
        templeName: "Los Angeles California Temple",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 11-14",
        area: 190614,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
    },
];

// function createImages(value) {
//     var newElement = document.createElement("img");
//     newElement.src = value.imageUrl;
//     newElement.className = 'templestyle'
//     templeList.appendChild(newElement);
// }

// const createImg = (value) => {
//     var newElement = document.createElement("img");
//     newElement.src = value.imageUrl;
//     newElement.className = 'templestyle'
//     templeList.appendChild(newElement);
// }
const templeCard = document.querySelector("#card");
temples.map((value) => {
    var newName = document.createElement("h1");
    newElement.src = value.templeName;
    templeCard.appendChild(newName);
})
const templeList = document.querySelector("#temple-list");
temples.map((value) => {
    var newElement = document.createElement("img");
    newElement.src = value.imageUrl;
    newElement.className = 'templestyle'
    templeList.appendChild(newElement);
});