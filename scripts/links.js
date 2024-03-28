const baseURL ="https://Brearomer.github.io/wdd230";
const linksURL = "https://Brearomer.github.io/wdd230/data/links.json"; 

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
} 

getLinks(); 


function displayLinks(weeks) {
    
    weeks.forEach(function(week, index) {
        
        console.log("Week " + (index + 1) + ":");

        
        if (week.links && week.links.length > 0) {
            console.log("Links:");
            week.links.forEach(function(link, linkIndex) {
                console.log("- " + link);
            });
        } else {
            console.log("No links available for this week.");
        }

        
    });
}


displayLinks(weeks);

function createLinkList(links){
    const ul = document.createElement('ul');
    ul.classList.add('links');

    links.forEach(function(link) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.title;
        li.appendChild(a);
        ul.appendChild(li);
    });

    return ul;
} 

function generateWeeksHTML(weeks){
    const weeksContainer = document.getElementById('weks-container');

    weeks.forEach(function(week, index){
       const weekDiv = document.createElement('div');
       weekDiv.classList.add('week');

       const weekHeader = document.createElement('h2');
       weekHeader.textContent = week.week;
       weekDiv.appendChild(weekHeader);

       const linkList = createLinkList(week.links);
       weekDiv.appendChild(linkList);

       weeksContainer.appendChild(weekDiv);
    });
} 

generateWeeksHTML(weeks);