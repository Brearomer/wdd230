document.addEventListener('DOMContentLoaded', function() {
    generateCalendar();
});

function generateCalendar() {
    var calendarBody = document.getElementById('calendar-body');
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    var firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); 

    var dateCounter = 1;
    var calendarHTML = '';

    for (var i = 0; i < 6; i++) { 
        calendarHTML += '<tr>';
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                calendarHTML += '<td></td>'; 
            } else if (dateCounter > daysInMonth) {
                calendarHTML += '<td></td>'; 
            } else {
                calendarHTML += '<td>' + dateCounter + '</td>';
                dateCounter++;
            }
        }
        calendarHTML += '</tr>';
    }

    calendarBody.innerHTML = calendarHTML;
}
