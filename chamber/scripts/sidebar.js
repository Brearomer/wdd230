document.addEventListener("DOMContentLoaded", function(){
    const sideContent = document.getElementById('sideContent');
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    const currentDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000;

    if(!lastVisitDate){
        sideContent.textContent = "Welcome! Let us know if you have any questions.";

    } else{
        const daysDifference = Math.round(Math.abs((currentDate - new Date (lastVisitDate))))
    }

    if(daysDifference === 0){
        sideContent.textContent = "Back so soon! Awesome!";

    } else{
        const message = daysDifference === 1 ? "day" : "days";
        sideContent.textContent = `You last visit ${daysDifference} ${message} ago.`;
    }

    localStorage.setItem('lastVisitDate', currentDate.toISOString());
});
