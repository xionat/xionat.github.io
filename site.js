const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let message;
if (isMorning) {
    message = "Good morning! Welcome to my website!";
} else if (isAfternoon) {
    message = "Good afternoon! Welcome to my website!";
} else {
    message = "Good evening! Welcome to my website!";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("welcome").textContent = message;
});