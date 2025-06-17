// Footer
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;
const lastMod = document.querySelector("#last");
lastMod.innerHTML = `${document.lastModified}`;

// Hamburger
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

