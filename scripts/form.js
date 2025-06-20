// product options 
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productsElement = document.querySelector("#productName");

function makeProductSelection(value) {
    const optionElement = document.createElement("option");

    optionElement.innerHTML = value.id;
    optionElement.innerHTML = value.name;

    productsElement.appendChild(optionElement);
}
products.map(makeProductSelection);

// Footer inforamtion
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;
const lastMod = document.querySelector("#last");
lastMod.innerHTML = `${document.lastModified}`;

