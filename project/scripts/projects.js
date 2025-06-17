const showIdeas = document.querySelector(".ideas");

let totalIdeas = Number(window.localStorage.getItem("totalIdeas-ls")) || 0;

if (totalIdeas !== 0) {
    showIdeas.innerHTML = `You have suggested ${totalIdeas} ideas. Thank you!`;
} else {
    showIdeas.innerHTML = "This is your first suggestion. Thank you for your idea!"
}
totalIdeas++;
localStorage.setItem("totalIdeas-ls", totalIdeas); 
