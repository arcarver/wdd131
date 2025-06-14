const showVisits = document.querySelector(".visits");

let totalVisits = Number(window.localStorage.getItem("totalVisits-ls")) || 0;

if (totalVisits !== 0) {
    showVisits.innerHTML = totalVisits;
} else {
    showVisits.innerHTML = "This is your first review. Thank you for reviewing our products!"
}
totalVisits++;
localStorage.setItem("totalVisits-ls", totalVisits); 
