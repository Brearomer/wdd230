const msToDays = 84600000;
const theDateToday = new Date();

const todayElement = document.querySelector("#today");

const today = Date.now();
Date(Date.UTC(theDateToday.getFullYear(), 11, 25));

todayElement.textContent = today;