const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
generateCalendar(currentYear, currentMonth);


function generateCalendar(year, month){
    const calenderBody = document.getElementById('calender-body');
    calendarBody.innerHTML ='';

    const daysInMonth = new Date(year, month + 1,0).getDate();
    const firstDay = new Date(year, month, 1).getDate();

    let date = 1;
    for (let i = 0;  i < 6; i++){
        const row = document.createElement('tr');
        for(let j = 0; j < 7; j++){
            const cell = document.createElement('td');
            if(i == 0 && j < firstDay){
                const emptyCell = document.createTextNode('');
                cell.appendChild(emptyCell);     
            } else if(date > daysInMonth){
                break;
            } else{
                const dayCell = document.createTextNode(date);
                cell.appendChild(dayCell);
                date++;
            }
        }
        row.appendChild(cell);
    } 
    calenderBody.appendChild(row);
}